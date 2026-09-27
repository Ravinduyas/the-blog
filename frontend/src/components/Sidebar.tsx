import React from 'react';
import { Search, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { CategoryType, PartnerListing } from '../types';
import { PARTNER_LISTINGS } from '../data/partners';
import { motion } from 'motion/react';

interface SidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: CategoryType) => void;
  categories: CategoryType[];
  onOpenTraining: () => void;
  onOpenPartnerPreview: (partner: PartnerListing) => void;
  onOpenPartners: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  onOpenTraining,
  onOpenPartnerPreview,
  onOpenPartners,
}) => {
  const featuredPartner = PARTNER_LISTINGS.find((p) => p.id === 'the-surfer-weligama') || PARTNER_LISTINGS[0];

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
              src={`${import.meta.env.BASE_URL}macka.png`}
              alt="Macka, editor of Down South Ceylon, working on a laptop in Weligama"
              className="w-full h-full object-cover object-[60%_30%]"
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
          I'm Macka, writing from Weligama. If you've come for south coast guides, surf, safari and honest local advice, you're in the right place!
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
            START HERE
          </span>
          <h3 className="font-serif-display text-2xl sm:text-[26px] leading-tight font-normal mb-3">
            Plan Your Down South Trip
          </h3>
          <p className="text-[13px] leading-relaxed text-[#dcdcdc] font-light max-w-[240px] mb-5">
            When to come, how long to stay and where to base yourself, so the trip is <span className="font-editorial italic text-base">unhurried</span> and <span className="underline decoration-1 underline-offset-2">full of the things you will actually remember.</span>
          </p>

          <button
            id="sidebar-get-planner-btn"
            onClick={onOpenTraining}
            className="bg-[#d28a80] hover:bg-[#c2796f] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full transition-colors cursor-pointer shadow-xs"
          >
            READ THE GUIDE
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
          onClick={onOpenPartners}
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
              {featuredPartner.name}
            </span>
          </div>

          {/* Laptop device with Lara preview */}
          <div className="w-[85%] pb-2">
            <div className="bg-[#242424] p-1.5 rounded-t-md shadow-md border border-[#444]">
              <div className="w-1 h-1 bg-black/60 rounded-full mx-auto mb-1"></div>
              <div className="aspect-[16/10] bg-white rounded-xs overflow-hidden">
                <img
                  src={featuredPartner.imageUrl}
                  alt={`${featuredPartner.name}, ${featuredPartner.subtitle}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="h-1 bg-[#d0d0d0] rounded-b-md mx-auto w-[98%]"></div>
          </div>
        </div>
      </div>

      {/* 5. Partner Directory */}
      <div className="space-y-3 pt-2">
        <span className="font-serif-display text-sm sm:text-[15px] text-[#333] font-normal lowercase block">
          book direct with our partners:
        </span>

        <div className="grid grid-cols-2 gap-2.5">
          {PARTNER_LISTINGS.map((partner) => (
            <motion.a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              id={`partner-tile-${partner.id}`}
              className="aspect-square rounded-xs overflow-hidden relative cursor-pointer group shadow-2xs border border-[#e4dad0] block"
            >
              <img
                src={partner.imageUrl}
                alt={`${partner.name}, ${partner.subtitle}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-2">
                <span className="text-white text-[11px] font-semibold leading-tight">{partner.name}</span>
                <span className="text-white/80 text-[9px] leading-tight flex items-center gap-1">
                  {new URL(partner.website).hostname.replace(/^www\./, '')}
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </aside>
  );
};
