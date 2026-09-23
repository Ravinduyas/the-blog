import { Router } from 'express';
import { User } from '../models/User.js';
import { loginSchema } from '../validation.js';
import { asyncHandler, HttpError } from '../utils/http.js';
import { requireAuth, signToken, type AuthedRequest } from '../middleware/auth.js';

export const authRouter = Router();

/** POST /api/auth/login — exchange credentials for a bearer token. */
authRouter.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password } = loginSchema.parse(req.body);

    const user = await User.findOne({ email: email.toLowerCase() });
    // Same message either way, so the response cannot be used to enumerate accounts.
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpError(401, 'Email or password is incorrect.');
    }
    if (!user.active) throw new HttpError(403, 'This account has been deactivated.');

    user.lastLoginAt = new Date();
    await user.save();

    res.json({ token: signToken(user), user: user.toJSON() });
  })
);

/** GET /api/auth/me — who the current token belongs to. */
authRouter.get(
  '/me',
  requireAuth,
  asyncHandler(async (req: AuthedRequest, res) => {
    res.json({ user: req.user!.toJSON() });
  })
);

/** POST /api/auth/change-password — a signed-in user rotating their own password. */
authRouter.post(
  '/change-password',
  requireAuth,
  asyncHandler(async (req: AuthedRequest, res) => {
    const { currentPassword, newPassword } = req.body ?? {};
    if (typeof newPassword !== 'string' || newPassword.length < 8) {
      throw new HttpError(422, 'The new password must be at least 8 characters.');
    }

    const user = req.user!;
    if (!(await user.comparePassword(String(currentPassword ?? '')))) {
      throw new HttpError(401, 'Your current password is incorrect.');
    }

    user.passwordHash = await User.hashPassword(newPassword);
    await user.save();

    res.json({ ok: true });
  })
);
