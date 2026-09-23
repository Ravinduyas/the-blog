import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Send, Undo2 } from 'lucide-react';
import { api, ApiError } from '../lib/api';
import {
  Banner,
  Button,
  ColorInput,
  Field,
  Input,
  Select,
  Spinner,
  StatusPill,
  Textarea,
  Toggle,
} from '../components/ui';
import { StepsEditor, StringListEditor } from '../components/ContentEditors';
import { TilePreview } from '../components/TilePreview';
import type { AdminPost, CardVisualType, CategoryType, PostInput, PostStatus } from '../types';

const CATEGORIES: CategoryType[] = [
  'Destination Guides',
  'Surf & Beaches',
  'Wildlife & Safari',
  'Partner Spotlights',
  'Food & Culture',
  'Getting Around',
];

const VISUAL_TYPES: { value: CardVisualType; label: string; note: string }[] = [
  {
    value: 'quote-minimal',
    label: 'Quote / minimal',
    note: 'Text-only tile on a flat colour. No artwork.',
  },
  {
    value: 'destination-split',
    label: 'Destination split',
    note: 'Photo inside a white card. Needs a tile image.',
  },
  {
    value: 'laptop-mockup',
    label: 'Laptop mockup',
    note: 'Photo inside a laptop screen. Needs a tile image.',
  },
  {
    value: 'graphic-bold',
    label: 'Graphic bold',
    note: 'Light text on a dark tile. No artwork.',
  },
  {
    value: 'clean-editorial',
    label: 'Clean editorial',
    note: 'White text on a solid colour. No artwork.',
  },
];

/** Visual types whose tile renders tileConfig.mockupImage. */
const IMAGE_VISUALS: CardVisualType[] = ['destination-split', 'laptop-mockup'];

/** How many articles the blog's hero rotates through. Matches the API's cap. */
const HERO_SLOTS = 3;

function blankPost(author: string): PostInput {
  return {
    title: '',
    category: 'Destination Guides',
    date: new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    readTime: '5 min read',
    author,
    excerpt: '',
    visualType: 'quote-minimal',
    featured: false,
    heroImage: '',
    tileConfig: { bgColor: '#c3c8cf', textColor: '#272d34', headlineText: '' },
    content: { introduction: [''], steps: [], keyTakeaways: [], conclusion: '' },
    status: 'draft',
    order: 0,
  };
}

function toInput(post: AdminPost): PostInput {
  return {
    title: post.title,
    slug: post.slug,
    displayTitle: post.displayTitle ?? '',
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    author: post.author,
    excerpt: post.excerpt,
    visualType: post.visualType,
    featured: post.featured,
    heroImage: post.heroImage ?? '',
    tileConfig: { ...post.tileConfig },
    content: {
      introduction: post.content?.introduction ?? [],
      steps: post.content?.steps ?? [],
      keyTakeaways: post.content?.keyTakeaways ?? [],
      conclusion: post.content?.conclusion ?? '',
    },
    status: post.status,
    order: post.order ?? 0,
  };
}

/** Empty optional strings must not reach the API — the URL validators reject "". */
function clean(input: PostInput): PostInput {
  const tile = Object.fromEntries(
    Object.entries(input.tileConfig).filter(([, v]) => v !== '' && v !== undefined)
  ) as PostInput['tileConfig'];

  return {
    ...input,
    displayTitle: input.displayTitle?.trim() || undefined,
    heroImage: input.heroImage?.trim() || undefined,
    slug: input.slug?.trim() || undefined,
    tileConfig: tile,
    content: {
      introduction: input.content.introduction.filter((p) => p.trim()),
      steps: input.content.steps.filter((s) => s.title.trim() || s.description.trim()),
      keyTakeaways: input.content.keyTakeaways.filter((k) => k.trim()),
      conclusion: input.content.conclusion?.trim() || undefined,
    },
  };
}

