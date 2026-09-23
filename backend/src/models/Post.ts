import mongoose, { Schema, Document, Types } from 'mongoose';

export const CATEGORIES = [
  'Destination Guides',
  'Surf & Beaches',
  'Wildlife & Safari',
  'Partner Spotlights',
  'Food & Culture',
  'Getting Around',
] as const;

export const VISUAL_TYPES = [
  'destination-split',
  'quote-minimal',
  'laptop-mockup',
  'graphic-bold',
  'clean-editorial',
] as const;

export const POST_STATUSES = ['draft', 'published'] as const;

export type Category = (typeof CATEGORIES)[number];
export type VisualType = (typeof VISUAL_TYPES)[number];
export type PostStatus = (typeof POST_STATUSES)[number];

export interface PostDocument extends Document {
  /** URL-safe identifier. Becomes `id` in the public payload the blog consumes. */
  slug: string;
  title: string;
  displayTitle?: string;
  category: Category;
  /** Human-facing date string shown on the card, e.g. "August 10, 2026". */
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  visualType: VisualType;
  featured: boolean;
  heroImage?: string;
  tileConfig: {
    bgColor: string;
    textColor: string;
    badgeText?: string;
    badgeColor?: string;
    topLabel?: string;
    headlineText: string;
    headlineHighlight?: string;
    buttonText?: string;
    scriptSubtitle?: string;
    mockupImage?: string;
    mockupType?: 'laptop' | 'browser' | 'split-vertical';
    partnerName?: string;
  };
  content: {
    introduction: string[];
    steps: { title: string; description: string; codeSnippet?: string; tip?: string }[];
    keyTakeaways: string[];
    conclusion?: string;
  };
  status: PostStatus;
  publishedAt?: Date;
  /** Manual ordering in the grid — lower sorts first, ties fall back to publish date. */
  order: number;
  createdBy: Types.ObjectId;
  updatedBy?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const stepSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    codeSnippet: { type: String },
    tip: { type: String },
  },
  { _id: false }
);

const tileConfigSchema = new Schema(
  {
    bgColor: { type: String, required: true, default: '#c3c8cf' },
    textColor: { type: String, required: true, default: '#272d34' },
    badgeText: { type: String },
    badgeColor: { type: String },
    topLabel: { type: String },
    headlineText: { type: String, required: true },
    headlineHighlight: { type: String },
    buttonText: { type: String },
    scriptSubtitle: { type: String },
    mockupImage: { type: String },
    mockupType: { type: String, enum: ['laptop', 'browser', 'split-vertical'] },
    partnerName: { type: String },
  },
  { _id: false }
);

const contentSchema = new Schema(
  {
    introduction: { type: [String], default: [] },
    steps: { type: [stepSchema], default: [] },
    keyTakeaways: { type: [String], default: [] },
    conclusion: { type: String },
  },
  { _id: false }
);

const postSchema = new Schema<PostDocument>(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    title: { type: String, required: true, trim: true, maxlength: 300 },
    displayTitle: { type: String, trim: true },
    category: { type: String, enum: CATEGORIES, required: true },
    date: { type: String, required: true },
    readTime: { type: String, required: true, default: '5 min read' },
    author: { type: String, required: true },
    excerpt: { type: String, required: true, maxlength: 600 },
    visualType: { type: String, enum: VISUAL_TYPES, required: true, default: 'quote-minimal' },
    featured: { type: Boolean, default: false },
    heroImage: { type: String },
    tileConfig: { type: tileConfigSchema, required: true },
    content: { type: contentSchema, required: true, default: () => ({}) },
    status: { type: String, enum: POST_STATUSES, default: 'draft', index: true },
    publishedAt: { type: Date },
    order: { type: Number, default: 0 },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_doc, ret) {
        delete (ret as Record<string, unknown>).__v;
        return ret;
      },
    },
  }
);

// The grid queries published posts by category and date constantly; this covers it.
postSchema.index({ status: 1, order: 1, publishedAt: -1 });
postSchema.index({ title: 'text', excerpt: 'text' });

export const Post = mongoose.model<PostDocument>('Post', postSchema);

/**
 * Reshapes a stored post into the exact `BlogPost` object the public blog expects,
 * so the React components keep working untouched.
 */
export function toPublicPost(post: PostDocument) {
  return {
    id: post.slug,
    title: post.title,
    ...(post.displayTitle ? { displayTitle: post.displayTitle } : {}),
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    author: post.author,
    excerpt: post.excerpt,
    visualType: post.visualType,
    ...(post.featured ? { featured: true } : {}),
    ...(post.heroImage ? { heroImage: post.heroImage } : {}),
    tileConfig: stripEmpty(post.tileConfig),
    content: {
      introduction: post.content?.introduction ?? [],
      ...(post.content?.steps?.length ? { steps: post.content.steps.map(stripEmpty) } : {}),
      ...(post.content?.keyTakeaways?.length
        ? { keyTakeaways: post.content.keyTakeaways }
        : {}),
      ...(post.content?.conclusion ? { conclusion: post.content.conclusion } : {}),
    },
  };
}

/** Drops undefined/empty optional keys so the payload matches the hand-written data file. */
function stripEmpty<T extends Record<string, unknown>>(value: T): Partial<T> {
  const source = typeof (value as any)?.toObject === 'function' ? (value as any).toObject() : value;
  const out: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(source)) {
    if (val !== undefined && val !== null && val !== '') out[key] = val;
  }
  return out as Partial<T>;
}
