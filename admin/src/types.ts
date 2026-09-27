export type UserRole = 'admin' | 'author';

export interface AdminUser {
  _id: string;
  id: string;
  name: string;
  email: string;
  role: UserRole;
  penName: string;
  active: boolean;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

export type PostStatus = 'draft' | 'published';

export type CategoryType =
  | 'Destination Guides'
  | 'Surf & Beaches'
  | 'Wildlife & Safari'
  | 'Partner Spotlights'
  | 'Food & Culture'
  | 'Getting Around';

export type CardVisualType =
  | 'destination-split'
  | 'quote-minimal'
  | 'laptop-mockup'
  | 'graphic-bold'
  | 'clean-editorial';

export interface TileConfig {
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
}

export interface PostStep {
  title: string;
  description: string;
  codeSnippet?: string;
  tip?: string;
}

export interface PostFaq {
  question: string;
  answer: string;
}

export interface PostContent {
  summary?: string;
  introduction: string[];
  steps: PostStep[];
  keyTakeaways: string[];
  conclusion?: string;
  faq: PostFaq[];
}

/** A post exactly as the admin API stores it. */
export interface AdminPost {
  _id: string;
  slug: string;
  title: string;
  displayTitle?: string;
  category: CategoryType;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  visualType: CardVisualType;
  featured: boolean;
  heroImage?: string;
  tileConfig: TileConfig;
  content: PostContent;
  status: PostStatus;
  publishedAt?: string;
  order: number;
  createdBy?: { _id: string; name: string; penName: string } | string;
  updatedBy?: { _id: string; name: string; penName: string } | string;
  createdAt: string;
  updatedAt: string;
}

/** The payload the editor submits. Slug is derived server-side when omitted. */
export interface PostInput {
  title: string;
  slug?: string;
  displayTitle?: string;
  category: CategoryType;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  visualType: CardVisualType;
  featured: boolean;
  heroImage?: string;
  tileConfig: TileConfig;
  content: PostContent;
  status: PostStatus;
  order: number;
}

export interface FieldIssue {
  field: string;
  message: string;
}
