import { Router } from 'express';
import { User } from '../models/User.js';
import { userCreateSchema, userUpdateSchema } from '../validation.js';
import { asyncHandler, HttpError } from '../utils/http.js';
import { requireAuth, requireRole, type AuthedRequest } from '../middleware/auth.js';

export const usersRouter = Router();

// Everything below is admin-only.
usersRouter.use(requireAuth, requireRole('admin'));

/** GET /api/admin/users */
usersRouter.get(
  '/',
  asyncHandler(async (_req, res) => {
    const users = await User.find().sort({ createdAt: 1 });
    res.json({ users: users.map((u) => u.toJSON()) });
  })
);

/** POST /api/admin/users */
usersRouter.post(
  '/',
  asyncHandler(async (req, res) => {
    const input = userCreateSchema.parse(req.body);

    const user = await User.create({
      name: input.name,
      email: input.email.toLowerCase(),
      passwordHash: await User.hashPassword(input.password),
      role: input.role,
      penName: input.penName || input.name.split(' ')[0],
      active: input.active,
    });

    res.status(201).json({ user: user.toJSON() });
  })
);

/** PUT /api/admin/users/:id */
usersRouter.put(
  '/:id',
  asyncHandler(async (req: AuthedRequest, res) => {
    const input = userUpdateSchema.parse(req.body);
    const user = await User.findById(req.params.id);
    if (!user) throw new HttpError(404, 'That user does not exist.');

    const isSelf = String(user._id) === String(req.user!._id);
    // Guard rails so an admin cannot lock themselves out of their own panel.
    if (isSelf && input.role && input.role !== 'admin') {
      throw new HttpError(400, 'You cannot remove your own admin role.');
    }
    if (isSelf && input.active === false) {
      throw new HttpError(400, 'You cannot deactivate your own account.');
    }
    if (input.role === 'author' && user.role === 'admin' && (await isLastAdmin(user.id))) {
      throw new HttpError(400, 'This is the only admin left — promote someone else first.');
    }

    if (input.name !== undefined) user.name = input.name;
    if (input.email !== undefined) user.email = input.email.toLowerCase();
    if (input.role !== undefined) user.role = input.role;
    if (input.penName !== undefined) user.penName = input.penName;
    if (input.active !== undefined) user.active = input.active;
    if (input.password) user.passwordHash = await User.hashPassword(input.password);

    await user.save();
    res.json({ user: user.toJSON() });
  })
);

/** DELETE /api/admin/users/:id */
usersRouter.delete(
  '/:id',
  asyncHandler(async (req: AuthedRequest, res) => {
    const user = await User.findById(req.params.id);
    if (!user) throw new HttpError(404, 'That user does not exist.');

    if (String(user._id) === String(req.user!._id)) {
      throw new HttpError(400, 'You cannot delete your own account.');
    }
    if (user.role === 'admin' && (await isLastAdmin(user.id))) {
      throw new HttpError(400, 'This is the only admin left — promote someone else first.');
    }

    await user.deleteOne();
    res.json({ ok: true });
  })
);

/** True when the given user is the last remaining active admin. */
async function isLastAdmin(userId: string): Promise<boolean> {
  const others = await User.countDocuments({
    role: 'admin',
    active: true,
    _id: { $ne: userId },
  });
  return others === 0;
}
