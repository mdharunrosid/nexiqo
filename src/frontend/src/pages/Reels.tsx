import {
  BookmarkPlus,
  ChevronLeft,
  Heart,
  MessageCircle,
  Music2,
  Share2,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLikeReel, useShareReel } from "../hooks/useReels";

/* ─── Mock data ──────────────────────────────────────────────── */
const MOCK_REELS = [
  {
    id: "1",
    username: "@luna.vibes",
    avatar: "https://i.pravatar.cc/150?img=5",
    caption:
      "Golden hour magic ✨ This view absolutely stole my heart #lifestyle #travel #sunset",
    music: "Blinding Lights — The Weeknd",
    likes: 24300,
    comments: 892,
    shares: 1200,
    gradient:
      "linear-gradient(160deg, #0a0a2e 0%, #1a0533 40%, #0d1a4a 70%, #0a0a1e 100%)",
    accent: "#4f8ef7",
  },
  {
    id: "2",
    username: "@tech_josh",
    avatar: "https://i.pravatar.cc/150?img=3",
    caption:
      "This gadget literally blew my mind 🤯 You NEED to see this in action #tech #gadgets #innovation",
    music: "As It Was — Harry Styles",
    likes: 18700,
    comments: 654,
    shares: 987,
    gradient:
      "linear-gradient(160deg, #1a0533 0%, #2d0a47 40%, #3d0568 70%, #1a0533 100%)",
    accent: "#a855f7",
  },
  {
    id: "3",
    username: "@alexa.m",
    avatar: "https://i.pravatar.cc/150?img=1",
    caption:
      "Tokyo vibes all day every day 🇯🇵 The city that never sleeps #travel #japan #tokyo",
    music: "Midnight Rain — Taylor Swift",
    likes: 41200,
    comments: 2100,
    shares: 3400,
    gradient:
      "linear-gradient(160deg, #003333 0%, #004d4d 40%, #006655 70%, #003333 100%)",
    accent: "#14b8a6",
  },
  {
    id: "4",
    username: "@nova.art",
    avatar: "https://i.pravatar.cc/150?img=9",
    caption:
      "When art meets technology 🎨✨ Creating magic one pixel at a time #art #digital #creative",
    music: "Levitating — Dua Lipa",
    likes: 33500,
    comments: 1450,
    shares: 2200,
    gradient:
      "linear-gradient(160deg, #1a0028 0%, #3d004d 40%, #5c0078 70%, #1a0028 100%)",
    accent: "#e879f9",
  },
  {
    id: "5",
    username: "@forest_kai",
    avatar: "https://i.pravatar.cc/150?img=12",
    caption:
      "Deep in the Amazon discovering things no one has seen 🌿🦋 #nature #adventure #explore",
    music: "Original Sound — @forest_kai",
    likes: 15800,
    comments: 723,
    shares: 540,
    gradient:
      "linear-gradient(160deg, #0a1a0a 0%, #0d2b0d 40%, #143314 70%, #0a1a0a 100%)",
    accent: "#4ade80",
  },
];

/* ─── Helpers ────────────────────────────────────────────────── */
function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

/* ─── Sub-components ─────────────────────────────────────────── */
interface ActionBtnProps {
  icon: React.ElementType;
  count?: number;
  active?: boolean;
  activeColor?: string;
  label?: string;
  ocid: string;
  onClick: () => void;
}

function ActionBtn({
  icon: Icon,
  count,
  active,
  activeColor = "#ef4444",
  label,
  ocid,
  onClick,
}: ActionBtnProps) {
  return (
    <motion.button
      type="button"
      data-ocid={ocid}
      onClick={onClick}
      whileTap={{ scale: 0.85 }}
      className="flex flex-col items-center gap-1.5 min-w-[44px] min-h-[44px] justify-center"
      aria-label={label ?? ocid}
    >
      <motion.div
        animate={active ? { scale: [1, 1.35, 1] } : { scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          background: "oklch(0 0 0 / 0.45)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid oklch(1 0 0 / 0.12)",
          boxShadow: active
            ? `0 0 18px ${activeColor}88`
            : "0 2px 12px oklch(0 0 0 / 0.3)",
        }}
      >
        <Icon
          className="w-5 h-5"
          style={{ color: active ? activeColor : "white" }}
          fill={active ? activeColor : "none"}
          strokeWidth={2.5}
        />
      </motion.div>
      {count !== undefined && (
        <span
          className="text-white text-xs font-semibold drop-shadow-md"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {formatCount(count)}
        </span>
      )}
    </motion.button>
  );
}

