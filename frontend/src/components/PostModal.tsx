import React, { useState } from 'react';
import { BlogPost } from '../types';
import { X, Clock, Calendar, Bookmark, Share2, Check, Copy, Heart, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RichText } from './RichText';

interface PostModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
  onOpenTraining: () => void;
}

export const PostModal: React.FC<PostModalProps> = ({
  post,
  onClose,
  onSelectCategory,
  onOpenTraining,
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(48);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState<Array<{ name: string; text: string; date: string }>>([
    {
      name: 'Sarah Jenkins',
      text: 'This was exactly the guide I was hunting for. Took the 06:30 boat on your advice and we had blue whales by eight. Highlight of the trip.',
      date: '2 days ago',
    },
    {
      name: 'Chloe M.',
      text: 'Macka, thank you for saying the roadside turtle hatcheries are skippable. We went to Rekawa after dark instead and it was unforgettable.',
      date: '4 days ago',
    },
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  if (!post) return null;

  // Articles that ship a photograph lead with it; the rest keep the coloured
  // typographic banner that matches their card in the grid.
  const bannerImage = post.heroImage || post.tileConfig.mockupImage;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;
    setComments([
      ...comments,
      {
        name: newCommentName.trim(),
        text: newCommentText.trim(),
        date: 'Just now',
      },
    ]);
    setNewCommentName('');
    setNewCommentText('');
  };

  return (
    <AnimatePresence>
      <div
        id="post-modal-backdrop"
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          id="post-modal-container"
          onClick={(e) => e.stopPropagation()}
          className="bg-[#faf8f5] w-full max-w-4xl max-h-[92vh] rounded-sm shadow-2xl overflow-y-auto flex flex-col border border-[#e5dacf]"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#faf8f5]/95 backdrop-blur-md px-6 py-4 border-b border-[#ebdcd0] flex items-center justify-between">
            <button
              onClick={() => {
                onSelectCategory(post.category);
                onClose();
              }}
              className="text-xs font-semibold tracking-wider uppercase text-[#c57d71] hover:underline"
            >
              {post.category}
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSaved(!saved)}
                className={`p-2 rounded-full border text-xs flex items-center gap-1.5 transition-colors ${
                  saved
                    ? 'bg-[#c57d71] text-white border-[#c57d71]'
                    : 'bg-white text-[#555] border-[#d8cbbf] hover:text-black'
                }`}
                title="Save Article"
              >
                <Bookmark className="w-4 h-4" />
                <span className="hidden sm:inline">{saved ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white hover:bg-[#ebdcd0] text-[#444] hover:text-black border border-[#d8cbbf] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Article Content Container */}
          <div className="p-6 sm:p-10 max-w-3xl mx-auto w-full space-y-8">
            {/* Meta tags */}
            <div className="flex items-center gap-4 text-xs text-[#777]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl font-serif-display text-[#222222] leading-tight font-normal">
              {post.title}
            </h1>

            {/* Hero Tile Graphic Banner */}
            <div
              className="relative w-full aspect-[21/9] sm:aspect-[2/1] rounded-xs overflow-hidden flex items-center justify-center p-6 text-center shadow-xs border border-black/5"
              style={{
                backgroundColor: post.tileConfig.bgColor,
                color: post.tileConfig.textColor,
              }}
            >
              {bannerImage && (
                <>
                  <img
                    src={bannerImage}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </>
              )}

              <div
                className={
                  bannerImage
                    ? 'relative max-w-md self-end text-white drop-shadow-sm'
                    : 'max-w-md'
                }
              >
                {post.tileConfig.topLabel && (
                  <span className="text-[11px] tracking-[0.2em] uppercase font-medium block mb-2 opacity-80">
                    {post.tileConfig.topLabel}
                  </span>
                )}
                <h2 className="font-serif-display text-2xl sm:text-3xl font-normal leading-snug">
                  {post.tileConfig.headlineText}
                </h2>
                {post.tileConfig.scriptSubtitle && (
                  <p className="font-script text-xl opacity-90 mt-1">
                    {post.tileConfig.scriptSubtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-4 text-base sm:text-[17px] text-[#3c3c3c] leading-relaxed font-sans-clean">
              {post.content.introduction.map((paragraph, index) => (
                <p key={index}>
                  <RichText>{paragraph}</RichText>
                </p>
              ))}
            </div>

            {/* Steps & Code Snippets */}
            {post.content.steps && (
              <div className="space-y-8 pt-4 border-t border-[#ebdcd0]">
                {post.content.steps.map((step, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-serif-display text-[#222222] font-normal">
                      {step.title}
                    </h3>
                    <p className="text-base text-[#444] leading-relaxed whitespace-pre-line">
                      <RichText>{step.description}</RichText>
                    </p>

                    {step.tip && (
                      <div className="mt-3 rounded-xs border-l-4 border-[#c57d71] bg-white px-4 py-3 text-sm leading-relaxed text-[#4a4038]">
                        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-[#c57d71]">
                          Tip
                        </span>
                        <RichText>{step.tip}</RichText>
                      </div>
                    )}

                    {step.codeSnippet && (
                      <div className="relative mt-3 rounded-xs bg-[#24282e] text-[#f1f1f1] p-4 text-xs sm:text-sm font-mono overflow-x-auto border border-[#3b424d]">
                        <button
                          onClick={() => handleCopyCode(step.codeSnippet!)}
                          className="absolute right-3 top-3 bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          {copiedCode === step.codeSnippet ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy details</span>
                            </>
                          )}
                        </button>
                        <pre className="pt-4">{step.codeSnippet}</pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Key Takeaways Callout */}
            {post.content.keyTakeaways && (
              <div className="bg-[#f0e6dc] p-6 sm:p-8 rounded-xs border-l-4 border-[#c57d71] space-y-3">
                <h4 className="font-serif-display text-lg sm:text-xl text-[#222222]">
                  Key Takeaways & Best Practices
                </h4>
                <ul className="space-y-2 text-sm sm:text-base text-[#4a4038]">
                  {post.content.keyTakeaways.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="text-[#c57d71] font-bold">•</span>
                      <span>
                        <RichText>{item}</RichText>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Closing paragraph */}
            {post.content.conclusion && (
              <p className="border-t border-[#ebdcd0] pt-6 text-base sm:text-[17px] leading-relaxed text-[#3c3c3c] font-sans-clean">
                <RichText>{post.content.conclusion}</RichText>
              </p>
            )}

            {/* Free Training Banner Intermission */}
            <div className="bg-[#35393c] text-white p-6 sm:p-8 rounded-xs text-center space-y-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#d6d6d6]">
                PLANNING YOUR OWN DOWN SOUTH TRIP?
              </span>
              <h3 className="font-serif-display text-2xl font-normal">
                Download Our Free Down South Guide
              </h3>
              <p className="text-sm text-[#ccc] max-w-md mx-auto">
The south coast planner we use ourselves — seasons, two-base routes, and what to book ahead.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenTraining();
                }}
                className="bg-[#d28a80] hover:bg-[#c2796f] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full transition-colors cursor-pointer"
              >
                GET THE FREE GUIDE
              </button>
            </div>

            {/* Author Signature */}
            <div className="pt-6 border-t border-[#ebdcd0] flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-white shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  alt="Macka"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-script text-2xl text-[#222] block font-bold">
                  written by Macka
                </span>
                <p className="text-xs text-[#666] leading-relaxed">
Editor at Down South Ceylon. Writing honest south coast guides and hunting down the small, locally owned operators worth your money.
                </p>
              </div>
            </div>

            {/* Like & Share Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[#ebdcd0]">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                  hasLiked
                    ? 'bg-rose-50 border-rose-300 text-rose-600'
                    : 'bg-white border-[#d8cbbf] text-[#555] hover:text-black'
                }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{likes} Helpful</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-[#777]">
                <Share2 className="w-4 h-4" />
                <span>Share this guide</span>
              </div>
            </div>

            {/* Comments Section */}
            <div className="pt-8 border-t border-[#ebdcd0] space-y-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#c57d71]" />
                <h4 className="font-serif-display text-xl text-[#222]">
                  Reader Comments ({comments.length})
                </h4>
              </div>

              {/* Comment list */}
              <div className="space-y-4">
                {comments.map((c, i) => (
                  <div key={i} className="bg-white p-4 rounded-xs border border-[#ebdcd0] space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#333]">{c.name}</span>
                      <span className="text-[#888]">{c.date}</span>
                    </div>
                    <p className="text-sm text-[#444] leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} className="bg-[#f3ece4] p-5 rounded-xs space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#666]">
                  Leave a reply
                </span>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  className="w-full bg-white text-sm px-3.5 py-2 rounded-xs border border-[#d8cbbf] focus:outline-none focus:border-[#a88d7f]"
                  required
                />
                <textarea
                  placeholder="Write your thought or question here..."
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  rows={3}
                  className="w-full bg-white text-sm px-3.5 py-2 rounded-xs border border-[#d8cbbf] focus:outline-none focus:border-[#a88d7f]"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#292929] hover:bg-black text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
