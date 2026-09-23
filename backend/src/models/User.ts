import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

export type UserRole = 'admin' | 'author';

export interface UserDocument extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  /** Byline used on articles. Defaults to the first name, editable per user. */
  penName: string;
  active: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(plain: string): Promise<boolean>;
}

interface UserModel extends Model<UserDocument> {
  hashPassword(plain: string): Promise<string>;
}

const userSchema = new Schema<UserDocument, UserModel>(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['admin', 'author'], default: 'author', required: true },
    penName: { type: String, required: true, trim: true, maxlength: 120 },
    active: { type: Boolean, default: true },
    lastLoginAt: { type: Date },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform(_doc, ret) {
        delete (ret as Record<string, unknown>).passwordHash;
        delete (ret as Record<string, unknown>).__v;
        return ret;
      },
    },
  }
);

userSchema.statics.hashPassword = function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 10);
};

userSchema.methods.comparePassword = function comparePassword(
  this: UserDocument,
  plain: string
): Promise<boolean> {
  return bcrypt.compare(plain, this.passwordHash);
};

export const User = mongoose.model<UserDocument, UserModel>('User', userSchema);
