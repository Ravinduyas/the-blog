/**
 * Moves retired articles back to draft so they stop appearing on the site,
 * without deleting them. Re-publish from the admin panel if ever needed.
 *
 *   npx tsx src/scripts/unpublish-retired.ts
 */
import { connectDatabase, disconnectDatabase } from '../config/db.js';
import { Post } from '../models/Post.js';

/** Articles removed from the site: placeholder partner spotlights and dummy content. */
const RETIRED_SLUGS = [
  'partner-spotlight-mirissa-blue-whale-tours',
  'partner-spotlight-hiriketiya-surf-house',
  'partner-spotlight-galle-fort-food-walks',
  'blue-whales-off-mirissa',
];

async function run(): Promise<void> {
  await connectDatabase();
  const result = await Post.updateMany(
    { slug: { $in: RETIRED_SLUGS }, status: 'published' },
    { $set: { status: 'draft', featured: false } }
  );
  console.log(`[retire] moved ${result.modifiedCount} article(s) to draft`);
  await disconnectDatabase();
}

run().catch(async (error) => {
  console.error('[retire] failed:', error);
  await disconnectDatabase().catch(() => undefined);
  process.exit(1);
});
