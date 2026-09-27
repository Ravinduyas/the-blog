import React from 'react';
import { X, ExternalLink, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PARTNER_LISTINGS } from '../data/partners';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Real contact routes only: each partner's own website, plus Hello Rent's WhatsApp. */
const WHATSAPP: Record<string, string> = {
  'hello-rent-sri-lanka': 'https://wa.me/94767073388',
};

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="contact-modal-backdrop"
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          id="contact-modal-container"
          onClick={(e) => e.stopPropagation()}
          className="bg-[#faf8f5] w-full max-w-lg rounded-sm shadow-2xl overflow-hidden border border-[#e2d5cb]"
        >
          {/* Header */}
          <div className="bg-[#292929] text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#999] hover:text-white p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#c57d71] font-semibold block mb-1">
              DOWN SOUTH CEYLON
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-normal">Contact &amp; Bookings</h2>
            <p className="text-xs text-[#bbb] mt-1">
              Booking a surf week, a desk, a scooter or the Saturday boat? Contact our partners directly;
              they answer faster than we can and you get the direct-booking price.
            </p>
          </div>

          {/* Partner contacts */}
          <ul className="p-6 sm:p-8 space-y-3">
            {PARTNER_LISTINGS.map((partner) => (
              <li
                key={partner.id}
                className="flex items-center justify-between gap-3 rounded-xs border border-[#ebdcd0] bg-white px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#222]">{partner.name}</p>
                  <p className="text-xs text-[#777] truncate">{partner.subtitle}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {WHATSAPP[partner.id] && (
                    <a
                      href={WHATSAPP[partner.id]}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-1 rounded-full border border-[#d8cbbf] px-3 py-1.5 text-xs text-[#333] hover:border-black"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  )}
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1 rounded-full bg-[#292929] px-3 py-1.5 text-xs text-white hover:bg-black"
                  >
                    Website
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
