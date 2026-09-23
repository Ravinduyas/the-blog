import React, { useState } from 'react';
import { Send, Instagram, Youtube, ArrowUp, Sparkles, Check, Globe } from 'lucide-react';

interface FooterProps {
  onOpenTraining: () => void;
  onOpenContact: () => void;
  onOpenShop: () => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTraining,
  onOpenContact,
  onOpenShop,
  onSelectCategory,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="w-full bg-[#f4ede6] border-t border-[#ebdcd0] mt-16 select-none">
      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto px-4 py-14 text-center space-y-4">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c57d71]">
          JOIN 40,000+ TRAVELLERS HEADED DOWN SOUTH
        </span>
        <h3 className="font-serif-display text-3xl sm:text-4xl text-[#222] font-normal">
          South coast guides, surf and season updates & honest local advice
        </h3>
        <p className="text-sm text-[#666] max-w-md mx-auto">
          One good email every Tuesday. No spam, no filler. Unsubscribe at any time.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white text-sm px-4 py-3 rounded-full border border-[#d8cbbf] focus:outline-none focus:border-[#a88d7f]"
          />
          <button
            type="submit"
            className="bg-[#292929] hover:bg-black text-white text-xs font-semibold uppercase tracking-widest px-7 py-3 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {subscribed ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed!</span>
              </>
            ) : (
              <span>SUBSCRIBE</span>
            )}
          </button>
        </form>
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
            Free Trip Guide
          </button>
          <button onClick={onOpenContact} className="hover:text-black transition-colors cursor-pointer">
            Contact & Support
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
