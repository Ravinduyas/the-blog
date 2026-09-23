import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BlogPost } from '../types';
import { AnimatePresence, motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface FeaturedHeroProps {
  /** Up to three articles, ticked as hero slots in the admin panel. */
  posts: BlogPost[];
  onSelect: (post: BlogPost) => void;
  onSelectCategory: (category: string) => void;
}

/** How long each article holds the hero before the next one comes round. */
const ROTATE_MS = 7000;

export const FeaturedHero: React.FC<FeaturedHeroProps> = ({
  posts,
  onSelect,
  onSelectCategory,
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // +1 moving forward, -1 when the reader steps back, so the slide reads the right way.
  const [direction, setDirection] = useState(1);

  const count = posts.length;
  const post = posts[Math.min(index, Math.max(count - 1, 0))];

  const goTo = useCallback(
    (next: number) => {
      setDirection(next >= index ? 1 : -1);
      setIndex(((next % count) + count) % count);
    },
    [index, count]
  );

  // A reader who prefers reduced motion gets a static hero, not a moving one.
  const reducedMotion = useRef(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      reducedMotion.current = query.matches;
    };
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  // Auto-advance. Restarts on every index change, so a manual jump gets a full turn.
  useEffect(() => {
    if (count < 2 || paused || reducedMotion.current) return;
    const timer = window.setTimeout(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % count);
    }, ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [index, count, paused]);

  // App already guards this, but a hero with no article should never throw
  // if that guard is ever relaxed.
  if (!post) return null;

  const slide = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <section
      id="featured-hero-section"
      className="w-full bg-[#faf8f5] border-b border-[#f0e6e0] select-none flex items-stretch min-h-[calc(100svh-var(--header-h,111px))]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription={count > 1 ? 'carousel' : undefined}
      aria-label={count > 1 ? 'Featured guides' : undefined}
    >
      {/* Full-bleed split: the photograph runs to the viewport edge, and the copy
          column carries its own padding so the text still sits on a margin. */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Large Editorial Image */}
        <div
          onClick={() => onSelect(post)}
          className="lg:col-span-7 relative group cursor-pointer overflow-hidden h-[34svh] min-h-[220px] max-h-[340px] lg:h-auto lg:max-h-none"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={post.id}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              src={post.heroImage || post.tileConfig.mockupImage}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {/* Soft bottom wash so the image never fights the page */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>

          {/* Featured Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
            <span className="bg-[#1c1c1c]/90 backdrop-blur-xs text-white text-[10px] tracking-[0.18em] uppercase font-bold px-3 py-1.5 rounded-full">
              Featured Guide
            </span>
          </div>

          {/* Slot indicators, sitting on the image where they read against the wash */}
          {count > 1 && (
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex items-center gap-1">
              {posts.map((item, slot) => (
                <button
                  key={item.id}
                  onClick={(event) => {
                    event.stopPropagation();
                    goTo(slot);
                  }}
                  aria-label={`Show "${item.title}"`}
                  aria-current={slot === index}
                  className="group/dot cursor-pointer p-1.5"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      slot === index
                        ? 'w-7 bg-white'
                        : 'w-1.5 bg-white/50 group-hover/dot:bg-white/80'
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Editorial Copy */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center text-left px-5 py-8 sm:px-8 sm:py-10 lg:px-12 xl:px-16">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={post.id}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full flex flex-col items-start text-left space-y-3 lg:space-y-3.5"
            >
              <button
                onClick={() => onSelectCategory(post.category)}
                className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c57d71] hover:text-[#a8635a] transition-colors cursor-pointer"
              >
                {post.category}
              </button>

              <h2
                onClick={() => onSelect(post)}
                className="font-serif-display text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] [@media(max-height:760px)]:lg:text-[32px] leading-[1.15] text-[#222222] font-normal cursor-pointer hover:text-[#9e5d50] transition-colors"
              >
                {post.title}
              </h2>

              <span className="font-script text-2xl sm:text-3xl text-[#c57d71] block -rotate-2 [@media(max-height:760px)]:hidden">
                start here
              </span>

              <p className="text-[15px] sm:text-base leading-relaxed text-[#555555] max-w-lg [@media(max-height:700px)]:hidden">
                {post.excerpt}
              </p>

              {/* Meta Row */}
              <div className="flex items-center gap-4 text-xs text-[#888888] pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="text-[#d8cbbf]">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <span className="text-[#d8cbbf]">•</span>
                <span>By {post.author}</span>
              </div>

              <div className="pt-2">
                <button
                  id="featured-hero-read-btn"
                  onClick={() => onSelect(post)}
                  className="bg-[#292929] hover:bg-black text-white text-xs font-semibold uppercase tracking-widest px-7 py-3.5 rounded-full transition-colors flex items-center gap-2 cursor-pointer shadow-xs group"
                >
                  <span>READ THE GUIDE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
