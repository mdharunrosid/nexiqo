import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Play,
  Share2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export type PostType = "image" | "text" | "reel";

export type PostItem = {
  id: string;
  username: string;
  handle: string;
  avatar: string;
  timeAgo: string;
  caption: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  type: PostType;
  views?: string;
};

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return String(n);
}

export function PostCard({ post, index }: { post: PostItem; index: number }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  function toggleLike() {
    setLiked((prev) => {
      setLikeCount((c) => (prev ? c - 1 : c + 1));
      return !prev;
    });
  }

  return (
    <motion.article
      data-ocid={`home.post.item.${index + 1}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.07, duration: 0.4 }}
      className="overflow-hidden"
      style={{
        background: "oklch(var(--card))",
        border: "1px solid oklch(var(--border) / 0.25)",
        borderRadius: "var(--radius)",
        boxShadow: "0 4px 24px oklch(0 0 0 / 0.35)",
        marginBottom: "12px",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3.5 pb-2.5">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full p-0.5 flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.7), oklch(0.5 0.2 290 / 0.7))",
            }}
          >
            <img
              src={post.avatar}
              alt={post.username}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span
              className="font-bold text-sm text-foreground truncate leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.handle}
            </span>
            <span
              className="text-[10px] leading-tight"
              style={{
                color: "oklch(var(--muted-foreground))",
                fontFamily: "var(--font-body)",
              }}
            >
              {post.timeAgo}
            </span>
          </div>
        </div>
        <button
          type="button"
          data-ocid={`home.post.more.${index + 1}`}
          aria-label="More options"
          className="p-1 button-interactive rounded-full"
        >
          <MoreHorizontal
            className="w-5 h-5"
            style={{ color: "oklch(var(--muted-foreground))" }}
          />
        </button>
      </div>

      {/* Media */}
      {post.image && (
        <div className="relative mx-4 mb-2 overflow-hidden rounded-xl">
          <img
            src={post.image}
            alt={post.caption}
            className="w-full object-cover"
            style={{
              aspectRatio: post.type === "reel" ? "9/16" : "16/9",
              maxHeight: post.type === "reel" ? "380px" : undefined,
            }}
          />
          {post.type === "reel" && (
            <>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0 0 0 / 0.7) 0%, transparent 50%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0 0 0 / 0.5)",
                    border: "2px solid oklch(1 0 0 / 0.6)",
                  }}
                >
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>
              <span
                className="absolute top-2.5 right-2.5 text-[10px] font-bold text-white px-2 py-0.5 rounded-md"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                }}
              >
                REEL
              </span>
              {post.views && (
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1">
                  <Play className="w-3 h-3 text-white fill-white" />
                  <span className="text-xs font-semibold text-white">
                    {post.views} views
                  </span>
                </div>
              )}
              <div className="absolute right-3 bottom-10 flex flex-col gap-3">
                <button
                  type="button"
                  data-ocid={`home.post.float_like.${index + 1}`}
                  onClick={toggleLike}
                  className="w-9 h-9 rounded-full flex items-center justify-center button-interactive"
                  style={{
                    background: "oklch(0 0 0 / 0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid oklch(1 0 0 / 0.15)",
                  }}
                  aria-label="Like"
                >
                  <Heart
                    className="w-4 h-4"
                    style={{
                      color: liked ? "oklch(0.65 0.22 15)" : "white",
                      fill: liked ? "oklch(0.65 0.22 15)" : "transparent",
                    }}
                  />
                </button>
                <button
                  type="button"
                  data-ocid={`home.post.float_comment.${index + 1}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center button-interactive"
                  style={{
                    background: "oklch(0 0 0 / 0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid oklch(1 0 0 / 0.15)",
                  }}
                  aria-label="Comment"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </button>
              </div>
            </>
          )}
          {post.type === "image" && (
            <div className="absolute right-3 bottom-3 flex flex-col gap-2">
              <button
                type="button"
                data-ocid={`home.post.float_like.${index + 1}`}
                onClick={toggleLike}
                className="w-9 h-9 rounded-full flex items-center justify-center button-interactive"
                style={{
                  background: "oklch(0 0 0 / 0.45)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid oklch(1 0 0 / 0.15)",
                }}
                aria-label="Like"
              >
                <Heart
                  className="w-4 h-4"
                  style={{
                    color: liked
                      ? "oklch(0.65 0.22 15)"
                      : "oklch(0.65 0.18 240)",
                    fill: liked ? "oklch(0.65 0.22 15)" : "transparent",
                  }}
                />
              </button>
              <button
                type="button"
                data-ocid={`home.post.float_comment.${index + 1}`}
                className="w-9 h-9 rounded-full flex items-center justify-center button-interactive"
                style={{
                  background: "oklch(0 0 0 / 0.45)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid oklch(1 0 0 / 0.15)",
                }}
                aria-label="Comment"
              >
                <MessageCircle
                  className="w-4 h-4"
                  style={{ color: "oklch(var(--muted-foreground))" }}
                />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Caption */}
      <div className="px-4 pb-2">
        <p
          className="text-sm leading-relaxed"
          style={{
            color: "oklch(var(--foreground))",
            fontFamily: "var(--font-body)",
          }}
        >
          {post.caption}
        </p>
      </div>

      {/* Action row */}
      <div
        className="flex items-center gap-5 px-4 py-2.5"
        style={{ borderTop: "1px solid oklch(var(--border) / 0.15)" }}
      >
        <motion.button
          type="button"
          data-ocid={`home.post.like.${index + 1}`}
          onClick={toggleLike}
          className="flex items-center gap-1.5"
          whileTap={{ scale: 1.3 }}
          aria-label="Like post"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={liked ? "liked" : "unliked"}
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              <Heart
                className="w-[18px] h-[18px]"
                style={{
                  color: liked
                    ? "oklch(0.65 0.22 15)"
                    : "oklch(var(--muted-foreground))",
                  fill: liked ? "oklch(0.65 0.22 15)" : "transparent",
                  transition: "color 0.2s, fill 0.2s",
                }}
              />
            </motion.div>
          </AnimatePresence>
          <span
            className="text-xs font-medium"
            style={{
              color: liked
                ? "oklch(0.65 0.22 15)"
                : "oklch(var(--muted-foreground))",
              fontFamily: "var(--font-body)",
            }}
          >
            {formatCount(likeCount)}
          </span>
        </motion.button>

        <button
          type="button"
          data-ocid={`home.post.comment.${index + 1}`}
          className="flex items-center gap-1.5 button-interactive"
          aria-label="Comment"
        >
          <MessageCircle
            className="w-[18px] h-[18px]"
            style={{ color: "oklch(var(--muted-foreground))" }}
          />
          <span
            className="text-xs font-medium"
            style={{
              color: "oklch(var(--muted-foreground))",
              fontFamily: "var(--font-body)",
            }}
          >
            {formatCount(post.comments)}
          </span>
        </button>

        <button
          type="button"
          data-ocid={`home.post.share.${index + 1}`}
          className="flex items-center gap-1.5 button-interactive"
          aria-label="Share"
        >
          <Share2
            className="w-[18px] h-[18px]"
            style={{ color: "oklch(var(--muted-foreground))" }}
          />
          <span
            className="text-xs font-medium"
            style={{
              color: "oklch(var(--muted-foreground))",
              fontFamily: "var(--font-body)",
            }}
          >
            {formatCount(post.shares)}
          </span>
        </button>
      </div>
    </motion.article>
  );
}
