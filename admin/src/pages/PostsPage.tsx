import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Pencil, Plus, Search, Star, Trash2 } from 'lucide-react';
import { api, ApiError } from '../lib/api';
import { useAuth } from '../context/AuthContext';
import { Banner, Button, EmptyState, Input, Select, Spinner, StatusPill } from '../components/ui';
import type { AdminPost, PostStatus } from '../types';

const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'http://localhost:3000';

/** How many articles the blog's hero rotates through. Matches the API's cap. */
const HERO_SLOTS = 3;

export const PostsPage: React.FC = () => {
  const { user, isAdmin } = useAuth();

  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [status, setStatus] = useState<'' | PostStatus>('');
  const [query, setQuery] = useState('');
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { posts: list } = await api.listPosts({ status: status || undefined });
      setPosts(list);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not load articles.');
    } finally {
      setLoading(false);
    }
  }, [status]);

  useEffect(() => {
    void load();
  }, [load]);

  // Filtering locally keeps typing instant; the list is small by design.
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.slug.includes(q) ||
        post.excerpt.toLowerCase().includes(q)
    );
  }, [posts, query]);

  /** The blog's hero rotates through this many articles; the API enforces the cap. */
  const heroCount = useMemo(() => posts.filter((post) => post.featured).length, [posts]);

  const canEdit = (post: AdminPost): boolean => {
    if (isAdmin) return true;
    const owner = typeof post.createdBy === 'string' ? post.createdBy : post.createdBy?._id;
    return owner === user?._id;
  };

  const toggleStatus = async (post: AdminPost) => {
    setBusyId(post._id);
    setError(null);
    setNotice(null);
    const next: PostStatus = post.status === 'published' ? 'draft' : 'published';
    try {
      const { post: updated } = await api.setPostStatus(post._id, next);
      setPosts((current) => current.map((p) => (p._id === post._id ? updated : p)));
      setNotice(
        next === 'published'
          ? `"${updated.title}" is live on the blog.`
          : `"${updated.title}" is back to a draft and hidden from the site.`
      );
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not change the status.');
    } finally {
      setBusyId(null);
    }
  };

  const remove = async (post: AdminPost) => {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setBusyId(post._id);
    setError(null);
    try {
      await api.deletePost(post._id);
      setPosts((current) => current.filter((p) => p._id !== post._id));
      setNotice(`"${post.title}" was deleted.`);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not delete that article.');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-serif-display text-3xl text-ink-900">Articles</h1>
          <p className="text-sm text-ink-500">
            {posts.filter((p) => p.status === 'published').length} published ·{' '}
            {posts.filter((p) => p.status === 'draft').length} drafts ·{' '}
            <span className={heroCount === HERO_SLOTS ? undefined : 'text-clay-400'}>
              {heroCount} of {HERO_SLOTS} hero slots
            </span>
          </p>
        </div>

        <Link to="/posts/new">
          <Button>
            <Plus className="h-3.5 w-3.5" />
            New article
          </Button>
        </Link>
      </div>

      {error && <Banner tone="error">{error}</Banner>}
      {notice && <Banner tone="success">{notice}</Banner>}

      <div className="flex flex-wrap gap-3">
        <div className="relative min-w-[220px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles and excerpts"
            className="pl-9"
          />
        </div>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as '' | PostStatus)}
          className="w-auto"
        >
          <option value="">All statuses</option>
          <option value="published">Published</option>
          <option value="draft">Drafts</option>
        </Select>
      </div>

      {loading ? (
        <Spinner label="Loading articles" />
      ) : visible.length === 0 ? (
        <EmptyState title="Nothing here yet">
          {query ? 'No article matches that search.' : 'Write your first article to get started.'}
        </EmptyState>
      ) : (
        <div className="overflow-hidden rounded-xs border border-sand-200 bg-white">
          {visible.map((post) => (
            <div
              key={post._id}
              className="flex flex-wrap items-center gap-3 border-b border-sand-200 px-4 py-3 last:border-b-0 hover:bg-sand-50"
            >
              <div
                className="hidden h-11 w-11 shrink-0 rounded-xs sm:block"
                style={{ backgroundColor: post.tileConfig?.bgColor ?? '#e5e5e5' }}
                aria-hidden
              />

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="truncate text-sm font-medium text-ink-900">{post.title}</span>
                  {post.featured && (
                    <span
                      className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.15em] text-clay-400"
                      title="In the hero rotation on the blog"
                    >
                      <Star className="h-3 w-3 fill-current" />
                      Hero
                    </span>
                  )}
                </div>
                <p className="truncate text-xs text-ink-500">
                  {post.category} · {post.date} · /{post.slug}
                </p>
              </div>

              <StatusPill status={post.status} />

              <div className="flex items-center gap-1.5">
                {post.status === 'published' && (
                  <a
                    href={`${SITE_URL}/?post=${post.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xs border border-sand-300 bg-white p-2 text-ink-500 transition-colors hover:text-ink-900"
                    title="View on the site"
                  >
                    <Eye className="h-3.5 w-3.5" />
                  </a>
                )}

                {canEdit(post) ? (
                  <>
                    <button
                      onClick={() => void toggleStatus(post)}
                      disabled={busyId === post._id}
                      className="cursor-pointer rounded-xs border border-sand-300 bg-white p-2 text-ink-500 transition-colors hover:text-ink-900 disabled:opacity-40"
                      title={post.status === 'published' ? 'Unpublish' : 'Publish'}
                    >
                      {post.status === 'published' ? (
                        <EyeOff className="h-3.5 w-3.5" />
                      ) : (
                        <Eye className="h-3.5 w-3.5" />
                      )}
                    </button>

                    <Link
                      to={`/posts/${post._id}`}
                      className="rounded-xs border border-sand-300 bg-white p-2 text-ink-500 transition-colors hover:text-ink-900"
                      title="Edit"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </Link>

                    <button
                      onClick={() => void remove(post)}
                      disabled={busyId === post._id}
                      className="cursor-pointer rounded-xs border border-red-200 bg-white p-2 text-red-600 transition-colors hover:bg-red-50 disabled:opacity-40"
                      title="Delete"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </>
                ) : (
                  <span className="px-2 text-[10px] uppercase tracking-widest text-ink-500">
                    read only
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
