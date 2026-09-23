import { Router } from 'express';
import { Post, toPublicPost } from '../models/Post.js';
import { asyncHandler, HttpError } from '../utils/http.js';
import { containsRegex } from '../utils/regex.js';

export const publicPostsRouter = Router();

/**
 * GET /api/posts — every published article, in the exact `BlogPost` shape the
 * React blog already renders. Optional ?category= and ?search= narrow the set,
 * though the client filters locally too.
 */
publicPostsRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const filter: Record<string, unknown> = { status: 'published' };

    const category = String(req.query.category ?? '').trim();
    if (category && category !== 'All Categories') filter.category = category;

    const search = String(req.query.search ?? '').trim();
    if (search) {
      const rx = containsRegex(search);
      filter.$or = [{ title: rx }, { excerpt: rx }, { 'tileConfig.headlineText': rx }];
    }

    const posts = await Post.find(filter).sort({ order: 1, publishedAt: -1, createdAt: -1 });
    res.json({ posts: posts.map(toPublicPost) });
  })
);

/** GET /api/posts/:slug — a single published article. */
publicPostsRouter.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const post = await Post.findOne({ slug: req.params.slug.toLowerCase(), status: 'published' });
    if (!post) throw new HttpError(404, 'That article does not exist.');
    res.json({ post: toPublicPost(post) });
  })
);
