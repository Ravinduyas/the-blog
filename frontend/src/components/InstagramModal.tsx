import React, { useState } from 'react';
import { X, Heart, MessageCircle, Send, Instagram, ExternalLink } from 'lucide-react';
import { InstagramPost } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface InstagramModalProps {
  post: InstagramPost | null;
  onClose: () => void;
}

export const InstagramModal: React.FC<InstagramModalProps> = ({ post, onClose }) => {
  const [likes, setLikes] = useState<number>(post ? post.likes : 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([
    { user: 'koko.wanders', text: 'Saved this for our January trip — thank you! 🙌' },
    { user: 'thehendersons_abroad', text: 'We stayed in Hiri for two weeks because of this ✨' },
  ]);
  const [inputComment, setInputComment] = useState('');

  if (!post) return null;

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
    if (!inputComment.trim()) return;
    setComments([...comments, { user: 'you', text: inputComment.trim() }]);
    setInputComment('');
  };

  return (
    <AnimatePresence>
      <div
        id="insta-modal-backdrop"
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          id="insta-modal-container"
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden flex flex-col sm:flex-row border border-[#ddd]"
        >
          {/* Post Visual */}
          <div
            className="sm:w-1/2 aspect-square flex items-center justify-center relative overflow-hidden"
            style={{
              backgroundColor: post.bgColor || '#f0eae4',
              color: post.textColor || '#222',
            }}
          >
            {post.imageUrl ? (
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : post.type === 'pattern' ? (
              <div className="p-6 text-center text-xs font-mono tracking-widest leading-loose select-none">
                <div>DOWN SOUTH</div>
                <div>DOWN SOUTH</div>
                <div>DOWN SOUTH</div>
                <div>DOWN SOUTH</div>
                <div>DOWN SOUTH</div>
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="font-serif-display text-xl leading-relaxed">
                  "{post.quote || post.caption}"
                </p>
              </div>
            )}
          </div>

          {/* Post Details & Comments */}
          <div className="sm:w-1/2 p-5 flex flex-col justify-between bg-[#faf8f5]">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#ebdcd0] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-white">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Macka"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-xs text-[#222]">downsouthlanka</h5>
                    <p className="text-[10px] text-[#888]">Sri Lanka South Coast Guides</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-[#888] hover:text-black p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Caption */}
              <div className="text-xs text-[#444] leading-relaxed max-h-36 overflow-y-auto">
                <span className="font-semibold text-[#222] mr-1.5">downsouthlanka</span>
                {post.caption}
              </div>

              {/* Comments Feed */}
              <div className="space-y-2 max-h-32 overflow-y-auto pt-2 border-t border-[#ebdcd0]">
                {comments.map((c, idx) => (
                  <div key={idx} className="text-xs text-[#555]">
                    <span className="font-semibold text-[#222] mr-1.5">{c.user}</span>
                    {c.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions & Comment Input */}
            <div className="pt-4 border-t border-[#ebdcd0] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button onClick={handleLike} className="flex items-center gap-1 text-xs text-[#444] hover:text-rose-600">
                    <Heart className={`w-4 h-4 ${hasLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>{likes}</span>
                  </button>
                  <div className="flex items-center gap-1 text-xs text-[#444]">
                    <MessageCircle className="w-4 h-4" />
                    <span>{comments.length}</span>
                  </div>
                </div>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#c57d71] flex items-center gap-1 hover:underline"
                >
                  <span>Open in Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <form onSubmit={handleAddComment} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={inputComment}
                  onChange={(e) => setInputComment(e.target.value)}
                  className="flex-1 bg-white text-xs px-3 py-1.5 rounded-full border border-[#d8cbbf] focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-xs font-semibold text-[#c57d71] hover:text-[#b26e63]"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
