import { useRouter } from "@tanstack/react-router";
import {
  Bell,
  Image,
  Menu,
  Radio,
  Search,
  Sparkles,
  Video,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { PostCard, type PostItem } from "../components/PostCard";
import { StoryAvatar, type StoryItem } from "../components/StoryAvatar";

// ─── Sample Data ──────────────────────────────────────────────────────────────

const STORIES: StoryItem[] = [
  { id: "0", username: "Your Story", avatar: null, isOwn: true },
  { id: "1", username: "alexa.m", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: "2", username: "james_r", avatar: "https://i.pravatar.cc/150?img=3" },
  {
    id: "3",
    username: "luna.vibes",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "4",
    username: "bolt_dev",
    avatar: "https://i.pravatar.cc/150?img=7",
    seen: true,
  },
  { id: "5", username: "priya.k", avatar: "https://i.pravatar.cc/150?img=9" },
  {
    id: "6",
    username: "nova.arts",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
];

const POSTS: PostItem[] = [
  {
    id: "1",
    username: "Alexa Monroe",
    handle: "@alexa.m",
    avatar: "https://i.pravatar.cc/150?img=1",
    timeAgo: "2m ago",
    caption: "Neon Tokyo nights 🇯🇵 #travel #citylife #aesthetic",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop",
    likes: 4200,
    comments: 156,
    shares: 98,
    type: "image",
  },
  {
    id: "2",
    username: "Tech Josh",
    handle: "@tech_josh",
    avatar: "https://i.pravatar.cc/150?img=3",
    timeAgo: "15m ago",
    caption:
      "New gadget of the year just dropped 🤯 Watch the full reel! #tech #innovation #gadgets",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop",
    likes: 1800,
    comments: 89,
    shares: 212,
    type: "reel",
    views: "128K",
  },
  {
    id: "3",
    username: "Luna Vibes",
    handle: "@luna.vibes",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "1h ago",
    caption:
      "Sometimes the best moments are the ones you never planned. Golden hour hits different when you're finally free ✨ Here's to chasing light and good vibes. #lifestyle #goldenHour #mindset",
    likes: 6700,
    comments: 234,
    shares: 411,
    type: "text",
  },
  {
    id: "4",
    username: "Nova Arts",
    handle: "@nova.arts",
    avatar: "https://i.pravatar.cc/150?img=20",
    timeAgo: "3h ago",
    caption:
      "Digital art meets reality 🎨 My latest piece — took 40 hours but worth it. #digitalart #nft",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    likes: 9100,
    comments: 312,
    shares: 550,
    type: "image",
  },
  {
    id: "5",
    username: "Bolt Dev",
    handle: "@bolt_dev",
    avatar: "https://i.pravatar.cc/150?img=7",
    timeAgo: "5h ago",
    caption:
      "Shipping a full-stack app in 60 minutes ⚡ Full tutorial reel is live. #coding #webdev #buildinpublic",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    likes: 3300,
    comments: 147,
    shares: 189,
    type: "reel",
    views: "87K",
  },
  {
    id: "6",
    username: "Priya K",
    handle: "@priya.k",
    avatar: "https://i.pravatar.cc/150?img=9",
    timeAgo: "8h ago",
    caption:
      "Morning routine complete 🌅 Gym → matcha → journaling. Consistency over perfection, always. #wellness #morningroutine #selfcare",
    likes: 2100,
    comments: 63,
    shares: 44,
    type: "text",
  },
  {
    id: "7",
    username: "Marcus Drift",
    handle: "@marcus.drift",
    avatar: "https://i.pravatar.cc/150?img=12",
    timeAgo: "12h ago",
    caption:
      "Cinematic street photography from Barcelona 📸 The city that never sleeps beautifully. #photography #barcelona #streetphotography",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    likes: 7800,
    comments: 298,
    shares: 622,
    type: "image",
  },
  {
    id: "8",
    username: "Zara Style",
    handle: "@zara.style",
    avatar: "https://i.pravatar.cc/150?img=47",
    timeAgo: "1d ago",
    caption:
      "GRWM for a night out 🌙 From zero to glam in under 20 mins. Drop a 🔥 if you want the products list!",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop",
    likes: 11400,
    comments: 441,
    shares: 830,
    type: "reel",
    views: "215K",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HomePage() {
  const router = useRouter();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(var(--background))", paddingBottom: "80px" }}
    >
      {/* ── Top Bar ── */}
      <header
        data-ocid="home.header"
        className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3"
        style={{
          background: "oklch(var(--card) / 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid oklch(var(--border) / 0.25)",
        }}
      >
        <motion.button
          type="button"
          data-ocid="home.menu.button"
          aria-label="Open menu"
          className="flex-shrink-0 button-interactive"
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6 text-foreground" />
        </motion.button>

        <motion.div
          className="flex-1 flex items-center gap-2 rounded-full px-4 py-2"
          animate={{ scale: searchFocused ? 1.01 : 1 }}
          style={{
            background: "oklch(var(--muted) / 0.8)",
            border: `1px solid ${searchFocused ? "oklch(0.65 0.18 240 / 0.6)" : "oklch(var(--border) / 0.3)"}`,
            transition: "border-color 0.2s",
          }}
        >
          <Search
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "oklch(var(--muted-foreground))" }}
          />
          <input
            data-ocid="home.search.input"
            type="text"
            placeholder="Search Nexiqo..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none min-w-0"
            style={{ fontFamily: "var(--font-body)" }}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </motion.div>

        <motion.button
          type="button"
          data-ocid="home.notifications.button"
          onClick={() => router.navigate({ to: "/notifications" })}
          aria-label="Notifications"
          className="relative flex-shrink-0 button-interactive"
          whileTap={{ scale: 0.9 }}
        >
          <Bell className="w-6 h-6 text-foreground" />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1.5 w-[18px] h-[18px] rounded-full text-[9px] font-bold text-white flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
            }}
          >
            3
          </motion.span>
        </motion.button>

        <motion.button
          type="button"
          data-ocid="home.profile.button"
          onClick={() => router.navigate({ to: "/profile" })}
          aria-label="My profile"
          className="flex-shrink-0 button-interactive"
          whileTap={{ scale: 0.9 }}
        >
          <div
            className="w-8 h-8 rounded-full p-0.5"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
            }}
          >
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="My profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.button>
      </header>

      {/* ── Stories ── */}
      <section data-ocid="home.stories.section" className="pt-4 pb-3">
        <div className="flex gap-3 overflow-x-auto px-4 pb-1 scrollbar-hide">
          {STORIES.map((story, i) => (
            <StoryAvatar key={story.id} story={story} index={i} />
          ))}
        </div>
      </section>

      <div
        className="h-px mx-4"
        style={{ background: "oklch(var(--border) / 0.2)" }}
      />

      {/* ── Create Box ── */}
      <div className="px-4 py-4">
        <motion.div
          data-ocid="home.create.card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl px-4 pt-3 pb-3"
          style={{
            background: "oklch(var(--card))",
            border: "1px solid oklch(var(--border) / 0.25)",
            boxShadow: "0 2px 16px oklch(0 0 0 / 0.25)",
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-full p-0.5 flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
              }}
            >
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="My avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div
              className="flex-1 rounded-full px-4 py-2 cursor-text"
              style={{
                background: "oklch(var(--muted) / 0.6)",
                border: "1px solid oklch(var(--border) / 0.2)",
              }}
            >
              <span
                className="text-sm"
                style={{
                  color: "oklch(var(--muted-foreground))",
                  fontFamily: "var(--font-body)",
                }}
              >
                What's on your mind?
              </span>
            </div>
          </div>
          <div
            className="flex items-center justify-around pt-2"
            style={{ borderTop: "1px solid oklch(var(--border) / 0.2)" }}
          >
            <button
              type="button"
              data-ocid="home.create.image_button"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl button-interactive"
              style={{ background: "oklch(0.65 0.18 240 / 0.1)" }}
            >
              <Image
                className="w-4 h-4"
                style={{ color: "oklch(0.65 0.18 240)" }}
              />
              <span
                className="text-xs font-medium"
                style={{
                  color: "oklch(0.65 0.18 240)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Image
              </span>
            </button>
            <button
              type="button"
              data-ocid="home.create.reel_button"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl button-interactive"
              style={{ background: "oklch(0.5 0.2 290 / 0.1)" }}
            >
              <Video
                className="w-4 h-4"
                style={{ color: "oklch(0.6 0.2 290)" }}
              />
              <span
                className="text-xs font-medium"
                style={{
                  color: "oklch(0.6 0.2 290)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Reel
              </span>
            </button>
            <button
              type="button"
              data-ocid="home.create.live_button"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl button-interactive"
              style={{ background: "oklch(0.6 0.22 25 / 0.12)" }}
            >
              <Radio
                className="w-4 h-4"
                style={{ color: "oklch(0.7 0.22 25)" }}
              />
              <span
                className="text-xs font-medium"
                style={{
                  color: "oklch(0.7 0.22 25)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Live
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── AI Feed Indicator ── */}
      <div className="flex justify-center px-4 mb-3">
        <motion.div
          data-ocid="home.ai_feed.badge"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.15), oklch(0.5 0.2 290 / 0.15))",
            border: "1px solid oklch(0.65 0.18 240 / 0.35)",
            animation: "ai-pulse 3s ease-in-out infinite",
          }}
        >
          <Sparkles
            className="w-3.5 h-3.5"
            style={{ color: "oklch(0.75 0.18 240)" }}
          />
          <span
            className="text-[11px] font-semibold"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.75 0.18 240), oklch(0.7 0.2 290))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "var(--font-display)",
            }}
          >
            AI Powered Feed ✨
          </span>
        </motion.div>
      </div>

      {/* ── Post Feed ── */}
      <section data-ocid="home.feed.section" className="px-4">
        {POSTS.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}

        {/* Infinite scroll loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center py-6"
          aria-label="Loading more posts"
        >
          <div className="flex items-center gap-2">
            {[
              { color: "oklch(0.65 0.18 240)", delay: "0ms" },
              { color: "oklch(0.57 0.19 265)", delay: "150ms" },
              { color: "oklch(0.5 0.2 290)", delay: "300ms" },
            ].map((dot) => (
              <div
                key={dot.delay}
                className="w-1.5 h-1.5 rounded-full animate-bounce"
                style={{ background: dot.color, animationDelay: dot.delay }}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes ai-pulse {
          0%, 100% { box-shadow: 0 0 12px oklch(0.65 0.18 240 / 0.2), 0 0 24px oklch(0.5 0.2 290 / 0.1); }
          50% { box-shadow: 0 0 20px oklch(0.65 0.18 240 / 0.45), 0 0 40px oklch(0.5 0.2 290 / 0.25); }
        }
      `}</style>
    </div>
  );
}
