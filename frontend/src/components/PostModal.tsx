import React, { useState } from 'react';
import { BlogPost } from '../types';
import { X, Clock, Calendar, Share2, Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RichText } from './RichText';
import { PARTNER_LISTINGS } from '../data/partners';
import { articleUrl } from '../lib/seo';

/** The article every "trip planner" link on the site opens. */
export const PLANNING_GUIDE_ID = 'how-to-plan-a-trip-down-south';

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
  const [linkCopied, setLinkCopied] = useState(false);

  if (!post) return null;

  // Native share sheet on phones, copy-to-clipboard everywhere else.
  const handleShare = async () => {
    const url = articleUrl(post);
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      /* the reader dismissed the share sheet */
    }
  };

  // Articles that ship a photograph lead with it; the rest keep the coloured
  // typographic banner that matches their card in the grid.
  const bannerImage = post.heroImage || post.tileConfig.mockupImage;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
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
                onClick={handleShare}
                className="p-2 rounded-full border text-xs flex items-center gap-1.5 transition-colors bg-white text-[#555] border-[#d8cbbf] hover:text-black"
                title="Share this guide"
              >
                {linkCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{linkCopied ? 'Copied' : 'Share'}</span>
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

            {/* Quick answer: the direct reply to the title's question, first on the page */}
            {post.content.summary && (
              <div className="rounded-xs border border-[#e5dacf] bg-white p-5 sm:p-6">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c57d71]">
                  Quick answer
                </span>
                <p className="text-base sm:text-[17px] leading-relaxed text-[#2c2c2c]">
                  <RichText>{post.content.summary}</RichText>
                </p>
              </div>
            )}

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

            {/* Frequently asked questions, mirrored in FAQPage structured data */}
            {post.content.faq && post.content.faq.length > 0 && (
              <section className="space-y-5 border-t border-[#ebdcd0] pt-8" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="font-serif-display text-2xl sm:text-3xl text-[#222222] font-normal">
                  Frequently asked questions
                </h2>
                <div className="divide-y divide-[#ebdcd0] border-y border-[#ebdcd0]">
                  {post.content.faq.map((item, index) => (
                    <details key={index} className="group py-4" open={index === 0}>
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base sm:text-lg font-medium text-[#222]">
                        <h3 className="font-sans-clean">{item.question}</h3>
                        <span className="mt-1 shrink-0 text-[#c57d71] transition-transform group-open:rotate-45" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-base leading-relaxed text-[#444]">
                        <RichText>{item.answer}</RichText>
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Partnership disclosure, shown only where an article links out to a partner */}
            {/[\[][^\]]+\]\(https?:\/\//.test(JSON.stringify(post.content)) && (
              <p className="text-xs leading-relaxed text-[#888]">
                Some businesses linked in this article are partners of Down South Ceylon. We only
                recommend places we know and would send our own friends to.
              </p>
            )}

            {/* Book direct with the partners */}
            <div className="bg-[#35393c] text-white p-6 sm:p-8 rounded-xs text-center space-y-4">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#d6d6d6]">
                PLANNING YOUR OWN SOUTH COAST TRIP?
              </span>
              <h3 className="font-serif-display text-2xl font-normal">
                Book Direct with Our Weligama &amp; Mirissa Partners
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                {PARTNER_LISTINGS.map((partner) => (
                  <a
                    key={partner.id}
                    href={partner.website}
                    target="_blank"
                    rel="noopener"
                    className="rounded-full border border-white/25 px-3.5 py-1.5 text-xs text-white hover:bg-white/10 transition-colors"
                  >
                    {partner.name}
                  </a>
                ))}
              </div>
              {post.id !== PLANNING_GUIDE_ID && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenTraining();
                  }}
                  className="bg-[#d28a80] hover:bg-[#c2796f] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  READ THE TRIP PLANNING GUIDE
                </button>
              )}
            </div>

            {/* Author Signature */}
            <div className="pt-6 border-t border-[#ebdcd0] flex items-center gap-4">
              {post.author === 'Macka' ? (
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-white shadow-xs">
                  <img
                    src={`${import.meta.env.BASE_URL}macka.png`}
                    alt="Macka"
                    className="w-full h-full object-cover object-[60%_30%]"
                  />
                </div>
              ) : (
                <div
                  className="w-16 h-16 rounded-full shrink-0 bg-[#c57d71] text-white flex items-center justify-center font-serif-display text-2xl shadow-xs"
                  aria-hidden="true"
                >
                  {post.author.charAt(0)}
                </div>
              )}
              <div>
                <span className="font-script text-2xl text-[#222] block font-bold">
                  written by {post.author}
                </span>
                <p className="text-xs text-[#666] leading-relaxed">
Editor at Down South Ceylon, based in Weligama. Writing first-hand guides to Sri Lanka's south coast from Galle to Tangalle, and hunting down the small, locally owned operators worth your money.
                </p>
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center justify-end pt-4 border-t border-[#ebdcd0]">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#d8cbbf] bg-white text-sm text-[#555] hover:text-black transition-colors cursor-pointer"
              >
                {linkCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span>{linkCopied ? 'Link copied' : 'Share this guide'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
