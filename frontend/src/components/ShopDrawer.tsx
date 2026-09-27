import React from 'react';
import { X, ExternalLink, Eye } from 'lucide-react';
import { PartnerListing } from '../types';
import { PARTNER_LISTINGS } from '../data/partners';
import { motion, AnimatePresence } from 'motion/react';

interface ShopDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPartner: (partner: PartnerListing) => void;
}

export const ShopDrawer: React.FC<ShopDrawerProps> = ({ isOpen, onClose, onSelectPartner }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="shop-drawer-backdrop"
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-2xs flex justify-end"
        onClick={onClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          id="shop-drawer-container"
          onClick={(e) => e.stopPropagation()}
          className="bg-[#faf8f5] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-[#ebdcd0]"
        >
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#ebdcd0] flex items-center justify-between bg-[#f6efe9]">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#888]">
                WELIGAMA &amp; MIRISSA
              </span>
              <h3 className="font-serif-display text-2xl text-[#222]">
                Our South Coast Partners
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white text-[#555] hover:text-black transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Kits List */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            {PARTNER_LISTINGS.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xs border border-[#ebdcd0] overflow-hidden shadow-xs hover:shadow-md transition-all group"
              >
                {/* Kit Image Thumbnail */}
                <div
                  className="aspect-[16/9] relative overflow-hidden cursor-pointer"
                  onClick={() => onSelectPartner(partner)}
                >
                  <img
                    src={partner.imageUrl}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {partner.badge && (
                    <span className="absolute top-3 left-3 bg-[#111] text-white text-[10px] tracking-wider uppercase font-bold px-2.5 py-1 rounded-full">
                      {partner.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-[#222] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </span>
                  </div>
                </div>

                {/* Kit Info */}
                <div className="p-5 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h4 className="font-serif-display text-xl text-[#222]">{partner.name}</h4>
                      <p className="text-xs text-[#777]">{partner.subtitle} · {partner.location}</p>
                    </div>
                    <span className="font-sans-clean font-semibold text-lg text-[#222]">
                      <span className="text-sm font-normal text-[#777]">from </span>{partner.currency ?? '$'}{partner.price}<span className="text-xs font-normal text-[#777]"> {partner.priceUnit}</span>
                    </span>
                  </div>

                  <p className="text-xs text-[#555] leading-relaxed line-clamp-2">
                    {partner.description}
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => onSelectPartner(partner)}
                      className="flex-1 py-2 text-xs border border-[#d8cbbf] hover:border-black text-[#333] hover:text-black font-medium transition-colors text-center"
                    >
                      View Details
                    </button>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener"
                      className="flex-1 py-2 text-xs bg-[#292929] hover:bg-black text-white font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-[#ebdcd0] bg-[#f6efe9]">
            <p className="text-xs text-[#666] text-center">
              Prices are the partners’ published starting rates. Book on their own websites for the direct price.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
