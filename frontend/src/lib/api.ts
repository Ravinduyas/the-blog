import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogPosts';

const BASE = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '');

export interface PostsResult {
  posts: BlogPost[];
  /** True when the API could not be reached and the bundled copy is being shown. */
  usingFallback: boolean;
}

/**
 * Loads published articles from the blog API.
 *
 * If the API is unreachable the site falls back to the articles bundled at build
 * time, so a backend outage degrades to slightly stale content rather than an
 * empty page.
 */
export async function fetchPosts(signal?: AbortSignal): Promise<PostsResult> {
  try {
    const response = await fetch(`${BASE}/api/posts`, { signal });
    if (!response.ok) throw new Error(`API responded ${response.status}`);

    const body = (await response.json()) as { posts?: BlogPost[] };
    if (!Array.isArray(body.posts)) throw new Error('Unexpected response shape');

    // An empty database on a fresh install should not blank the site either.
    if (body.posts.length === 0) return { posts: BLOG_POSTS, usingFallback: true };

    return { posts: body.posts, usingFallback: false };
  } catch (error) {
    if (signal?.aborted) throw error;
    console.warn('[blog] falling back to bundled articles:', error);
    return { posts: BLOG_POSTS, usingFallback: true };
  }
}
