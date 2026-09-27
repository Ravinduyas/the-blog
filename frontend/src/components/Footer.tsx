import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { PARTNER_LISTINGS } from '../data/partners';

interface FooterProps {
  onOpenTraining: () => void;
  onOpenContact: () => void;
  onOpenShop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTraining, onOpenContact, onOpenShop }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="w-full bg-[#f4ede6] border-t border-[#ebdcd0] mt-16 select-none">
      {/* Partners */}
      <div className="max-w-5xl mx-auto px-4 py-14 text-center space-y-4">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c57d71]">
          LOCALLY OWNED, BOOKED DIRECT
        </span>
        <h3 className="font-serif-display text-3xl sm:text-4xl text-[#222] font-normal">
          Our partners on Sri Lanka’s south coast
        </h3>
        <p className="text-sm text-[#666] max-w-md mx-auto">
          The Weligama and Mirissa businesses we recommend throughout these guides.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4 text-left">
          {PARTNER_LISTINGS.map((partner) => (
            <li key={partner.id}>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener"
                className="flex h-full items-start justify-between gap-3 rounded-xs border border-[#e2d5cb] bg-white px-4 py-3 hover:border-[#c57d71] transition-colors group"
              >
                <span>
                  <span className="block text-sm font-semibold text-[#222] group-hover:text-[#9e5d50]">
                    {partner.name}
                  </span>
                  <span className="block text-xs text-[#777]">
                    {partner.subtitle} · {partner.location.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
                  </span>
                </span>
                <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-[#aaa] group-hover:text-[#c57d71]" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 border-t border-[#ebdcd0] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#666]">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="font-bold text-base text-[#222] tracking-tight">the blog</span>
          <span className="hidden sm:inline text-[#ccc]">|</span>
          <span>© 2026 Down South Ceylon. All rights reserved.</span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center space-x-6 tracking-wide uppercase font-medium text-[11px]">
          <button onClick={onOpenShop} className="hover:text-black transition-colors cursor-pointer">
            Our Partners
          </button>
          <button onClick={onOpenTraining} className="hover:text-black transition-colors cursor-pointer">
            Trip Planning Guide
          </button>
          <button onClick={onOpenContact} className="hover:text-black transition-colors cursor-pointer">
            Contact
          </button>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white text-[#444] hover:text-black border border-[#d8cbbf] transition-colors ml-4 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