/* Marquee ticker for music row */
function MusicTicker({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 overflow-hidden max-w-[220px]">
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
        }}
      >
        <Music2 className="w-3 h-3 text-white" />
      </div>
      <div className="overflow-hidden flex-1">
        <motion.p
          animate={{ x: [0, -200] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatType: "loop",
          }}
          className="whitespace-nowrap text-white text-xs font-medium drop-shadow-md"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}
        </motion.p>
      </div>
    </div>
  );
}

/* Floating particles for visual flair */
const PARTICLES = [
  { id: "p1", size: 3, left: "10%", top: "20%" },
  { id: "p2", size: 4, left: "25%", top: "40%" },
  { id: "p3", size: 5, left: "40%", top: "60%" },
  { id: "p4", size: 3, left: "55%", top: "20%" },
  { id: "p5", size: 4, left: "70%", top: "40%" },
  { id: "p6", size: 5, left: "85%", top: "60%" },
] as const;

function Particles({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {PARTICLES.map((p, i) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: accent,
            left: p.left,
            top: p.top,
            opacity: 0.25,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────────── */
export default function ReelsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedReels, setLikedReels] = useState<Set<string>>(new Set());
  const [savedReels, setSavedReels] = useState<Set<string>>(new Set());
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(
    Object.fromEntries(MOCK_REELS.map((r) => [r.id, r.likes])),
  );
  const [headerVisible, setHeaderVisible] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const likeReel = useLikeReel();
  const shareReel = useShareReel();

  /* Touch handling */
  const touchStartY = useRef<number | null>(null);
  const dragY = useMotionValue(0);
  const opacity = useTransform(dragY, [-80, 0, 80], [0.5, 1, 0.5]);

  const goNext = useCallback(() => {
    if (currentIndex < MOCK_REELS.length - 1) {
      setDirection("up");
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection("down");
      setCurrentIndex((i) => i - 1);
    }
  }, [currentIndex]);

  /* Wheel */
  const wheelDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      if (wheelDebounce.current) return;
      wheelDebounce.current = setTimeout(() => {
        wheelDebounce.current = null;
      }, 500);
      if (e.deltaY > 30) goNext();
      else if (e.deltaY < -30) goPrev();
    },
    [goNext, goPrev],
  );

  /* Touch */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    if (delta > 50) goNext();
    else if (delta < -50) goPrev();
    touchStartY.current = null;
    dragY.set(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const delta = touchStartY.current - e.touches[0].clientY;
    dragY.set(-delta * 0.3);
  };

  /* Header tap toggle */
  const handleTap = () => setHeaderVisible((v) => !v);

  /* Keyboard */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const reel = MOCK_REELS[currentIndex];

  const handleLike = () => {
    const newLiked = new Set(likedReels);
    const wasLiked = newLiked.has(reel.id);
    if (wasLiked) {
      newLiked.delete(reel.id);
      setLikeCounts((prev) => ({ ...prev, [reel.id]: prev[reel.id] - 1 }));
    } else {
      newLiked.add(reel.id);
      setLikeCounts((prev) => ({ ...prev, [reel.id]: prev[reel.id] + 1 }));
      likeReel.mutate(BigInt(reel.id));
    }
    setLikedReels(newLiked);
  };

  const handleSave = () => {
    const newSaved = new Set(savedReels);
    if (newSaved.has(reel.id)) newSaved.delete(reel.id);
    else newSaved.add(reel.id);
    setSavedReels(newSaved);
  };

  const handleShare = () => shareReel.mutate(BigInt(reel.id));

  /* Slide variants */
  const slideVariants = {
    enter: (dir: "up" | "down") => ({
      y: dir === "up" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (dir: "up" | "down") => ({
      y: dir === "up" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section
      data-ocid="reels.page"
      aria-label="Reels player"
      className="relative overflow-hidden select-none"
      style={{ width: "100vw", height: "100dvh", background: "#000" }}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleTap}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleTap();
      }}
    >
      {/* ── Reel stack ── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={reel.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 35,
            mass: 0.9,
          }}
          style={{ opacity, position: "absolute", inset: 0 }}
        >
          {/* Gradient background */}
          <div
            className="absolute inset-0"
            style={{ background: reel.gradient }}
          />

          {/* Animated glow orbs */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 280,
              height: 280,
              background: reel.accent,
              opacity: 0.12,
              filter: "blur(80px)",
              top: "15%",
              left: "50%",
              x: "-50%",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 200,
              height: 200,
              background: reel.accent,
              opacity: 0.08,
              filter: "blur(60px)",
              bottom: "25%",
              right: "-10%",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.14, 0.06] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Floating particles */}
          <Particles accent={reel.accent} />

          {/* Grid overlay texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 40px, oklch(1 0 0 / 0.015) 40px, oklch(1 0 0 / 0.015) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, oklch(1 0 0 / 0.015) 40px, oklch(1 0 0 / 0.015) 41px)",
            }}
          />

          {/* Bottom dark vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, oklch(0 0 0 / 0.88) 0%, oklch(0 0 0 / 0.4) 30%, transparent 60%, oklch(0 0 0 / 0.35) 100%)",
            }}
          />

          {/* ── Right action bar ── */}
          <div
            className="absolute right-4 flex flex-col items-center gap-3 z-20"
            style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 100px)" }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <ActionBtn
              icon={Heart}
              count={likeCounts[reel.id]}
              active={likedReels.has(reel.id)}
              activeColor="#ef4444"
              label="Like"
              ocid={`reels.like.${currentIndex + 1}`}
              onClick={handleLike}
            />
            <ActionBtn
              icon={MessageCircle}
              count={reel.comments}
              label="Comment"
              ocid={`reels.comment.${currentIndex + 1}`}
              onClick={() => {}}
            />
            <ActionBtn
              icon={Share2}
              count={reel.shares}
              label="Share"
              ocid={`reels.share.${currentIndex + 1}`}
              onClick={handleShare}
            />
            <ActionBtn
              icon={BookmarkPlus}
              active={savedReels.has(reel.id)}
              activeColor="#f59e0b"
              label="Save"
              ocid={`reels.save.${currentIndex + 1}`}
              onClick={handleSave}
            />
          </div>

          {/* ── Bottom-left overlay ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="absolute left-4 z-20"
            style={{
              bottom: "calc(env(safe-area-inset-bottom, 0px) + 100px)",
              right: "76px",
            }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {/* User row */}
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                style={{
                  outline: `2px solid ${reel.accent}`,
                  outlineOffset: "2px",
                }}
              >
                <img
                  src={reel.avatar}
                  alt={reel.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-white font-bold text-sm drop-shadow-md"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {reel.username}
              </span>
              <motion.button
                type="button"
                data-ocid={`reels.follow.${currentIndex + 1}`}
                whileTap={{ scale: 0.92 }}
                className="px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/50 transition-smooth hover:bg-white/10 min-h-[28px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Follow
              </motion.button>
            </div>

            {/* Caption — 2 lines max */}
            <p
              className="text-white text-sm leading-relaxed mb-3 drop-shadow-md"
              style={{
                fontFamily: "var(--font-body)",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {reel.caption}
            </p>

            {/* Music ticker */}
            <MusicTicker text={reel.music} />
          </motion.div>

          {/* ── Reel position dots (alternative visual) ── */}
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-20 pointer-events-none"
            style={{ marginTop: "-80px" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Progress bars (top) ── */}
      <div
        className="absolute top-0 left-0 right-0 z-30 flex gap-1 px-3"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 8px)" }}
      >
        {MOCK_REELS.map((r, i) => (
          <div
            key={r.id}
            className="flex-1 h-[3px] rounded-full overflow-hidden"
            style={{ background: "oklch(1 0 0 / 0.2)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  i < currentIndex
                    ? "white"
                    : i === currentIndex
                      ? reel.accent
                      : "transparent",
              }}
              initial={false}
              animate={{
                width:
                  i < currentIndex
                    ? "100%"
                    : i === currentIndex
                      ? "100%"
                      : "0%",
              }}
              transition={
                i === currentIndex
                  ? { duration: 0.4, ease: "easeOut" }
                  : { duration: 0 }
              }
            />
          </div>
        ))}
      </div>

      {/* ── Header (tap to reveal) ── */}
      <AnimatePresence>
        {headerVisible && (
          <motion.div
            key="header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 z-30 flex items-center justify-between px-4"
            style={{ top: "calc(env(safe-area-inset-top, 0px) + 20px)" }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <motion.button
              type="button"
              data-ocid="reels.back_button"
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center min-h-[44px] min-w-[44px]"
              style={{
                background: "oklch(0 0 0 / 0.5)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid oklch(1 0 0 / 0.12)",
              }}
              aria-label="Back"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </motion.button>

            <div
              className="px-4 py-2 rounded-full"
              style={{
                background: "oklch(0 0 0 / 0.5)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid oklch(1 0 0 / 0.12)",
              }}
            >
              <span
                className="text-white font-bold text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Reels
              </span>
            </div>

            <div className="w-10 h-10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Swipe hint on first load ── */}
      <SwipeHint />
    </section>
  );
}

/* Swipe hint — shown once on mount, auto-fades */
function SwipeHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="absolute left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 pointer-events-none"
          style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 110px)" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.2, repeat: 2, ease: "easeInOut" }}
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 19V5M5 12l7-7 7 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <span
            className="text-white/70 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Swipe up
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
