import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, HelpCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Destination Question');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      // reset after feedback
    }, 1000);
  };

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
            <h2 className="font-serif-display text-2xl sm:text-3xl font-normal">
              Support & Contact
            </h2>
            <p className="text-xs text-[#bbb] mt-1">
Have a question about the south coast, want to suggest a place, or run a Down South business you would like us to feature? Drop us a note!
            </p>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display text-2xl text-[#222]">
                  Message Received!
                </h3>
                <p className="text-xs text-[#666] max-w-xs mx-auto">
Thanks for reaching out, {name || 'there'}! Macka or one of our editors will get back to you within 24 business hours.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 bg-[#292929] text-white text-xs font-semibold uppercase px-6 py-2.5 rounded-full"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#555] uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Macka Perera"
                    required
                    className="w-full bg-white text-sm px-3.5 py-2 rounded-xs border border-[#d8cbbf] focus:outline-none focus:border-[#a88d7f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#555] uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white text-sm px-3.5 py-2 rounded-xs border border-[#d8cbbf] focus:outline-none focus:border-[#a88d7f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#555] uppercase tracking-wider mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white text-sm px-3.5 py-2 rounded-xs border border-[#d8cbbf] focus:outline-none focus:border-[#a88d7f]"
                  >
                    <option value="Destination Question">Question About the South Coast</option>
                    <option value="Suggest a Destination">Suggest a Place or Experience</option>
                    <option value="List Your Business">List Your Down South Business</option>
                    <option value="Press / Partnership">Press & Partnership Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#555] uppercase tracking-wider mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you need help with..."
                    required
                    className="w-full bg-white text-sm px-3.5 py-2 rounded-xs border border-[#d8cbbf] focus:outline-none focus:border-[#a88d7f]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c57d71] hover:bg-[#b26e63] text-white text-xs font-semibold tracking-widest uppercase py-3 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
