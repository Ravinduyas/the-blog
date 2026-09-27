import React from 'react';
import { X, Check, ExternalLink, MapPin } from 'lucide-react';
import { PartnerListing } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface PartnerPreviewModalProps {
  partner: PartnerListing | null;
  onClose: () => void;
}

/** Details for one partner, with a single route out: the partner's own website. */
export const PartnerPreviewModal: React.FC<PartnerPreviewModalProps> = ({ partner, onClose }) => {
  if (!partner) return null;

  return (
    <AnimatePresence>
      <div
        id="partner-details-backdrop"
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          id="partner-details-container"
          onClick={(e) => e.stopPropagation()}
          className="bg-[#faf8f5] w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-sm shadow-2xl border border-[#ebdcd0]"
        >
          <div className="relative aspect-[16/8] w-full overflow-hidden">
            <img
              src={partner.imageUrl}
              alt={`${partner.name}, ${partner.subtitle}`}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-[#333] hover:bg-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            {partner.badge && (
              <span className="absolute left-3 top-3 rounded-full bg-[#111] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                {partner.badge}
              </span>
            )}
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <p className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-white/80">
                <MapPin className="h-3 w-3" />
                {partner.location}
              </p>
              <h2 className="font-serif-display text-3xl sm:text-4xl">{partner.name}</h2>
              <p className="text-sm text-white/85">{partner.subtitle}</p>
            </div>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <p className="text-[15px] leading-relaxed text-[#444]">{partner.description}</p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {partner.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-xs border border-[#ebdcd0] bg-white p-3 text-sm text-[#444]"
                >
                  <Check className="h-4 w-4 shrink-0 text-[#c57d71]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start justify-between gap-4 border-t border-[#ebdcd0] pt-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs text-[#777]">Best for</p>
                <p className="text-sm text-[#333]">{partner.bestFor}</p>
                <p className="mt-1 text-sm font-semibold text-[#222]">
                  from {partner.currency ?? '$'}
                  {partner.price} <span className="font-normal text-[#777]">{partner.priceUnit}</span>
                </p>
              </div>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener"
                className="flex shrink-0 items-center gap-2 rounded-full bg-[#292929] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-black"
              >
                Visit {new URL(partner.website).hostname.replace(/^www\./, '')}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
