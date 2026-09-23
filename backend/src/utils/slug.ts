import { Post } from '../models/Post.js';

/** "Down South: 15 Best Things!" -> "down-south-15-best-things" */
export function slugify(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['\u2019]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

/**
 * Returns a slug that is free in the collection, appending -2, -3, ... on collision.
 * `ignoreId` lets an existing post keep its own slug while being edited.
 */
export async function uniqueSlug(base: string, ignoreId?: string): Promise<string> {
  const root = slugify(base) || 'post';
  let candidate = root;
  let suffix = 2;

  // Bounded so a pathological data set can never spin here forever.
  while (suffix < 500) {
    const clash = await Post.findOne({
      slug: candidate,
      ...(ignoreId ? { _id: { $ne: ignoreId } } : {}),
    })
      .select('_id')
      .lean();
    if (!clash) return candidate;
    candidate = `${root}-${suffix++}`;
  }

  throw new Error(`Could not derive a unique slug from "${base}"`);
}
