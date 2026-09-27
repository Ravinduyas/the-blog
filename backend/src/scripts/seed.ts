/**
 * Seeds the database with the first admin account and the 18 hand-written
 * articles the blog shipped with. Safe to re-run: existing slugs are skipped,
 * so it will never clobber edits made through the admin panel.
 *
 *   npm run seed
 *   npm run seed -- --force   (rewrites every seeded article back to the snapshot)
 */
import { env } from '../config/env.js';
import { connectDatabase, disconnectDatabase } from '../config/db.js';
import { User } from '../models/User.js';
import { Post } from '../models/Post.js';
import { slugify } from '../utils/slug.js';
import seedPosts from './seed-posts.json' with { type: 'json' };

interface SeedPost {
  id: string;
  title: string;
  displayTitle?: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  visualType: string;
  featured?: boolean;
  heroImage?: string;
  tileConfig: Record<string, unknown>;
  content: {
    summary?: string;
    introduction?: string[];
    steps?: { title: string; description: string; codeSnippet?: string; tip?: string }[];
    keyTakeaways?: string[];
    conclusion?: string;
    faq?: { question: string; answer: string }[];
  };
}

async function run(): Promise<void> {
  const force = process.argv.includes('--force');

  await connectDatabase();

  // 1. First admin.
  let admin = await User.findOne({ email: env.seedAdmin.email.toLowerCase() });
  if (admin) {
    console.log(`[seed] admin already exists: ${admin.email}`);
  } else {
    admin = await User.create({
      name: env.seedAdmin.name,
      email: env.seedAdmin.email.toLowerCase(),
      passwordHash: await User.hashPassword(env.seedAdmin.password),
      role: 'admin',
      penName: env.seedAdmin.name.split(' ')[0],
      active: true,
    });
    console.log(`[seed] created admin ${admin.email} (password from SEED_ADMIN_PASSWORD)`);
  }

  // 2. Articles.
  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const [index, raw] of (seedPosts as SeedPost[]).entries()) {
    const slug = slugify(raw.id || raw.title);
    const existing = await Post.findOne({ slug });

    if (existing && !force) {
      skipped++;
      continue;
    }

    const doc = {
      slug,
      title: raw.title,
      displayTitle: raw.displayTitle,
      category: raw.category,
      date: raw.date,
      readTime: raw.readTime,
      author: raw.author,
      excerpt: raw.excerpt,
      visualType: raw.visualType,
      featured: Boolean(raw.featured),
      heroImage: raw.heroImage,
      tileConfig: raw.tileConfig,
      content: {
        summary: raw.content?.summary,
        introduction: raw.content?.introduction ?? [],
        steps: raw.content?.steps ?? [],
        keyTakeaways: raw.content?.keyTakeaways ?? [],
        conclusion: raw.content?.conclusion,
        faq: raw.content?.faq ?? [],
      },
      status: 'published' as const,
      publishedAt: existing?.publishedAt ?? new Date(),
      order: index,
      createdBy: existing?.createdBy ?? admin._id,
      updatedBy: admin._id,
    };

    if (existing) {
      existing.set(doc);
      await existing.save();
      updated++;
    } else {
      await Post.create(doc);
      created++;
    }
  }

  console.log(
    `[seed] posts — created ${created}, updated ${updated}, left alone ${skipped}` +
      (skipped && !force ? ' (pass --force to overwrite)' : '')
  );

  await disconnectDatabase();
  console.log('[seed] done');
}

run().catch(async (error) => {
  console.error('[seed] failed:', error);
  await disconnectDatabase().catch(() => undefined);
  process.exit(1);
});
