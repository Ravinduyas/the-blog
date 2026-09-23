import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { User, type UserDocument, type UserRole } from '../models/User.js';
import { HttpError } from '../utils/http.js';

export interface AuthedRequest extends Request {
  user?: UserDocument;
}

export interface TokenPayload {
  sub: string;
  role: UserRole;
}

export function signToken(user: UserDocument): string {
  const payload: TokenPayload = { sub: String(user._id), role: user.role };
  return jwt.sign(payload, env.jwtSecret, { expiresIn: env.jwtExpiresIn } as jwt.SignOptions);
}

/** Rejects the request unless it carries a valid bearer token for an active user. */
export async function requireAuth(
  req: AuthedRequest,
  _res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const header = req.headers.authorization ?? '';
    const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
    if (!token) throw new HttpError(401, 'Sign in to continue.');

    let payload: TokenPayload;
    try {
      payload = jwt.verify(token, env.jwtSecret) as TokenPayload;
    } catch {
      throw new HttpError(401, 'Your session has expired. Sign in again.');
    }

    const user = await User.findById(payload.sub);
    if (!user) throw new HttpError(401, 'That account no longer exists.');
    if (!user.active) throw new HttpError(403, 'This account has been deactivated.');

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

/** Gate a route behind one or more roles. Use after requireAuth. */
export function requireRole(...roles: UserRole[]) {
  return (req: AuthedRequest, _res: Response, next: NextFunction): void => {
    if (!req.user) return next(new HttpError(401, 'Sign in to continue.'));
    if (!roles.includes(req.user.role)) {
      return next(new HttpError(403, 'You do not have permission to do that.'));
    }
    next();
  };
}

/** Admins may touch anything; an author is limited to the posts they created. */
export function canEditPost(user: UserDocument, postCreatedBy: unknown): boolean {
  return user.role === 'admin' || String(postCreatedBy) === String(user._id);
}
