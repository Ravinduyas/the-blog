import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDatabase(): Promise<void> {
  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(env.mongoUri, { serverSelectionTimeoutMS: 8000 });
    console.log(`[db] connected to ${redact(env.mongoUri)}`);
  } catch (error) {
    console.error(
      `[db] could not reach MongoDB at ${redact(env.mongoUri)} — is mongod running?`
    );
    throw error;
  }

  mongoose.connection.on('disconnected', () => console.warn('[db] disconnected'));
  mongoose.connection.on('reconnected', () => console.log('[db] reconnected'));
}

export async function disconnectDatabase(): Promise<void> {
  await mongoose.connection.close();
}

/** Strips credentials out of a connection string before it reaches a log line. */
function redact(uri: string): string {
  return uri.replace(/\/\/[^@]*@/, '//***:***@');
}