export const PostEditorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = !id || id === 'new';

  const [form, setForm] = useState<PostInput | null>(null);
  const [original, setOriginal] = useState<PostInput | null>(null);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [issues, setIssues] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(isNew ? null : (id ?? null));

  useEffect(() => {
    if (isNew) {
      void api
        .me()
        .then(({ user }) => {
          const blank = blankPost(user.penName || user.name);
          setForm(blank);
          setOriginal(blank);
        })
        .catch(() => {
          const blank = blankPost('');
          setForm(blank);
          setOriginal(blank);
        });
      return;
    }

    setLoading(true);
    api
      .getPost(id!)
      .then(({ post }) => {
        const input = toInput(post);
        setForm(input);
        setOriginal(input);
      })
      .catch((err) =>
        setError(err instanceof ApiError ? err.message : 'Could not load that article.')
      )
      .finally(() => setLoading(false));
  }, [id, isNew]);

  const patch = useCallback((changes: Partial<PostInput>) => {
    setForm((current) => (current ? { ...current, ...changes } : current));
  }, []);

  const patchTile = useCallback((changes: Partial<PostInput['tileConfig']>) => {
    setForm((current) =>
      current ? { ...current, tileConfig: { ...current.tileConfig, ...changes } } : current
    );
  }, []);

  const patchContent = useCallback((changes: Partial<PostInput['content']>) => {
    setForm((current) =>
      current ? { ...current, content: { ...current.content, ...changes } } : current
    );
  }, []);

  const dirty = useMemo(
    () => JSON.stringify(form) !== JSON.stringify(original),
    [form, original]
  );

  const save = async (status?: PostStatus) => {
    if (!form) return;
    setSaving(true);
    setError(null);
    setIssues({});
    setNotice(null);

    const payload = clean({ ...form, status: status ?? form.status });

    try {
      const { post } = savedId
        ? await api.updatePost(savedId, payload)
        : await api.createPost(payload);

      const next = toInput(post);
      setForm(next);
      setOriginal(next);
      setSavedId(post._id);
      setNotice(
        post.status === 'published'
          ? 'Saved and published — it is live on the blog now.'
          : 'Saved as a draft. It stays hidden from the site until you publish.'
      );

      if (!savedId) navigate(`/posts/${post._id}`, { replace: true });
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
        setIssues(err.issueMap);
      } else {
        setError('Could not save. Try again.');
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Spinner label="Loading article" />;
  if (!form) return <Banner tone="error">{error ?? 'Article unavailable.'}</Banner>;

  const needsImage = IMAGE_VISUALS.includes(form.visualType);
  const visualNote = VISUAL_TYPES.find((v) => v.value === form.visualType)?.note;

  return (
    <div className="space-y-5 pb-16">
      {/* --- Toolbar --- */}
      <div className="sticky top-[57px] z-20 -mx-4 flex flex-wrap items-center justify-between gap-3 border-b border-sand-200 bg-sand-50/95 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/posts')}
            className="cursor-pointer rounded-xs border border-sand-300 bg-white p-2 text-ink-500 hover:text-ink-900"
            aria-label="Back to articles"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div>
            <h1 className="font-serif-display text-xl leading-tight text-ink-900">
              {isNew && !savedId ? 'New article' : form.title || 'Untitled'}
            </h1>
            <div className="flex items-center gap-2 text-xs text-ink-500">
              <StatusPill status={form.status} />
              {dirty && <span className="text-clay-400">unsaved changes</span>}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {dirty && original && (
            <Button variant="ghost" onClick={() => setForm(original)} disabled={saving}>
              <Undo2 className="h-3.5 w-3.5" />
              Revert
            </Button>
          )}
          <Button variant="secondary" onClick={() => void save('draft')} loading={saving}>
            <Save className="h-3.5 w-3.5" />
            Save draft
          </Button>
          <Button onClick={() => void save('published')} loading={saving}>
            <Send className="h-3.5 w-3.5" />
            {form.status === 'published' ? 'Update live' : 'Publish'}
          </Button>
        </div>
      </div>

      {error && <Banner tone="error">{error}</Banner>}
      {notice && <Banner tone="success">{notice}</Banner>}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* --- Main column --- */}
        <div className="space-y-6 lg:col-span-2">
          <section className="space-y-4 rounded-xs border border-sand-200 bg-white p-5">
            <h2 className="font-serif-display text-lg text-ink-900">The article</h2>

            <Field label="Title" required error={issues.title}>
              <Input
                value={form.title}
                onChange={(e) => patch({ title: e.target.value })}
                placeholder="Down South Sri Lanka: 15 Best Things to Do on the South Coast"
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="URL slug"
                hint={isNew && !savedId ? 'Left blank, this is generated from the title.' : undefined}
                error={issues.slug}
              >
                <Input
                  value={form.slug ?? ''}
                  onChange={(e) => patch({ slug: e.target.value })}
                  placeholder="down-south-sri-lanka-15-best-things"
                />
              </Field>

              <Field label="Category" required error={issues.category}>
                <Select
                  value={form.category}
                  onChange={(e) => patch({ category: e.target.value as CategoryType })}
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Display date" required error={issues.date}>
                <Input
                  value={form.date}
                  onChange={(e) => patch({ date: e.target.value })}
                  placeholder="August 10, 2026"
                />
              </Field>

              <Field label="Read time" error={issues.readTime}>
                <Input
                  value={form.readTime}
                  onChange={(e) => patch({ readTime: e.target.value })}
                  placeholder="9 min read"
                />
              </Field>

              <Field label="Byline" required error={issues.author}>
                <Input
                  value={form.author}
                  onChange={(e) => patch({ author: e.target.value })}
                  placeholder="Macka"
                />
              </Field>
            </div>

            <Field
              label="Excerpt"
              required
              hint="One or two lines. Shown on the hero and in search results."
              error={issues.excerpt}
            >
              <Textarea
                rows={3}
                value={form.excerpt}
                onChange={(e) => patch({ excerpt: e.target.value })}
                placeholder="Galle Fort to Tangalle: the beaches, safaris, food and slow afternoons worth your time."
              />
            </Field>
          </section>

          <section className="space-y-4 rounded-xs border border-sand-200 bg-white p-5">
            <h2 className="font-serif-display text-lg text-ink-900">Introduction</h2>
            <p className="text-xs text-ink-500">
              One block per paragraph. Inline links use [label](https://example.com) and become
              partner backlinks on the site.
            </p>
            <StringListEditor
              items={form.content.introduction}
              onChange={(introduction) => patchContent({ introduction })}
              addLabel="Add paragraph"
              placeholder="Down South is the stretch of coast from Galle to roughly Tangalle..."
            />
          </section>

          <section className="space-y-4 rounded-xs border border-sand-200 bg-white p-5">
            <h2 className="font-serif-display text-lg text-ink-900">Body sections</h2>
            <StepsEditor
              steps={form.content.steps}
              onChange={(steps) => patchContent({ steps })}
            />
          </section>

          <section className="space-y-4 rounded-xs border border-sand-200 bg-white p-5">
            <h2 className="font-serif-display text-lg text-ink-900">Key takeaways</h2>
            <StringListEditor
              items={form.content.keyTakeaways}
              onChange={(keyTakeaways) => patchContent({ keyTakeaways })}
              addLabel="Add takeaway"
              placeholder="Carry cash. The best kitchens Down South still do not take cards."
              rows={2}
            />
          </section>

          <section className="space-y-4 rounded-xs border border-sand-200 bg-white p-5">
            <h2 className="font-serif-display text-lg text-ink-900">Conclusion</h2>
            <Textarea
              rows={4}
              value={form.content.conclusion ?? ''}
              onChange={(e) => patchContent({ conclusion: e.target.value })}
              placeholder="Five days is the minimum that does not feel rushed."
            />
          </section>
        </div>

        {/* --- Sidebar: presentation --- */}
        <div className="space-y-6">
          <section className="space-y-4 rounded-xs border border-sand-200 bg-white p-5">
            <h2 className="font-serif-display text-lg text-ink-900">Card preview</h2>
            <div className="flex justify-center rounded-xs bg-sand-50 p-4">
              <TilePreview
                visualType={form.visualType}
                tileConfig={form.tileConfig}
                title={form.title}
                heroImage={form.heroImage}
              />
            </div>
          </section>

          <section className="space-y-4 rounded-xs border border-sand-200 bg-white p-5">
            <h2 className="font-serif-display text-lg text-ink-900">Card design</h2>

            <Field label="Visual type" hint={visualNote} error={issues.visualType}>
              <Select
                value={form.visualType}
                onChange={(e) => patch({ visualType: e.target.value as CardVisualType })}
              >
                {VISUAL_TYPES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </Field>

            <Field label="Tile headline" required error={issues['tileConfig.headlineText']}>
              <Textarea
                rows={2}
                value={form.tileConfig.headlineText}
                onChange={(e) => patchTile({ headlineText: e.target.value })}
                placeholder="down south sri lanka: 15 best things to do"
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Background" error={issues['tileConfig.bgColor']}>
                <ColorInput
                  value={form.tileConfig.bgColor}
                  onChange={(bgColor) => patchTile({ bgColor })}
                />
              </Field>
              <Field label="Text colour" error={issues['tileConfig.textColor']}>
                <ColorInput
                  value={form.tileConfig.textColor}
                  onChange={(textColor) => patchTile({ textColor })}
                />
              </Field>
            </div>

            <Field
              label="Tile image"
              hint={
                needsImage
                  ? 'This visual type renders the image on the card.'
                  : 'Ignored by the current visual type — the card stays text-only.'
              }
              error={issues['tileConfig.mockupImage']}
            >
              <Input
                value={form.tileConfig.mockupImage ?? ''}
                onChange={(e) => patchTile({ mockupImage: e.target.value })}
                placeholder="https://images.unsplash.com/photo-..."
              />
            </Field>

            <Field label="Top label" error={issues['tileConfig.topLabel']}>
              <Input
                value={form.tileConfig.topLabel ?? ''}
                onChange={(e) => patchTile({ topLabel: e.target.value })}
                placeholder="customer story"
              />
            </Field>

            <Field label="Button text" error={issues['tileConfig.buttonText']}>
              <Input
                value={form.tileConfig.buttonText ?? ''}
                onChange={(e) => patchTile({ buttonText: e.target.value })}
                placeholder="READ THE GUIDE"
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Badge text" error={issues['tileConfig.badgeText']}>
                <Input
                  value={form.tileConfig.badgeText ?? ''}
                  onChange={(e) => patchTile({ badgeText: e.target.value })}
                  placeholder="NEW!"
                />
              </Field>
              <Field label="Script subtitle" error={issues['tileConfig.scriptSubtitle']}>
                <Input
                  value={form.tileConfig.scriptSubtitle ?? ''}
                  onChange={(e) => patchTile({ scriptSubtitle: e.target.value })}
                />
              </Field>
            </div>

            <Field label="Partner name" error={issues['tileConfig.partnerName']}>
              <Input
                value={form.tileConfig.partnerName ?? ''}
                onChange={(e) => patchTile({ partnerName: e.target.value })}
                placeholder="Mirissa Blue Whale Tours"
              />
            </Field>
          </section>

          <section className="space-y-4 rounded-xs border border-sand-200 bg-white p-5">
            <h2 className="font-serif-display text-lg text-ink-900">Placement</h2>

            <Toggle
              checked={form.featured}
              onChange={(featured) => patch({ featured })}
              label="Feature in the hero"
              hint={`The hero rotates through up to ${HERO_SLOTS} articles, in sort-order sequence. Release one before adding a fourth.`}
            />

            <Field
              label="Hero image"
              hint="The article's photo: used by the hero, at the top of the article, and as the backdrop on the three text-style tiles."
              error={issues.heroImage}
            >
              <Input
                value={form.heroImage ?? ''}
                onChange={(e) => patch({ heroImage: e.target.value })}
                placeholder="https://images.unsplash.com/photo-...&w=1400"
              />
            </Field>

            {form.heroImage ? (
              <img
                src={form.heroImage}
                alt=""
                className="aspect-[2/1] w-full rounded-xs border border-sand-200 object-cover"
                referrerPolicy="no-referrer"
              />
            ) : null}

            <Field label="Sort order" hint="Lower numbers appear first in the grid.">
              <Input
                type="number"
                value={form.order}
                onChange={(e) => patch({ order: Number(e.target.value) || 0 })}
              />
            </Field>

            <Field label="Display title override" error={issues.displayTitle}>
              <Input
                value={form.displayTitle ?? ''}
                onChange={(e) => patch({ displayTitle: e.target.value })}
              />
            </Field>
          </section>
        </div>
      </div>
    </div>
  );
};
