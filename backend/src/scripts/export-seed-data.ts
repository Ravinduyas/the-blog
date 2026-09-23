/**
 * One-off: snapshots the hand-written blog data from the frontend into
 * seed-posts.json so `npm run seed` has no cross-package import at build time.
 *
 * Re-run with:  npx tsx src/scripts/export-seed-data.ts
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
// @ts-expect-error - reaches into the sibling frontend package; runtime-only, tsx resolves it.
import { BLOG_POSTS } from '../../../frontend/src/data/blogPosts.ts';

const here = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(here, 'seed-posts.json');

writeFileSync(target, JSON.stringify(BLOG_POSTS, null, 2), 'utf8');
console.log(`Wrote ${(BLOG_POSTS as unknown[]).length} posts to ${target}`);
