import { c as createLucideIcon, i as interpolate, a as useConstant, r as reactExports, b as MotionConfigContext, d as motionValue, e as useIsomorphicLayoutEffect, f as cancelFrame, g as frame, h as collectMotionValues, k as useQueryClient, j as jsxRuntimeExports, A as AnimatePresence, m as motion, M as MessageCircle } from "./index-BPdZgswX.js";
import { u as useActor, c as createActor } from "./backend-D16dRU6l.js";
import { u as useMutation } from "./useMutation-DpU7ySII.js";
import { H as Heart } from "./heart-FMpl6SPO.js";
import { S as Share2 } from "./share-2-DOj1T_Gh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
  ["line", { x1: "12", x2: "12", y1: "7", y2: "13", key: "1cppfj" }],
  ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]
];
const BookmarkPlus = createLucideIcon("bookmark-plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
];
const Music2 = createLucideIcon("music-2", __iconNode);
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, options);
  return useImmediate ? interpolator(inputValue) : interpolator;
}
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = reactExports.useContext(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = reactExports.useState(initial);
    reactExports.useEffect(() => value.on("change", setLatest), []);
  }
  return value;
}
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const isOutputMap = outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
  if (isOutputMap) {
    return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
  }
  const outputRange = outputRangeOrMap;
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
  const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
  if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && (options == null ? void 0 : options.clamp) !== false) {
    result.accelerate = {
      ...inputAccelerate,
      times: inputRangeOrTransformer,
      keyframes: outputRangeOrMap,
      isTransformed: true,
      ...{}
    };
  }
  return result;
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
  const keys = useConstant(() => Object.keys(outputMap));
  const output = useConstant(() => ({}));
  for (const key of keys) {
    output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
  }
  return output;
}
function useLikeReel() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (reelId) => {
      if (!actor) throw new Error("Not connected");
      return actor.likeReel(reelId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reels"] });
    }
  });
}
function useShareReel() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (reelId) => {
      if (!actor) throw new Error("Not connected");
      return actor.shareReel(reelId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reels"] });
    }
  });
}
const MOCK_REELS = [
  {
    id: "1",
    username: "@luna.vibes",
    avatar: "https://i.pravatar.cc/150?img=5",
    caption: "Golden hour magic ✨ This view absolutely stole my heart #lifestyle #travel #sunset",
    music: "Blinding Lights — The Weeknd",
    likes: 24300,
    comments: 892,
    shares: 1200,
    gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a0533 40%, #0d1a4a 70%, #0a0a1e 100%)",
    accent: "#4f8ef7"
  },
  {
    id: "2",
    username: "@tech_josh",
    avatar: "https://i.pravatar.cc/150?img=3",
    caption: "This gadget literally blew my mind 🤯 You NEED to see this in action #tech #gadgets #innovation",
    music: "As It Was — Harry Styles",
    likes: 18700,
    comments: 654,
    shares: 987,
    gradient: "linear-gradient(160deg, #1a0533 0%, #2d0a47 40%, #3d0568 70%, #1a0533 100%)",
    accent: "#a855f7"
  },
  {
    id: "3",
    username: "@alexa.m",
    avatar: "https://i.pravatar.cc/150?img=1",
    caption: "Tokyo vibes all day every day 🇯🇵 The city that never sleeps #travel #japan #tokyo",
    music: "Midnight Rain — Taylor Swift",
    likes: 41200,
    comments: 2100,
    shares: 3400,
    gradient: "linear-gradient(160deg, #003333 0%, #004d4d 40%, #006655 70%, #003333 100%)",
    accent: "#14b8a6"
  },
  {
    id: "4",
    username: "@nova.art",
    avatar: "https://i.pravatar.cc/150?img=9",
    caption: "When art meets technology 🎨✨ Creating magic one pixel at a time #art #digital #creative",
    music: "Levitating — Dua Lipa",
    likes: 33500,
    comments: 1450,
    shares: 2200,
    gradient: "linear-gradient(160deg, #1a0028 0%, #3d004d 40%, #5c0078 70%, #1a0028 100%)",
    accent: "#e879f9"
  },
  {
    id: "5",
    username: "@forest_kai",
    avatar: "https://i.pravatar.cc/150?img=12",
    caption: "Deep in the Amazon discovering things no one has seen 🌿🦋 #nature #adventure #explore",
    music: "Original Sound — @forest_kai",
    likes: 15800,
    comments: 723,
    shares: 540,
    gradient: "linear-gradient(160deg, #0a1a0a 0%, #0d2b0d 40%, #143314 70%, #0a1a0a 100%)",
    accent: "#4ade80"
  }
];
function formatCount(n) {
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}k`;
  return String(n);
}
function ActionBtn({
  icon: Icon,
  count,
  active,
  activeColor = "#ef4444",
  label,
  ocid,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      "data-ocid": ocid,
      onClick,
      whileTap: { scale: 0.85 },
      className: "flex flex-col items-center gap-1.5 min-w-[44px] min-h-[44px] justify-center",
      "aria-label": label ?? ocid,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: active ? { scale: [1, 1.35, 1] } : { scale: 1 },
            transition: { duration: 0.3, ease: "easeOut" },
            className: "w-12 h-12 rounded-full flex items-center justify-center",
            style: {
              background: "oklch(0 0 0 / 0.45)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid oklch(1 0 0 / 0.12)",
              boxShadow: active ? `0 0 18px ${activeColor}88` : "0 2px 12px oklch(0 0 0 / 0.3)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Icon,
              {
                className: "w-5 h-5",
                style: { color: active ? activeColor : "white" },
                fill: active ? activeColor : "none",
                strokeWidth: 2.5
              }
            )
          }
        ),
        count !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-white text-xs font-semibold drop-shadow-md",
            style: { fontFamily: "var(--font-body)" },
            children: formatCount(count)
          }
        )
      ]
    }
  );
}
function MusicTicker({ text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 overflow-hidden max-w-[220px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0",
        style: {
          background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "w-3 h-3 text-white" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.p,
      {
        animate: { x: [0, -200] },
        transition: {
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop"
        },
        className: "whitespace-nowrap text-white text-xs font-medium drop-shadow-md",
        style: { fontFamily: "var(--font-body)" },
        children: [
          text,
          "     ",
          text
        ]
      }
    ) })
  ] });
}
const PARTICLES = [
  { id: "p1", size: 3, left: "10%", top: "20%" },
  { id: "p2", size: 4, left: "25%", top: "40%" },
  { id: "p3", size: 5, left: "40%", top: "60%" },
  { id: "p4", size: 3, left: "55%", top: "20%" },
  { id: "p5", size: 4, left: "70%", top: "40%" },
  { id: "p6", size: 5, left: "85%", top: "60%" }
];
function Particles({ accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: PARTICLES.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "absolute rounded-full",
      style: {
        width: p.size,
        height: p.size,
        background: accent,
        left: p.left,
        top: p.top,
        opacity: 0.25
      },
      animate: {
        y: [0, -30, 0],
        opacity: [0.15, 0.4, 0.15]
      },
      transition: {
        duration: 3 + i * 0.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: i * 0.4
      }
    },
    p.id
  )) });
}
function ReelsPage() {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [likedReels, setLikedReels] = reactExports.useState(/* @__PURE__ */ new Set());
  const [savedReels, setSavedReels] = reactExports.useState(/* @__PURE__ */ new Set());
  const [likeCounts, setLikeCounts] = reactExports.useState(
    Object.fromEntries(MOCK_REELS.map((r) => [r.id, r.likes]))
  );
  const [headerVisible, setHeaderVisible] = reactExports.useState(false);
  const [direction, setDirection] = reactExports.useState("up");
  const likeReel = useLikeReel();
  const shareReel = useShareReel();
  const touchStartY = reactExports.useRef(null);
  const dragY = useMotionValue(0);
  const opacity = useTransform(dragY, [-80, 0, 80], [0.5, 1, 0.5]);
  const goNext = reactExports.useCallback(() => {
    if (currentIndex < MOCK_REELS.length - 1) {
      setDirection("up");
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex]);
  const goPrev = reactExports.useCallback(() => {
    if (currentIndex > 0) {
      setDirection("down");
      setCurrentIndex((i) => i - 1);
    }
  }, [currentIndex]);
  const wheelDebounce = reactExports.useRef(null);
  const handleWheel = reactExports.useCallback(
    (e) => {
      e.preventDefault();
      if (wheelDebounce.current) return;
      wheelDebounce.current = setTimeout(() => {
        wheelDebounce.current = null;
      }, 500);
      if (e.deltaY > 30) goNext();
      else if (e.deltaY < -30) goPrev();
    },
    [goNext, goPrev]
  );
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e) => {
    if (touchStartY.current === null) return;
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    if (delta > 50) goNext();
    else if (delta < -50) goPrev();
    touchStartY.current = null;
    dragY.set(0);
  };
  const handleTouchMove = (e) => {
    if (touchStartY.current === null) return;
    const delta = touchStartY.current - e.touches[0].clientY;
    dragY.set(-delta * 0.3);
  };
  const handleTap = () => setHeaderVisible((v) => !v);
  reactExports.useEffect(() => {
    const onKey = (e) => {
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
  const slideVariants = {
    enter: (dir) => ({
      y: dir === "up" ? "100%" : "-100%",
      opacity: 0
    }),
    center: { y: 0, opacity: 1 },
    exit: (dir) => ({
      y: dir === "up" ? "-100%" : "100%",
      opacity: 0
    })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "reels.page",
      "aria-label": "Reels player",
      className: "relative overflow-hidden select-none",
      style: { width: "100vw", height: "100dvh", background: "#000" },
      onWheel: handleWheel,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onClick: handleTap,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") handleTap();
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", custom: direction, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            custom: direction,
            variants: slideVariants,
            initial: "enter",
            animate: "center",
            exit: "exit",
            transition: {
              type: "spring",
              stiffness: 320,
              damping: 35,
              mass: 0.9
            },
            style: { opacity, position: "absolute", inset: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0",
                  style: { background: reel.gradient }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute rounded-full pointer-events-none",
                  style: {
                    width: 280,
                    height: 280,
                    background: reel.accent,
                    opacity: 0.12,
                    filter: "blur(80px)",
                    top: "15%",
                    left: "50%",
                    x: "-50%"
                  },
                  animate: { scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] },
                  transition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "absolute rounded-full pointer-events-none",
                  style: {
                    width: 200,
                    height: 200,
                    background: reel.accent,
                    opacity: 0.08,
                    filter: "blur(60px)",
                    bottom: "25%",
                    right: "-10%"
                  },
                  animate: { scale: [1, 1.15, 1], opacity: [0.06, 0.14, 0.06] },
                  transition: {
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { accent: reel.accent }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, oklch(1 0 0 / 0.015) 40px, oklch(1 0 0 / 0.015) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, oklch(1 0 0 / 0.015) 40px, oklch(1 0 0 / 0.015) 41px)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 pointer-events-none",
                  style: {
                    background: "linear-gradient(to top, oklch(0 0 0 / 0.88) 0%, oklch(0 0 0 / 0.4) 30%, transparent 60%, oklch(0 0 0 / 0.35) 100%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "absolute right-4 flex flex-col items-center gap-3 z-20",
                  style: { bottom: "calc(env(safe-area-inset-bottom, 0px) + 100px)" },
                  onClick: (e) => e.stopPropagation(),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ActionBtn,
                      {
                        icon: Heart,
                        count: likeCounts[reel.id],
                        active: likedReels.has(reel.id),
                        activeColor: "#ef4444",
                        label: "Like",
                        ocid: `reels.like.${currentIndex + 1}`,
                        onClick: handleLike
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ActionBtn,
                      {
                        icon: MessageCircle,
                        count: reel.comments,
                        label: "Comment",
                        ocid: `reels.comment.${currentIndex + 1}`,
                        onClick: () => {
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ActionBtn,
                      {
                        icon: Share2,
                        count: reel.shares,
                        label: "Share",
                        ocid: `reels.share.${currentIndex + 1}`,
                        onClick: handleShare
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ActionBtn,
                      {
                        icon: BookmarkPlus,
                        active: savedReels.has(reel.id),
                        activeColor: "#f59e0b",
                        label: "Save",
                        ocid: `reels.save.${currentIndex + 1}`,
                        onClick: handleSave
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.15, duration: 0.4 },
                  className: "absolute left-4 z-20",
                  style: {
                    bottom: "calc(env(safe-area-inset-bottom, 0px) + 100px)",
                    right: "76px"
                  },
                  onClick: (e) => e.stopPropagation(),
                  onKeyDown: (e) => e.stopPropagation(),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-10 h-10 rounded-full overflow-hidden flex-shrink-0",
                          style: {
                            outline: `2px solid ${reel.accent}`,
                            outlineOffset: "2px"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: reel.avatar,
                              alt: reel.username,
                              className: "w-full h-full object-cover"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-white font-bold text-sm drop-shadow-md",
                          style: { fontFamily: "var(--font-display)" },
                          children: reel.username
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.button,
                        {
                          type: "button",
                          "data-ocid": `reels.follow.${currentIndex + 1}`,
                          whileTap: { scale: 0.92 },
                          className: "px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/50 transition-smooth hover:bg-white/10 min-h-[28px]",
                          style: { fontFamily: "var(--font-display)" },
                          children: "Follow"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-white text-sm leading-relaxed mb-3 drop-shadow-md",
                        style: {
                          fontFamily: "var(--font-body)",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        },
                        children: reel.caption
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MusicTicker, { text: reel.music })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-20 pointer-events-none",
                  style: { marginTop: "-80px" }
                }
              )
            ]
          },
          reel.id
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 z-30 flex gap-1 px-3",
            style: { paddingTop: "calc(env(safe-area-inset-top, 0px) + 8px)" },
            children: MOCK_REELS.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-1 h-[3px] rounded-full overflow-hidden",
                style: { background: "oklch(1 0 0 / 0.2)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "h-full rounded-full",
                    style: {
                      background: i < currentIndex ? "white" : i === currentIndex ? reel.accent : "transparent"
                    },
                    initial: false,
                    animate: {
                      width: i < currentIndex ? "100%" : i === currentIndex ? "100%" : "0%"
                    },
                    transition: i === currentIndex ? { duration: 0.4, ease: "easeOut" } : { duration: 0 }
                  }
                )
              },
              r.id
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: headerVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.2 },
            className: "absolute left-0 right-0 z-30 flex items-center justify-between px-4",
            style: { top: "calc(env(safe-area-inset-top, 0px) + 20px)" },
            onClick: (e) => e.stopPropagation(),
            onKeyDown: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  type: "button",
                  "data-ocid": "reels.back_button",
                  whileTap: { scale: 0.9 },
                  className: "w-10 h-10 rounded-full flex items-center justify-center min-h-[44px] min-w-[44px]",
                  style: {
                    background: "oklch(0 0 0 / 0.5)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid oklch(1 0 0 / 0.12)"
                  },
                  "aria-label": "Back",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-4 py-2 rounded-full",
                  style: {
                    background: "oklch(0 0 0 / 0.5)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid oklch(1 0 0 / 0.12)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-white font-bold text-sm",
                      style: { fontFamily: "var(--font-display)" },
                      children: "Reels"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10" })
            ]
          },
          "header"
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SwipeHint, {})
      ]
    }
  );
}
function SwipeHint() {
  const [visible, setVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.4, delay: 0.6 },
      className: "absolute left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 pointer-events-none",
      style: { bottom: "calc(env(safe-area-inset-bottom, 0px) + 110px)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { y: [0, -8, 0] },
            transition: { duration: 1.2, repeat: 2, ease: "easeInOut" },
            className: "w-8 h-8 flex items-center justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                className: "w-6 h-6",
                fill: "none",
                "aria-hidden": "true",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: "M12 19V5M5 12l7-7 7 7",
                    stroke: "white",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-white/70 text-xs",
            style: { fontFamily: "var(--font-body)" },
            children: "Swipe up"
          }
        )
      ]
    }
  ) });
}
export {
  ReelsPage as default
};
