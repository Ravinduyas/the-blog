import React, { useState } from 'react';
import { X, Play, CheckCircle2, Download, Sparkles, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FreeTrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrainingModal: React.FC<FreeTrainingModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setRegistered(true);
    setIsPlaying(true);
  };

  return (
    <AnimatePresence>
      <div
        id="training-modal-backdrop"
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          id="training-modal-container"
          onClick={(e) => e.stopPropagation()}
          className="bg-[#faf8f5] w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden flex flex-col border border-[#e2d5cb] max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-[#35393c] text-white p-6 sm:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#aaa] hover:text-white p-1 rounded-full bg-black/20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-w-xl">
              <span className="text-xs tracking-[0.25em] text-[#d28a80] font-semibold uppercase block mb-2">
                FREE 45-MINUTE MASTERCLASS
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-normal leading-tight">
                Plan Your Down South Trip
              </h2>
              <p className="text-sm sm:text-base text-[#d8d8d8] font-light mt-2">
Learn how to plan a south coast trip that is not only easy to organise, but also full of the days you will still be describing to people a year from now.
              </p>
            </div>
          </div>

          {/* Video Player or Registration */}
          <div className="p-6 sm:p-8 space-y-6">
            {!registered ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Video Teaser Thumbnail */}
                <div className="md:col-span-6 relative aspect-video bg-[#1e1e1e] rounded-xs overflow-hidden shadow-md group cursor-pointer" onClick={() => setRegistered(true)}>
                  <img
                    src="https://images.unsplash.com/photo-1723533033201-68554bd8bd59?auto=format&fit=crop&w=700&q=80"
                    alt="Masterclass preview"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#d28a80] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/75 text-white text-[11px] px-2 py-0.5 rounded font-mono">
                    42:15 Masterclass
                  </div>
                </div>

                {/* Instant Access Form */}
                <div className="md:col-span-6 space-y-4">
                  <h3 className="font-serif-display text-xl text-[#222]">
                    Get Instant Free Access
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-[#555] uppercase tracking-wider mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Macka"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-white text-sm px-3.5 py-2.5 rounded-xs border border-[#d8cbbf] focus:outline-none focus:border-[#a88d7f]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#555] uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-white text-sm px-3.5 py-2.5 rounded-xs border border-[#d8cbbf] focus:outline-none focus:border-[#a88d7f]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#d28a80] hover:bg-[#c2796f] text-white text-xs font-semibold tracking-widest uppercase py-3.5 rounded-full transition-colors shadow-xs cursor-pointer"
                    >
                      WATCH IT NOW
                    </button>
                  </form>
                  <p className="text-[11px] text-[#777] text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
No spam ever. Instant access to the video & printable planner.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Active Simulated Video Player */}
                <div className="relative aspect-video bg-[#111] rounded-xs overflow-hidden shadow-lg">
                  {isPlaying ? (
                    <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#2a2d30] to-[#1a1c1e] text-white relative">
                      <div className="flex items-center justify-between text-xs text-[#bbb]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                          Now Playing: Plan Your Down South Trip
                        </span>
                        <span>42:15</span>
                      </div>

                      <div className="text-center my-auto space-y-2">
                        <span className="font-script text-3xl text-[#d28a80]">
                          Welcome, {name || 'Friend'}!
                        </span>
                        <h4 className="font-serif-display text-2xl">
                          Part 1: Seasons, and Why They Decide Everything
                        </h4>
                        <p className="text-xs text-[#aaa] max-w-md mx-auto">
Grab a notepad! We are covering why December to April changes the whole trip, and what to do if your dates fall outside it.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#d28a80] h-full w-[34%]"></div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-[#888]">
                          <span>14:22</span>
                          <span>42:15</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="w-16 h-16 rounded-full bg-[#d28a80] text-white flex items-center justify-center shadow-lg"
                      >
                        <Play className="w-8 h-8 fill-white ml-1" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Workbook Download */}
                <div className="bg-[#f0e6dc] p-4 rounded-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#d28a80]/20 text-[#c2796f] rounded">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-[#222]">
                        Download the Down South Planner (PDF)
                      </h5>
                      <p className="text-xs text-[#666]">
Includes a five-day route, a rupee price list, and our booking-direct cheat sheet.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Down South Planner downloaded successfully!')}
                    className="bg-[#292929] hover:bg-black text-white text-xs px-4 py-2 rounded flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </button>
                </div>
              </div>
            )}

            {/* Curriculum Highlights */}
            <div className="pt-4 border-t border-[#e2d5cb]">
              <h4 className="font-serif-display text-lg text-[#222] mb-3">
                What You Will Learn in this Masterclass:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#444]">
                <div className="bg-white p-3.5 rounded-xs border border-[#ebdcd0] space-y-1">
                  <div className="font-bold text-[#c2796f]">PART 1</div>
                  <div className="font-medium text-[#222]">Timing It Right</div>
                  <p className="text-[#666]">December to April for the south coast, and where to go if that is not your window.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xs border border-[#ebdcd0] space-y-1">
                  <div className="font-bold text-[#c2796f]">PART 2</div>
                  <div className="font-medium text-[#222]">Two Bases, Not Five</div>
                  <p className="text-[#666]">Why the coast road is slower than it looks, and how to route around it.</p>
                </div>
                <div className="bg-white p-3.5 rounded-xs border border-[#ebdcd0] space-y-1">
                  <div className="font-bold text-[#c2796f]">PART 3</div>
                  <div className="font-medium text-[#222]">Booking It Well</div>
                  <p className="text-[#666]">Finding locally owned operators and booking direct for a better price.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
