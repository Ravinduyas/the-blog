import React, { useState } from 'react';
import { X, Check, Laptop, Tablet, Smartphone, ShoppingBag, ExternalLink } from 'lucide-react';
import { PartnerListing } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface PartnerPreviewModalProps {
  partner: PartnerListing | null;
  onClose: () => void;
  onSaveToTrip: (partner: PartnerListing) => void;
}

export const PartnerPreviewModal: React.FC<PartnerPreviewModalProps> = ({
  partner,
  onClose,
  onSaveToTrip,
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [added, setAdded] = useState(false);

  if (!partner) return null;

  const handleAdd = () => {
    onSaveToTrip(partner);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        id="product-preview-backdrop"
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          id="product-preview-container"
          onClick={(e) => e.stopPropagation()}
          className="bg-[#faf8f5] w-full max-w-5xl h-[90vh] rounded-sm shadow-2xl overflow-hidden flex flex-col border border-[#ebdcd0]"
        >
          {/* Top Preview Bar */}
          <div className="bg-[#24282c] text-white px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-serif-display text-xl">{partner.name}</span>
              <span className="text-xs text-[#aaa] hidden sm:inline">| {partner.subtitle}</span>
            </div>

            {/* Device Switcher */}
            <div className="flex items-center bg-[#151719] rounded-sm p-1 gap-1">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceMode === 'desktop' ? 'bg-[#3b4046] text-white' : 'text-[#888] hover:text-white'
                }`}
                title="Desktop View"
              >
                <Laptop className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceMode === 'tablet' ? 'bg-[#3b4046] text-white' : 'text-[#888] hover:text-white'
                }`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  deviceMode === 'mobile' ? 'bg-[#3b4046] text-white' : 'text-[#888] hover:text-white'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleAdd}
                className="bg-[#c57d71] hover:bg-[#b26e63] text-white text-xs font-semibold px-4 py-2 rounded transition-colors flex items-center gap-1.5"
              >
                {added ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Saved to Trip!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Save from ${partner.price}</span>
                  </>
                )}
              </button>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener"
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Website</span>
              </a>
              <button
                onClick={onClose}
                className="text-[#888] hover:text-white p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview */}
          <div className="flex-1 bg-[#ede6df] p-4 sm:p-8 overflow-y-auto flex items-center justify-center">
            <div
              className={`bg-white rounded-md shadow-2xl overflow-hidden transition-all duration-300 flex flex-col border border-[#d6cbbf] ${
                deviceMode === 'desktop'
                  ? 'w-full max-w-4xl h-[95%]'
                  : deviceMode === 'tablet'
                  ? 'w-[640px] h-[95%]'
                  : 'w-[360px] h-[95%]'
              }`}
            >
              {/* Browser bar */}
              <div className="bg-[#f2ece6] px-4 py-2 border-b border-[#e5ded6] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                <div className="bg-white text-[11px] text-[#777] font-mono px-3 py-0.5 rounded-full flex-1 text-center truncate border border-[#ded5cb]">
                  {partner.website}
                </div>
              </div>

              {/* Scrollable Demo Site Frame */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-12 bg-[#faf8f5]">
                {/* Hero section */}
                <div className="text-center space-y-4 max-w-xl mx-auto pt-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#888]">
                    {partner.location}
                  </span>
                  <h1 className="font-serif-display text-4xl sm:text-5xl text-[#222]">
                    {partner.name}
                  </h1>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {partner.description}
                  </p>
                  <div className="pt-2">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener"
                      className="inline-block bg-[#292929] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
                    >
                      CHECK AVAILABILITY
                    </a>
                  </div>
                </div>

                {/* Hero Image Showcase */}
                <div className="aspect-[16/9] w-full rounded-xs overflow-hidden shadow-md">
                  <img
                    src={partner.imageUrl}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Features & Deliverables Grid */}
                <div className="bg-[#f4ede6] p-6 sm:p-8 rounded-xs space-y-4">
                  <h3 className="font-serif-display text-2xl text-[#222] text-center">
                    What is Included with {partner.name}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {partner.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#444] bg-white p-3 rounded-xs border border-[#ebdcd0]">
                        <Check className="w-4 h-4 text-[#c57d71] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
