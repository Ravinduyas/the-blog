import { BlogPost } from '../types';

/**
 * Head management for search engines and AI answer engines.
 *
 * The blog is a single page, and articles open in a modal addressed by
 * `?post=<slug>`. While an article is open this module makes that URL behave
 * like a real article page: its own <title>, description, canonical link, Open
 * Graph tags, and JSON-LD for BlogPosting, FAQPage and BreadcrumbList. Google
 * renders JavaScript, so the tags are read when the ?post= URL is crawled.
 */

/** Public origin + path of the deployed blog, always with a trailing slash. */
export const SITE_URL = (
  (import.meta.env.VITE_SITE_URL as string | undefined) || 'https://ravinduyas.github.io/the-blog/'
).replace(/\/?$/, '/');

export const SITE_NAME = 'Down South Ceylon';
const DEFAULT_TITLE = 'The Blog — Down South Ceylon';
const JSON_LD_ID = 'article-jsonld';

/** Strips [label](url) markup so link syntax never leaks into meta tags. */
export const plainText = (value: string): string =>
  value.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '$1');

export const articleUrl = (post: BlogPost): string =>
  `${SITE_URL}?post=${encodeURIComponent(post.id)}`;

function setMeta(attr: 'name' | 'property', key: string, value: string): void {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
}

function setCanonical(href: string): void {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

function toIsoDate(display: string): string | undefined {
  const parsed = new Date(display);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10);
}

/** The JSON-LD graph for one article. */
export function articleJsonLd(post: BlogPost): Record<string, unknown> {
  const url = articleUrl(post);
  const description = plainText(post.content.summary || post.excerpt);
  const image = post.heroImage || post.tileConfig.mockupImage;
  const published = toIsoDate(post.date);

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: url,
      url,
      headline: post.title,
      description,
      articleSection: post.category,
      inLanguage: 'en',
      ...(image ? { image: [image] } : {}),
      ...(published ? { datePublished: published, dateModified: published } : {}),
      author: {
        '@type': 'Person',
        name: post.author,
        url: SITE_URL,
        ...(post.author === 'Macka'
          ? { image: `${SITE_URL}macka.png`, jobTitle: 'Editor', homeLocation: { '@type': 'Place', name: 'Weligama, Sri Lanka' } }
          : {}),
      },
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      about: { '@type': 'Place', name: 'South coast of Sri Lanka' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'The Blog', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: post.category, item: SITE_URL },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (post.content.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: post.content.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: plainText(item.answer) },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

let defaults: { title: string; description: string } | null = null;
/** Set once an article has been shown, so first paint never strips a deep link. */
let shownArticle = false;

/** Point the document head and URL at an article, or back at the home page. */
export function applyArticleSeo(post: BlogPost | null): void {
  if (!defaults) {
    defaults = {
      title: document.title || DEFAULT_TITLE,
      description:
        document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? '',
    };
  }

  document.getElementById(JSON_LD_ID)?.remove();

  const url = new URL(window.location.href);

  if (!post) {
    document.title = defaults.title;
    setMeta('name', 'description', defaults.description);
    setMeta('property', 'og:title', defaults.title);
    setMeta('property', 'og:description', defaults.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', SITE_URL);
    setCanonical(SITE_URL);
    if (shownArticle && url.searchParams.has('post')) {
      url.searchParams.delete('post');
      window.history.replaceState(null, '', url.toString());
    }
    return;
  }

  shownArticle = true;
  const description = plainText(post.content.summary || post.excerpt).slice(0, 300);
  const title = `${post.title} | ${SITE_NAME}`;
  const image = post.heroImage || post.tileConfig.mockupImage;

  document.title = title;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', post.title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:type', 'article');
  setMeta('property', 'og:url', articleUrl(post));
  if (image) setMeta('property', 'og:image', image);
  setMeta('name', 'twitter:card', 'summary_large_image');
  setCanonical(articleUrl(post));

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = JSON_LD_ID;
  script.textContent = JSON.stringify(articleJsonLd(post));
  document.head.appendChild(script);

  if (url.searchParams.get('post') !== post.id) {
    url.searchParams.set('post', post.id);
    window.history.replaceState(null, '', url.toString());
  }
}
