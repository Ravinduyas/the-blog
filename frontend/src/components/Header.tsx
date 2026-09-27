import React, { useState } from 'react';
import { Menu, X, Sparkles, Mail, Search, ChevronDown } from 'lucide-react';
import { CategoryType } from '../types';

interface HeaderProps {
  onOpenTraining: () => void;
  onOpenContact: () => void;
  onOpenShop: () => void;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  categories: CategoryType[];
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTraining,
  onOpenContact,
  onOpenShop,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedCategory,
  categories,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#fbf5f2] border-b border-[#f0e6e0] select-none">
      {/* Top Black Bar */}
      <div className="w-full bg-[#292929] text-[#e0e0e0] text-[11px] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-end space-x-5 tracking-wider font-light">
          <button
            id="top-bar-free-planner-btn"
            onClick={onOpenTraining}
            className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>trip planner</span>
          </button>
          <span className="text-[#555] font-light">|</span>
          <button
            id="top-bar-partners-btn"
            onClick={onOpenShop}
            className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>our partners</span>
          </button>
          <span className="text-[#555] font-light">|</span>
          <button
            id="top-bar-contact-btn"
            onClick={onOpenContact}
            className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>contact</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Left Cluster: Brand + Filters */}
        <div className="flex items-center gap-3 lg:gap-5 min-w-0">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo-link"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('All Categories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 shrink-0"
          >
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#222222] font-sans-clean group-hover:opacity-85 transition-opacity">
              the blog
            </span>
          </a>

          {/* Search + Categories (left aligned, beside the brand) */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Search Field */}
            <div className="relative w-28 lg:w-40 xl:w-48">
              <input
                id="nav-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="search"
                className="w-full bg-white text-[#333333] placeholder-[#999999] text-xs pl-3 pr-7 py-1.5 rounded-sm border border-[#e6ddd6] focus:outline-none focus:border-[#b89b8c] transition-colors shadow-xs"
              />
              {searchQuery ? (
                <button
                  id="nav-search-clear-btn"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#222] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              ) : (
                <Search className="w-3 h-3 text-[#aaa] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              )}
            </div>
            {/* Categories Dropdown */}
            <div className="relative w-28 lg:w-36 xl:w-40">
              <select
                id="nav-category-select"
                value={selectedCategory}
                onChange={(e) => onSelectCategory(e.target.value)}
                className="w-full appearance-none bg-white text-[#444444] text-xs pl-3 pr-7 py-1.5 rounded-sm border border-[#e6ddd6] focus:outline-none focus:border-[#b89b8c] cursor-pointer shadow-xs lowercase truncate"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All Categories' ? 'categories' : cat.toLowerCase()}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-[#888] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <button
            id="nav-partners-btn"
            onClick={onOpenShop}
            className="text-[#4a4a4a] hover:text-[#111111] font-editorial italic text-base tracking-wide hover:underline underline-offset-4 transition-all cursor-pointer"
          >
            partners
          </button>
          <button
            id="nav-safari-btn"
            onClick={() => {
              onSelectCategory('Wildlife & Safari');
              const el = document.getElementById('blog-grid-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#4a4a4a] hover:text-[#111111] font-editorial italic text-base tracking-wide hover:underline underline-offset-4 transition-all cursor-pointer"
          >
            safari
          </button>
          <button
            id="nav-blog-btn"
            onClick={() => {
              onSelectCategory('All Categories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-medium text-[#111111] font-editorial italic text-base tracking-wide border-b border-[#222222] pb-0.5 cursor-pointer"
          >
            blog
          </button>

        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center md:hidden gap-3">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#333] hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search + Categories Row (always visible on small screens) */}
      <div className="md:hidden px-4 pb-3 flex items-center gap-2">
        <div className="relative flex-1">
          <input
            id="mobile-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="search"
            className="w-full bg-white text-[#333333] placeholder-[#999999] text-[13px] pl-3 pr-8 py-2 rounded-sm border border-[#e6ddd6] focus:outline-none focus:border-[#b89b8c] transition-colors shadow-xs"
          />
          {searchQuery ? (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#222] cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Search className="w-3.5 h-3.5 text-[#aaa] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          )}
        </div>
        <div className="relative flex-1">
          <select
            id="mobile-category-select"
            value={selectedCategory}
            onChange={(e) => onSelectCategory(e.target.value)}
            className="w-full appearance-none bg-white text-[#444444] text-[13px] pl-3 pr-8 py-2 rounded-sm border border-[#e6ddd6] focus:outline-none focus:border-[#b89b8c] cursor-pointer shadow-xs lowercase truncate"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All Categories' ? 'categories' : cat.toLowerCase()}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-[#888] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf3ef] border-t border-[#eee1d8] px-6 py-5 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-3 font-editorial text-xl italic">
            <button
              onClick={() => {
                onOpenShop();
                setMobileMenuOpen(false);
              }}
              className="text-left text-[#333] hover:text-[#c57d71] py-1"
            >
              our partners
            </button>
            <button
              onClick={() => {
                onSelectCategory('Wildlife & Safari');
                setMobileMenuOpen(false);
              }}
              className="text-left text-[#333] hover:text-[#c57d71] py-1"
            >
              safari
            </button>
            <button
              onClick={() => {
                onSelectCategory('All Categories');
                setMobileMenuOpen(false);
              }}
              className="text-left font-semibold text-[#111] py-1"
            >
              blog
            </button>
          </div>
          <div className="border-t border-[#e2d5cb] pt-4 flex flex-col space-y-2 text-sm text-[#666]">
            <button
              onClick={() => {
                onOpenTraining();
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-[#222] font-medium flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#c57d71]" />
              Trip Planning Guide
            </button>
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
