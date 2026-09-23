import React, { useState } from 'react';
import { X, ShoppingBag, Check, ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { PartnerListing } from '../types';
import { PARTNER_LISTINGS } from '../data/partners';
import { motion, AnimatePresence } from 'motion/react';

interface ShopDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPartner: (partner: PartnerListing) => void;
  onSaveToTrip: (partner: PartnerListing) => void;
}

export const ShopDrawer: React.FC<ShopDrawerProps> = ({
  isOpen,
  onClose,
  onSelectPartner,
  onSaveToTrip,
}) => {
  const [addedId, setAddedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAdd = (partner: PartnerListing) => {
    onSaveToTrip(partner);
    setAddedId(partner.id);
    setTimeout(() => setAddedId(null), 1800);
  };

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
                HANDPICKED DOWN SOUTH
              </span>
              <h3 className="font-serif-display text-2xl text-[#222]">
                Our Down South Partners
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
                      Quick Preview
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
                      <span className="text-sm font-normal text-[#777]">from </span>${partner.price}<span className="text-xs font-normal text-[#777]"> {partner.priceUnit}</span>
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
                    <button
                      onClick={() => handleAdd(partner)}
                      className="flex-1 py-2 text-xs bg-[#292929] hover:bg-black text-white font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      {addedId === partner.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Saved!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Save to Trip</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-[#ebdcd0] bg-[#f6efe9] space-y-3">
            <div className="flex items-center justify-between text-xs text-[#666]">
              <span>Every partner is visited and vetted by our editors</span>
              <span>Best Rates Booked Direct</span>
            </div>
            <button
              onClick={() => {
                alert('Your saved trip is ready! In a live deployment, this opens your saved partner list.');
              }}
              className="w-full bg-[#c57d71] hover:bg-[#b26e63] text-white text-xs font-semibold tracking-widest uppercase py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>VIEW YOUR SAVED TRIP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
