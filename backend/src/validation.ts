import { z } from 'zod';
import { CATEGORIES, POST_STATUSES, VISUAL_TYPES } from './models/Post.js';

const hexColor = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, 'Use a hex colour such as #c3c8cf');

const optionalUrl = z.union([z.string().url('Must be a valid URL'), z.literal('')]).optional();

export const tileConfigSchema = z.object({
  bgColor: hexColor,
  textColor: hexColor,
  badgeText: z.string().max(12).optional(),
  badgeColor: hexColor.optional(),
  topLabel: z.string().max(80).optional(),
  headlineText: z.string().min(1, 'The tile needs a headline').max(200),
  headlineHighlight: z.string().max(200).optional(),
  buttonText: z.string().max(40).optional(),
  scriptSubtitle: z.string().max(80).optional(),
  mockupImage: optionalUrl,
  mockupType: z.enum(['laptop', 'browser', 'split-vertical']).optional(),
  partnerName: z.string().max(120).optional(),
});

export const contentSchema = z.object({
  introduction: z.array(z.string().min(1)).default([]),
  steps: z
    .array(
      z.object({
        title: z.string().min(1, 'Each section needs a heading'),
        description: z.string().min(1, 'Each section needs body copy'),
        codeSnippet: z.string().optional(),
        tip: z.string().optional(),
      })
    )
    .default([]),
  keyTakeaways: z.array(z.string().min(1)).default([]),
  conclusion: z.string().optional(),
});

export const postInputSchema = z.object({
  title: z.string().min(3, 'Give the article a title').max(300),
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, 'Use lowercase letters, numbers and hyphens only')
    .max(80)
    .optional(),
  displayTitle: z.string().max(300).optional(),
  category: z.enum(CATEGORIES),
  date: z.string().min(1, 'Pick a display date'),
  readTime: z.string().min(1).max(30).default('5 min read'),
  author: z.string().min(1, 'Set a byline'),
  excerpt: z.string().min(10, 'Write a short excerpt').max(600),
  visualType: z.enum(VISUAL_TYPES),
  featured: z.boolean().default(false),
  heroImage: optionalUrl,
  tileConfig: tileConfigSchema,
  content: contentSchema,
  status: z.enum(POST_STATUSES).default('draft'),
  order: z.number().int().default(0),
});

export const postUpdateSchema = postInputSchema.partial();

export const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(1, 'Enter your password'),
});

export const userCreateSchema = z.object({
  name: z.string().min(2, 'Enter a name').max(120),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(8, 'Use at least 8 characters'),
  role: z.enum(['admin', 'author']).default('author'),
  penName: z.string().min(1).max(120).optional(),
  active: z.boolean().default(true),
});

export const userUpdateSchema = z.object({
  name: z.string().min(2).max(120).optional(),
  email: z.string().email().optional(),
  password: z.string().min(8, 'Use at least 8 characters').optional(),
  role: z.enum(['admin', 'author']).optional(),
  penName: z.string().min(1).max(120).optional(),
  active: z.boolean().optional(),
});

export type PostInput = z.infer<typeof postInputSchema>;
