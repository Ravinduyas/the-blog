import express from 'express';
import cors from 'cors';
import { env, isProduction } from './config/env.js';
import { connectDatabase, disconnectDatabase } from './config/db.js';
import { authRouter } from './routes/auth.routes.js';
import { usersRouter } from './routes/users.routes.js';
import { publicPostsRouter } from './routes/posts.public.routes.js';
import { adminPostsRouter } from './routes/posts.admin.routes.js';
import { errorHandler, notFound } from './middleware/errors.js';
import { CATEGORIES, VISUAL_TYPES } from './models/Post.js';

const app = express();

app.set('trust proxy', 1);
app.use(express.json({ limit: '1mb' }));
app.use(
  cors({
    origin(origin, callback) {
      // Same-origin and tooling requests arrive without an Origin header.
      if (!origin || env.corsOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`Origin ${origin} is not allowed by CORS`));
    },
    credentials: true,
  })
);

if (!isProduction) {
  app.use((req, _res, next) => {
    console.log(`[api] ${req.method} ${req.originalUrl}`);
    next();
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'down-south-blog-api', env: env.nodeEnv });
});

/** Drives the dropdowns in the admin editor so the options never drift from the schema. */
app.get('/api/meta', (_req, res) => {
  res.json({ categories: CATEGORIES, visualTypes: VISUAL_TYPES });
});

app.use('/api/auth', authRouter);
app.use('/api/posts', publicPostsRouter);
app.use('/api/admin/posts', adminPostsRouter);
app.use('/api/admin/users', usersRouter);

app.use(notFound);
app.use(errorHandler);

async function start(): Promise<void> {
  await connectDatabase();

  const server = app.listen(env.port, () => {
    console.log(`[api] listening on http://localhost:${env.port}`);
  });

  // Without this, a busy port surfaces as an unhandled 'error' event and a
  // stack trace that says nothing about what to actually do.
  server.on('error', (error: NodeJS.ErrnoException) => {
    if (error.code === 'EADDRINUSE') {
      console.error(
        `\n[api] port ${env.port} is already in use — another copy of the API is probably still running.\n` +
          `      Stop it, or set PORT to something else in backend/.env.\n\n` +
          `      Find it:  netstat -ano | findstr :${env.port}\n` +
          `      Stop it:  taskkill /PID <pid> /F\n`
      );
    } else {
      console.error('[api] server error:', error);
    }
    void disconnectDatabase().finally(() => process.exit(1));
  });

  const shutdown = async (signal: string) => {
    console.log(`\n[api] ${signal} received, shutting down`);
    server.close();
    await disconnectDatabase();
    process.exit(0);
  };

  process.on('SIGINT', () => void shutdown('SIGINT'));
  process.on('SIGTERM', () => void shutdown('SIGTERM'));
}

start().catch((error) => {
  console.error('[api] failed to start:', error);
  process.exit(1);
});
