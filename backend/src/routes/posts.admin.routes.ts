import { Router } from 'express';
import { Post, toPublicPost } from '../models/Post.js';
import { postInputSchema, postUpdateSchema } from '../validation.js';
import { asyncHandler, HttpError } from '../utils/http.js';
import { canEditPost, requireAuth, type AuthedRequest } from '../middleware/auth.js';
import { uniqueSlug } from '../utils/slug.js';
import { containsRegex } from '../utils/regex.js';

export const adminPostsRouter = Router();

adminPostsRouter.use(requireAuth);

/** GET /api/admin/posts?status=&q=&mine=1 — the editorial list, drafts included. */
adminPostsRouter.get(
  '/',
  asyncHandler(async (req: AuthedRequest, res) => {
    const filter: Record<string, unknown> = {};

    const status = String(req.query.status ?? '').trim();
    if (status === 'draft' || status === 'published') filter.status = status;

    if (String(req.query.mine ?? '') === '1') filter.createdBy = req.user!._id;

    const q = String(req.query.q ?? '').trim();
    if (q) {
      const rx = containsRegex(q);
      filter.$or = [{ title: rx }, { excerpt: rx }, { slug: rx }];
    }

    const posts = await Post.find(filter)
      .populate('createdBy', 'name penName')
      .populate('updatedBy', 'name penName')
      .sort({ updatedAt: -1 });

    res.json({ posts: posts.map((p) => p.toJSON()) });
  })
);

/** GET /api/admin/posts/:id — full record for the editor. */
adminPostsRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) throw new HttpError(404, 'That article does not exist.');
    res.json({ post: post.toJSON() });
  })
);

/** POST /api/admin/posts — create a draft (or publish straight away). */
adminPostsRouter.post(
  '/',
  asyncHandler(async (req: AuthedRequest, res) => {
    const input = postInputSchema.parse(req.body);
    const user = req.user!;

    if (input.featured) await assertHeroSlotFree();

    const slug = await uniqueSlug(input.slug || input.title);

    const post = await Post.create({
      ...input,
      slug,
      author: input.author || user.penName,
      publishedAt: input.status === 'published' ? new Date() : undefined,
      createdBy: user._id,
      updatedBy: user._id,
    });

    res.status(201).json({ post: post.toJSON() });
  })
);

/** PUT /api/admin/posts/:id — save edits. Authors may only touch their own. */
adminPostsRouter.put(
  '/:id',
  asyncHandler(async (req: AuthedRequest, res) => {
    const input = postUpdateSchema.parse(req.body);
    const user = req.user!;

    const post = await Post.findById(req.params.id);
    if (!post) throw new HttpError(404, 'That article does not exist.');
    if (!canEditPost(user, post.createdBy)) {
      throw new HttpError(403, 'You can only edit articles you wrote.');
    }

    // Claiming a hero slot only needs checking when the article does not hold one yet.
    if (input.featured && !post.featured) await assertHeroSlotFree(post.id);

    if (input.slug && input.slug !== post.slug) {
      post.slug = await uniqueSlug(input.slug, post.id);
    }

    // Moving draft -> published stamps the publish date once and never rewrites it.
    if (input.status === 'published' && post.status !== 'published') {
      post.publishedAt = new Date();
    }

    for (const key of [
      'title',
      'displayTitle',
      'category',
      'date',
      'readTime',
      'author',
      'excerpt',
      'visualType',
      'featured',
      'heroImage',
      'tileConfig',
      'content',
      'status',
      'order',
    ] as const) {
      if (input[key] !== undefined) (post as any)[key] = input[key];
    }

    post.updatedBy = user._id as typeof post.updatedBy;
    await post.save();

    res.json({ post: post.toJSON() });
  })
);

/** PATCH /api/admin/posts/:id/status — the publish / unpublish toggle. */
adminPostsRouter.patch(
  '/:id/status',
  asyncHandler(async (req: AuthedRequest, res) => {
    const status = req.body?.status;
    if (status !== 'draft' && status !== 'published') {
      throw new HttpError(422, 'Status must be "draft" or "published".');
    }

    const post = await Post.findById(req.params.id);
    if (!post) throw new HttpError(404, 'That article does not exist.');
    if (!canEditPost(req.user!, post.createdBy)) {
      throw new HttpError(403, 'You can only publish articles you wrote.');
    }

    if (status === 'published' && post.status !== 'published') post.publishedAt = new Date();
    post.status = status;
    post.updatedBy = req.user!._id as typeof post.updatedBy;
    await post.save();

    res.json({ post: post.toJSON() });
  })
);

/** GET /api/admin/posts/:id/preview — exactly what the blog would render. */
adminPostsRouter.get(
  '/:id/preview',
  asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) throw new HttpError(404, 'That article does not exist.');
    res.json({ post: toPublicPost(post) });
  })
);

/** DELETE /api/admin/posts/:id */
adminPostsRouter.delete(
  '/:id',
  asyncHandler(async (req: AuthedRequest, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) throw new HttpError(404, 'That article does not exist.');
    if (!canEditPost(req.user!, post.createdBy)) {
      throw new HttpError(403, 'You can only delete articles you wrote.');
    }

    await post.deleteOne();
    res.json({ ok: true });
  })
);

/**
 * The blog's hero rotates through at most three articles, so the slots are a
 * fixed pool. Refusing a fourth is clearer than silently demoting someone
 * else's article out of the rotation.
 */
export const MAX_HERO_POSTS = 3;

async function assertHeroSlotFree(ignoreId?: string): Promise<void> {
  const taken = await Post.countDocuments({
    featured: true,
    ...(ignoreId ? { _id: { $ne: ignoreId } } : {}),
  });

  if (taken >= MAX_HERO_POSTS) {
    const holders = await Post.find({
      featured: true,
      ...(ignoreId ? { _id: { $ne: ignoreId } } : {}),
    })
      .select('title')
      .lean();

    throw new HttpError(
      409,
      `The hero already rotates through ${MAX_HERO_POSTS} articles. Release one first: ` +
        holders.map((h) => `"${h.title}"`).join(', ')
    );
  }
}
