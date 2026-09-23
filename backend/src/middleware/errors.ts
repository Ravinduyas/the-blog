import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import mongoose from 'mongoose';
import { HttpError } from '../utils/http.js';
import { isProduction } from '../config/env.js';

export function notFound(_req: Request, res: Response): void {
  res.status(404).json({ error: 'Not found' });
}

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (error instanceof HttpError) {
    res.status(error.status).json({ error: error.message, details: error.details });
    return;
  }

  if (error instanceof ZodError) {
    res.status(422).json({
      error: 'Some fields need attention.',
      details: error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
    });
    return;
  }

  if (error instanceof mongoose.Error.ValidationError) {
    res.status(422).json({
      error: 'Some fields need attention.',
      details: Object.values(error.errors).map((e) => ({ field: e.path, message: e.message })),
    });
    return;
  }

  // Duplicate key — almost always the unique email or slug index.
  if (typeof error === 'object' && error !== null && (error as { code?: number }).code === 11000) {
    const field = Object.keys((error as { keyPattern?: Record<string, unknown> }).keyPattern ?? {})[0];
    res.status(409).json({ error: `That ${field ?? 'value'} is already taken.` });
    return;
  }

  console.error('[error]', error);
  res.status(500).json({
    error: 'Something went wrong on our end.',
    ...(isProduction ? {} : { detail: error instanceof Error ? error.message : String(error) }),
  });
}
