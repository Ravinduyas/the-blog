import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { FeaturedHero } from './components/FeaturedHero';
import { ActiveFilters } from './components/ActiveFilters';
import { BlogCard } from './components/BlogCard';
import { Sidebar } from './components/Sidebar';
import { PostModal, PLANNING_GUIDE_ID } from './components/PostModal';
import { ShopDrawer } from './components/ShopDrawer';
import { PartnerPreviewModal } from './components/PartnerPreviewModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { BLOG_POSTS } from './data/blogPosts';
import { fetchPosts } from './lib/api';
import { applyArticleSeo } from './lib/seo';
import { BlogPost, CategoryType, PartnerListing } from './types';

/** How many articles the hero will rotate through. Matches the backend's cap. */
const HERO_SLOTS = 3;

const CATEGORIES: CategoryType[] = [
  'All Categories',
  'Destination Guides',
  'Surf & Beaches',
  'Wildlife & Safari',
  'Partner Spotlights',
  'Food & Culture',
  'Getting Around',
];

export default function App() {
  // Filter States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All Categories');

  // Modal / Drawer States
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [shopOpen, setShopOpen] = useState<boolean>(false);
  const [previewPartner, setPreviewPartner] = useState<PartnerListing | null>(null);

  // Articles come from the API so the admin panel controls what is live. The
  // bundled copy seeds the first paint and stands in if the API is unreachable.
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);

  // Every "trip planner" button opens the planning guide article.
  const openPlanningGuide = () => {
    const guide = posts.find((post) => post.id === PLANNING_GUIDE_ID);
    if (guide) setActivePost(guide);
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchPosts(controller.signal)
      .then(({ posts: loaded }) => {
        setPosts(loaded);

        // ?post=<slug> opens that article straight away, which is what the
        // admin panel's "View on site" link relies on.
        const wanted = new URLSearchParams(window.location.search).get('post');
        if (wanted) {
          const match = loaded.find((post) => post.id === wanted);
          if (match) setActivePost(match);
        }
      })
      .catch(() => {
        /* aborted on unmount, or already handled by the fallback inside fetchPosts */
      });

    return () => controller.abort();
  }, []);

  // Give the open article its own URL, title, description and structured data,
  // so every ?post=<slug> address reads as a standalone article page.
  useEffect(() => {
    applyArticleSeo(activePost);
  }, [activePost]);

  // Filtered Posts Logic
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tileConfig.headlineText.toLowerCase().includes(q) ||
        (post.tileConfig.partnerName && post.tileConfig.partnerName.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [posts, searchQuery, selectedCategory]);

  // The articles the full-width hero rotates through — up to three, ticked in the
  // admin panel. The hero is hidden as soon as the reader searches or filters, so
  // the grid below is always the honest result set.
  const featuredPosts = useMemo(() => {
    const picked = posts.filter((post) => post.featured).slice(0, HERO_SLOTS);
    return picked.length > 0 ? picked : posts.slice(0, 1);
  }, [posts]);

  // No hero while filtering, and none at all if the API returns an empty library.
  const showHero =
    !searchQuery.trim() && selectedCategory === 'All Categories' && featuredPosts.length > 0;

  const gridPosts = useMemo(() => {
    if (!showHero) return filteredPosts;
    const heroIds = new Set(featuredPosts.map((post) => post.id));
    return filteredPosts.filter((post) => !heroIds.has(post.id));
  }, [showHero, filteredPosts, featuredPosts]);

  // Publish the live header height as --header-h so the featured hero can size itself
  // to exactly the remaining viewport, whatever the header happens to measure.
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    const sync = () =>
      document.documentElement.style.setProperty(
        '--header-h',
        `${Math.round(header.getBoundingClientRect().height)}px`
      );

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(header);
    window.addEventListener('resize', sync);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col font-sans-clean text-[#2c2c2c] antialiased selection:bg-[#ecdcd3]">
      {/* 1. Header (Black Top Bar + Main Navigation) */}
      <Header
        onOpenTraining={openPlanningGuide}
        onOpenContact={() => setContactOpen(true)}
        onOpenShop={() => setShopOpen(true)}
        onSelectCategory={(cat) => setSelectedCategory(cat as CategoryType)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        categories={CATEGORIES}
      />

      {/* 2. Featured Hero Article (unfiltered view only) */}
      {showHero && (
        <FeaturedHero
          posts={featuredPosts}
          onSelect={(p) => setActivePost(p)}
          onSelectCategory={(cat) => setSelectedCategory(cat as CategoryType)}
        />
      )}

      {/* 3. Main Content: 3-Column Posts Grid (Left) + Sidebar (Right) */}
      <main
        id="blog-grid-section"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 w-full flex-1"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT AREA: 3-Column Grid of Square Blog Post Cards */}
          <section className="lg:col-span-8 xl:col-span-9">
            <ActiveFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            {gridPosts.length === 0 ? (
              <div className="bg-[#f5ede7] p-12 text-center rounded-xs space-y-4 border border-[#e8ded6]">
                <h3 className="font-serif-display text-2xl text-[#222]">
                  No articles found for "{searchQuery}"
                </h3>
                <p className="text-sm text-[#666] max-w-sm mx-auto">
                  Try searching for keywords like "Galle", "Mirissa", "surf", or choose another category.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Categories');
                  }}
                  className="bg-[#292929] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  View All Articles
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                {gridPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onSelect={(p) => setActivePost(p)}
                  />
                ))}
              </div>
            )}
          </section>

          {/* RIGHT AREA: Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <Sidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              categories={CATEGORIES}
              onOpenTraining={openPlanningGuide}
              onOpenPartnerPreview={(partner) => setPreviewPartner(partner)}
              onOpenPartners={() => setShopOpen(true)}
            />
          </aside>
        </div>
      </main>

      {/* 4. Footer */}
      <Footer
        onOpenTraining={openPlanningGuide}
        onOpenContact={() => setContactOpen(true)}
        onOpenShop={() => setShopOpen(true)}
      />

      {/* 5. Modals & Drawers */}
      {/* Blog Post Reader Modal */}
      <PostModal
        post={activePost}
        onClose={() => setActivePost(null)}
        onSelectCategory={(cat) => setSelectedCategory(cat as CategoryType)}
        onOpenTraining={openPlanningGuide}
      />

      {/* Partners Slide-over Drawer */}
      <ShopDrawer
        isOpen={shopOpen}
        onClose={() => setShopOpen(false)}
        onSelectPartner={(partner) => {
          setShopOpen(false);
          setPreviewPartner(partner);
        }}
      />

      {/* Partner Details Modal */}
      <PartnerPreviewModal
        partner={previewPartner}
        onClose={() => setPreviewPartner(null)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
