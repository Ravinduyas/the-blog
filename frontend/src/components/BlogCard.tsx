import React from 'react';
import { BlogPost } from '../types';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  onSelect: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onSelect }) => {
  const { tileConfig, visualType } = post;

  // The three typographic tile styles carry no picture of their own, so an
  // article's photograph becomes the backdrop and the copy switches to white.
  const backdrop =
    post.heroImage &&
    (visualType === 'quote-minimal' || visualType === 'graphic-bold' || visualType === 'clean-editorial')
      ? post.heroImage
      : undefined;

  return (
    <div
      id={`blog-card-${post.id}`}
      onClick={() => onSelect(post)}
      className="group flex flex-col cursor-pointer select-none"
    >
      {/* Visual Square Tile */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative aspect-square w-full rounded-xs overflow-hidden shadow-xs group-hover:shadow-md transition-shadow flex flex-col items-center justify-center p-6 text-center"
        style={{
          backgroundColor: tileConfig.bgColor,
          color: backdrop ? '#ffffff' : tileConfig.textColor,
        }}
      >
        {backdrop && (
          <>
            <img
              src={backdrop}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25"></div>
          </>
        )}

        {/* Render based on Visual Type */}

        {/* TYPE 1: Customer Story Split */}
        {visualType === 'destination-split' && (
          <div className="w-full h-full flex flex-col items-center justify-between py-1">
            {/* Top Label */}
            <span className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-medium text-[#4a4a4a] pb-1">
              {tileConfig.topLabel || 'customer story'}
            </span>

            {/* Inner Mockup Card Sheet */}
            <div className="w-[78%] h-[74%] bg-white rounded-xs shadow-md overflow-hidden p-2 flex flex-col items-center justify-between border border-[#eae2da]">
              {tileConfig.mockupImage ? (
                <div className="w-full h-full rounded-xs overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={tileConfig.mockupImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-2.5">
                    <span className="text-white text-xs font-serif-display font-medium tracking-wide">
                      {tileConfig.headlineText}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-[#faf7f4] flex flex-col items-center justify-center p-3 text-center">
                  <span className="font-editorial italic text-lg text-[#222]">
                    {tileConfig.headlineText}
                  </span>
                </div>
              )}
            </div>

            {/* Subtle bottom space */}
            <div className="h-1"></div>
          </div>
        )}

        {/* TYPE 2: Quote / Minimal Lowercase Guide */}
        {visualType === 'quote-minimal' && (
          <div className="w-full h-full flex flex-col items-center justify-center px-4 py-3 relative">
            <p className="font-sans-clean font-normal text-sm sm:text-[15px] leading-relaxed max-w-[240px] text-center">
              {tileConfig.headlineText}
            </p>

            {/* Button Pill if specified */}
            {tileConfig.buttonText ? (
              <div className="mt-5">
                <span className="inline-block bg-white/70 text-[#222] hover:bg-white text-[10px] tracking-[0.15em] font-semibold px-4 py-1.5 rounded-full border border-black/10 transition-colors uppercase">
                  {tileConfig.buttonText}
                </span>
              </div>
            ) : (
              <div className="mt-4 w-6 h-[1.5px] bg-current opacity-30"></div>
            )}
          </div>
        )}

        {/* TYPE 3: Graphic Bold (Growth Tips Dark) */}
        {visualType === 'graphic-bold' && (
          <div className="relative w-full h-full flex flex-col items-center justify-center px-5 py-4 text-center">
            {tileConfig.topLabel && (
              <span className="font-editorial italic text-base sm:text-lg text-[#d8d8d8] mb-3">
                {tileConfig.topLabel}
              </span>
            )}
            <p className="font-sans-clean font-medium text-[14px] sm:text-[15px] leading-relaxed max-w-[220px] text-white/95">
              {tileConfig.headlineText}
            </p>
            <div className="mt-4 w-8 h-[1px] bg-white/20"></div>
          </div>
        )}

        {/* TYPE 4: Laptop Mockup (New Product Releases) */}
        {visualType === 'laptop-mockup' && (
          <div className="w-full h-full flex flex-col items-center justify-between p-2 relative">
            {/* NEW! Badge */}
            {tileConfig.badgeText && (
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="w-8 h-8 rounded-full bg-[#1c1c1c] text-white text-[9px] font-bold tracking-wider flex items-center justify-center shadow-xs">
                  {tileConfig.badgeText}
                </span>
              </div>
            )}

            {/* Partner Header Text — padded so the badge never overlaps */}
            <div className="pt-2 text-center px-9">
              <h3 className="font-serif-display text-xl sm:text-2xl tracking-wide font-normal">
                {tileConfig.headlineText}
              </h3>
              {tileConfig.scriptSubtitle && (
                <p className="text-[10px] opacity-85 tracking-wider uppercase mt-0.5">
                  {tileConfig.scriptSubtitle}
                </p>
              )}
            </div>

            {/* Laptop Device Frame */}
            <div className="w-[88%] max-w-[220px] pb-1">
              <div className="bg-[#242424] p-1.5 rounded-t-md shadow-lg border border-[#3b3b3b]">
                {/* Camera dot */}
                <div className="w-1 h-1 bg-black/60 rounded-full mx-auto mb-1"></div>
                {/* Screen */}
                <div className="aspect-[16/10] bg-white rounded-xs overflow-hidden relative">
                  <img
                    src={tileConfig.mockupImage}
                    alt={tileConfig.headlineText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Laptop base */}
              <div className="h-1.5 bg-[#d6d6d6] rounded-b-md mx-auto w-[98%] shadow-xs relative">
                <div className="w-10 h-0.5 bg-[#999] rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        )}

        {/* TYPE 5: Clean Editorial (Sage Green) */}
        {visualType === 'clean-editorial' && (
          <div className="relative w-full h-full flex flex-col items-center justify-center px-5 py-4 text-center">
            <p className="font-sans-clean font-medium text-sm sm:text-[15px] leading-relaxed text-white max-w-[230px]">
              {tileConfig.headlineText}
            </p>
            <div className="mt-4 flex items-center gap-1 text-[11px] tracking-wider uppercase text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Read article</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        )}
      </motion.div>

      {/* Post Title Below the Card */}
      <h2 className="mt-3.5 text-[14px] sm:text-[15px] font-normal leading-snug text-[#222222] text-center px-1 group-hover:text-[#9e5d50] transition-colors line-clamp-3">
        {post.title}
      </h2>
    </div>
  );
};
