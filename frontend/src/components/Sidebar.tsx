import React from 'react';
import { Search, ChevronDown, ChevronRight, Play, Heart, Instagram } from 'lucide-react';
import { CategoryType, InstagramPost, PartnerListing } from '../types';
import { INSTAGRAM_POSTS, PARTNER_LISTINGS } from '../data/partners';
import { motion } from 'motion/react';

interface SidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: CategoryType) => void;
  categories: CategoryType[];
  onOpenTraining: () => void;
  onOpenPartnerPreview: (partner: PartnerListing) => void;
  onOpenInstagram: (post: InstagramPost) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  onOpenTraining,
  onOpenPartnerPreview,
  onOpenInstagram,
}) => {
  const featuredPartner = PARTNER_LISTINGS.find((p) => p.id === 'mirissa-blue-whale-tours') || PARTNER_LISTINGS[0];

  return (
    <aside
      id="blog-sidebar-main"
      className="w-full bg-[#f6f2ee] p-5 sm:p-6 rounded-xs flex flex-col space-y-8 select-none"
    >
      {/* 1. Author Bio Widget */}
      <div className="flex flex-col items-center text-center">
        {/* Circle Photo with Script Overlay */}
        <div className="relative w-44 h-44 mb-3">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
              alt="Macka - Editor at Down South Ceylon"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Cursive overlay */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="font-script text-4xl sm:text-5xl text-[#222222] drop-shadow-xs font-bold transform -rotate-6 block">
              hey there!
            </span>
          </div>
        </div>

        {/* Bio Text */}
        <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-[#505050] font-sans-clean max-w-xs">
          I'm Macka! If you've come for south coast guides, surf, safari and honest local advice, you're in the right place!
        </p>
      </div>

      {/* 2. Sidebar Filters (Categories & Search) */}
      <div className="space-y-2.5">
        {/* Categories Dropdown */}
        <div className="relative w-full">
          <select
            id="sidebar-category-select"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value as CategoryType)}
            className="w-full appearance-none bg-white text-[#444444] text-xs sm:text-sm px-3.5 py-2.5 rounded-sm border border-[#dfd5cc] focus:outline-none focus:border-[#a88d7f] cursor-pointer pr-8 lowercase"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All Categories' ? 'categories' : cat.toLowerCase()}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-[#888] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Search Field */}
        <div className="relative w-full">
          <input
            id="sidebar-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="search"
            className="w-full bg-white text-[#333333] placeholder-[#999999] text-xs sm:text-sm px-3.5 py-2.5 rounded-sm border border-[#dfd5cc] focus:outline-none focus:border-[#a88d7f] transition-colors"
          />
          <Search className="w-4 h-4 text-[#999] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* 3. Promo Banner: Free Trip Planner */}
      <div className="w-full bg-[#35393c] text-white rounded-xs overflow-hidden shadow-sm flex flex-col">
        <div className="p-6 text-center flex flex-col items-center">
          <span className="text-[11px] tracking-[0.25em] text-[#d6d6d6] font-medium uppercase mb-3">
            FREE DOWNLOAD!
          </span>
          <h3 className="font-serif-display text-2xl sm:text-[26px] leading-tight font-normal mb-3">
            Plan Your Down South Trip
          </h3>
          <p className="text-[13px] leading-relaxed text-[#dcdcdc] font-light max-w-[240px] mb-5">
            Get our free south coast guide and build a trip that is not only <span className="font-editorial italic text-base">unhurried</span>, but also <span className="underline decoration-1 underline-offset-2">full of the things you will actually remember!</span>
          </p>

          <button
            id="sidebar-get-planner-btn"
            onClick={onOpenTraining}
            className="bg-[#d28a80] hover:bg-[#c2796f] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full transition-colors cursor-pointer shadow-xs"
          >
            GET THE GUIDE
          </button>
        </div>

        {/* Woman relaxing on couch with tablet photo */}
        <div className="w-full aspect-[4/3] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1723533033201-68554bd8bd59?auto=format&fit=crop&w=700&q=80"
            alt="Planning a Sri Lanka south coast trip"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/15 hover:bg-transparent transition-colors"></div>
        </div>
      </div>

      {/* 4. Featured Partner Link & Card */}
      <div className="space-y-3">
        <button
          id="sidebar-partners-link"
          onClick={() => onOpenPartnerPreview(featuredPartner)}
          className="w-full flex items-center justify-between text-xs tracking-wider text-[#555] hover:text-[#111] uppercase font-medium cursor-pointer transition-colors group"
        >
          <span>browse our partners</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Lara Template Card */}
        <div
          id="sidebar-featured-partner-card"
          onClick={() => onOpenPartnerPreview(featuredPartner)}
          className="w-full bg-[#c59e9b] rounded-xs p-5 flex flex-col items-center justify-between text-center cursor-pointer group hover:shadow-md transition-all aspect-square"
        >
          <div className="pt-2">
            <span className="font-script text-3xl text-white block transform -rotate-3">
              Mirissa
            </span>
          </div>

          {/* Laptop device with Lara preview */}
          <div className="w-[85%] pb-2">
            <div className="bg-[#242424] p-1.5 rounded-t-md shadow-md border border-[#444]">
              <div className="w-1 h-1 bg-black/60 rounded-full mx-auto mb-1"></div>
              <div className="aspect-[16/10] bg-white rounded-xs overflow-hidden">
                <img
                  src={featuredPartner.imageUrl}
                  alt="Mirissa Blue Whale Tours, Sri Lanka"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="h-1 bg-[#d0d0d0] rounded-b-md mx-auto w-[98%]"></div>
          </div>
        </div>
      </div>

      {/* 5. Instagram Feed Widget */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <span className="font-serif-display text-sm sm:text-[15px] text-[#333] font-normal lowercase">
            come hang on insta:
          </span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777] hover:text-[#c57d71] transition-colors"
            aria-label="Visit Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {INSTAGRAM_POSTS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              id={`insta-item-${post.id}`}
              onClick={() => onOpenInstagram(post)}
              className="aspect-square rounded-xs overflow-hidden relative cursor-pointer group shadow-2xs border border-[#e4dad0]"
              style={{
                backgroundColor: post.bgColor || '#f0eae4',
                color: post.textColor || '#222',
              }}
            >
              {post.imageUrl ? (
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              ) : post.type === 'pattern' ? (
                <div className="w-full h-full p-2 flex flex-col justify-center items-center text-center text-[9px] font-mono leading-tight tracking-tighter opacity-80 select-none">
                  <div>down south</div>
                  <div>down south</div>
                  <div>down south</div>
                  <div>down south</div>
                  <div>down south</div>
                  <div>down south</div>
                </div>
              ) : (
                <div className="w-full h-full p-3 flex flex-col justify-center items-center text-center">
                  <p className="text-[10px] leading-tight font-medium line-clamp-4">
                    {post.quote || post.caption}
                  </p>
                </div>
              )}

              {/* Hover overlay with heart likes count */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1">
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>{post.likes}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </aside>
  );
};
