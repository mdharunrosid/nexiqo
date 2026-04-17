import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, M as MessageCircle, A as AnimatePresence, P as Plus, u as useRouter, I as Image, R as Radio } from "./index-BPdZgswX.js";
import { P as Play } from "./play-Brt3FT8g.js";
import { H as Heart } from "./heart-FMpl6SPO.js";
import { S as Share2 } from "./share-2-DOj1T_Gh.js";
import { S as Search } from "./search-D7UPoyDF.js";
import { B as Bell } from "./bell-B5NEYvup.js";
import { V as Video } from "./video-Dd9SSo34.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
];
const Ellipsis = createLucideIcon("ellipsis", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
function formatCount(n) {
  if (n >= 1e3) return `${(n / 1e3).toFixed(n >= 1e4 ? 0 : 1)}k`;
  return String(n);
}
function PostCard({ post, index }) {
  const [liked, setLiked] = reactExports.useState(false);
  const [likeCount, setLikeCount] = reactExports.useState(post.likes);
  function toggleLike() {
    setLiked((prev) => {
      setLikeCount((c) => prev ? c - 1 : c + 1);
      return !prev;
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      "data-ocid": `home.post.item.${index + 1}`,
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.05 + index * 0.07, duration: 0.4 },
      className: "overflow-hidden",
      style: {
        background: "oklch(var(--card))",
        border: "1px solid oklch(var(--border) / 0.25)",
        borderRadius: "var(--radius)",
        boxShadow: "0 4px 24px oklch(0 0 0 / 0.35)",
        marginBottom: "12px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 pt-3.5 pb-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full p-0.5 flex-shrink-0",
                style: {
                  background: "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.7), oklch(0.5 0.2 290 / 0.7))"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: post.avatar,
                    alt: post.username,
                    className: "w-full h-full rounded-full object-cover"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-bold text-sm text-foreground truncate leading-tight",
                  style: { fontFamily: "var(--font-display)" },
                  children: post.handle
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] leading-tight",
                  style: {
                    color: "oklch(var(--muted-foreground))",
                    fontFamily: "var(--font-body)"
                  },
                  children: post.timeAgo
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `home.post.more.${index + 1}`,
              "aria-label": "More options",
              className: "p-1 button-interactive rounded-full",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Ellipsis,
                {
                  className: "w-5 h-5",
                  style: { color: "oklch(var(--muted-foreground))" }
                }
              )
            }
          )
        ] }),
        post.image && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-4 mb-2 overflow-hidden rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.image,
              alt: post.caption,
              className: "w-full object-cover",
              style: {
                aspectRatio: post.type === "reel" ? "9/16" : "16/9",
                maxHeight: post.type === "reel" ? "380px" : void 0
              }
            }
          ),
          post.type === "reel" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(to top, oklch(0 0 0 / 0.7) 0%, transparent 50%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-14 h-14 rounded-full flex items-center justify-center",
                style: {
                  background: "oklch(0 0 0 / 0.5)",
                  border: "2px solid oklch(1 0 0 / 0.6)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-6 h-6 text-white fill-white ml-1" })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "absolute top-2.5 right-2.5 text-[10px] font-bold text-white px-2 py-0.5 rounded-md",
                style: {
                  background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))"
                },
                children: "REEL"
              }
            ),
            post.views && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2.5 left-3 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3 h-3 text-white fill-white" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-white", children: [
                post.views,
                " views"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-3 bottom-10 flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `home.post.float_like.${index + 1}`,
                  onClick: toggleLike,
                  className: "w-9 h-9 rounded-full flex items-center justify-center button-interactive",
                  style: {
                    background: "oklch(0 0 0 / 0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid oklch(1 0 0 / 0.15)"
                  },
                  "aria-label": "Like",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Heart,
                    {
                      className: "w-4 h-4",
                      style: {
                        color: liked ? "oklch(0.65 0.22 15)" : "white",
                        fill: liked ? "oklch(0.65 0.22 15)" : "transparent"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `home.post.float_comment.${index + 1}`,
                  className: "w-9 h-9 rounded-full flex items-center justify-center button-interactive",
                  style: {
                    background: "oklch(0 0 0 / 0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid oklch(1 0 0 / 0.15)"
                  },
                  "aria-label": "Comment",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4 text-white" })
                }
              )
            ] })
          ] }),
          post.type === "image" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-3 bottom-3 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `home.post.float_like.${index + 1}`,
                onClick: toggleLike,
                className: "w-9 h-9 rounded-full flex items-center justify-center button-interactive",
                style: {
                  background: "oklch(0 0 0 / 0.45)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid oklch(1 0 0 / 0.15)"
                },
                "aria-label": "Like",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Heart,
                  {
                    className: "w-4 h-4",
                    style: {
                      color: liked ? "oklch(0.65 0.22 15)" : "oklch(0.65 0.18 240)",
                      fill: liked ? "oklch(0.65 0.22 15)" : "transparent"
                    }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `home.post.float_comment.${index + 1}`,
                className: "w-9 h-9 rounded-full flex items-center justify-center button-interactive",
                style: {
                  background: "oklch(0 0 0 / 0.45)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid oklch(1 0 0 / 0.15)"
                },
                "aria-label": "Comment",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MessageCircle,
                  {
                    className: "w-4 h-4",
                    style: { color: "oklch(var(--muted-foreground))" }
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm leading-relaxed",
            style: {
              color: "oklch(var(--foreground))",
              fontFamily: "var(--font-body)"
            },
            children: post.caption
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-5 px-4 py-2.5",
            style: { borderTop: "1px solid oklch(var(--border) / 0.15)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  type: "button",
                  "data-ocid": `home.post.like.${index + 1}`,
                  onClick: toggleLike,
                  className: "flex items-center gap-1.5",
                  whileTap: { scale: 1.3 },
                  "aria-label": "Like post",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { scale: 0.6 },
                        animate: { scale: 1 },
                        exit: { scale: 0.6 },
                        transition: { duration: 0.15 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Heart,
                          {
                            className: "w-[18px] h-[18px]",
                            style: {
                              color: liked ? "oklch(0.65 0.22 15)" : "oklch(var(--muted-foreground))",
                              fill: liked ? "oklch(0.65 0.22 15)" : "transparent",
                              transition: "color 0.2s, fill 0.2s"
                            }
                          }
                        )
                      },
                      liked ? "liked" : "unliked"
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-medium",
                        style: {
                          color: liked ? "oklch(0.65 0.22 15)" : "oklch(var(--muted-foreground))",
                          fontFamily: "var(--font-body)"
                        },
                        children: formatCount(likeCount)
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `home.post.comment.${index + 1}`,
                  className: "flex items-center gap-1.5 button-interactive",
                  "aria-label": "Comment",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      MessageCircle,
                      {
                        className: "w-[18px] h-[18px]",
                        style: { color: "oklch(var(--muted-foreground))" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-medium",
                        style: {
                          color: "oklch(var(--muted-foreground))",
                          fontFamily: "var(--font-body)"
                        },
                        children: formatCount(post.comments)
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `home.post.share.${index + 1}`,
                  className: "flex items-center gap-1.5 button-interactive",
                  "aria-label": "Share",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Share2,
                      {
                        className: "w-[18px] h-[18px]",
                        style: { color: "oklch(var(--muted-foreground))" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-medium",
                        style: {
                          color: "oklch(var(--muted-foreground))",
                          fontFamily: "var(--font-body)"
                        },
                        children: formatCount(post.shares)
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function StoryAvatar({
  story,
  index
}) {
  const gradientActive = "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290), oklch(0.7 0.2 320))";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.button,
    {
      type: "button",
      "data-ocid": `home.story.item.${index + 1}`,
      className: "flex flex-col items-center gap-1.5 min-w-[68px] flex-shrink-0",
      whileTap: { scale: 0.93 },
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.06 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[62px] h-[62px]", children: [
          !story.isOwn && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 rounded-full",
              style: {
                background: story.seen ? "oklch(0.35 0 0)" : gradientActive,
                padding: "2.5px",
                borderRadius: "9999px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute rounded-full overflow-hidden",
              style: {
                inset: story.isOwn ? 0 : "2.5px",
                background: story.isOwn ? "oklch(0.16 0 0)" : void 0
              },
              children: story.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: story.avatar,
                  alt: story.username,
                  className: "w-full h-full object-cover"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://i.pravatar.cc/150?img=11",
                  alt: "You",
                  className: "w-full h-full object-cover"
                }
              )
            }
          ),
          story.isOwn && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 right-0 w-[18px] h-[18px] rounded-full flex items-center justify-center z-10",
              style: {
                background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                border: "2px solid oklch(0.078 0 0)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-2.5 h-2.5 text-white", strokeWidth: 3.5 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-[10px] max-w-[64px] truncate leading-tight",
            style: {
              color: story.isOwn ? "oklch(0.95 0 0)" : story.seen ? "oklch(0.45 0 0)" : "oklch(0.75 0 0)",
              fontFamily: "var(--font-body)"
            },
            children: story.username
          }
        )
      ]
    }
  );
}
const STORIES = [
  { id: "0", username: "Your Story", avatar: null, isOwn: true },
  { id: "1", username: "alexa.m", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: "2", username: "james_r", avatar: "https://i.pravatar.cc/150?img=3" },
  {
    id: "3",
    username: "luna.vibes",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: "4",
    username: "bolt_dev",
    avatar: "https://i.pravatar.cc/150?img=7",
    seen: true
  },
  { id: "5", username: "priya.k", avatar: "https://i.pravatar.cc/150?img=9" },
  {
    id: "6",
    username: "nova.arts",
    avatar: "https://i.pravatar.cc/150?img=20"
  }
];
const POSTS = [
  {
    id: "1",
    username: "Alexa Monroe",
    handle: "@alexa.m",
    avatar: "https://i.pravatar.cc/150?img=1",
    timeAgo: "2m ago",
    caption: "Neon Tokyo nights 🇯🇵 #travel #citylife #aesthetic",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop",
    likes: 4200,
    comments: 156,
    shares: 98,
    type: "image"
  },
  {
    id: "2",
    username: "Tech Josh",
    handle: "@tech_josh",
    avatar: "https://i.pravatar.cc/150?img=3",
    timeAgo: "15m ago",
    caption: "New gadget of the year just dropped 🤯 Watch the full reel! #tech #innovation #gadgets",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop",
    likes: 1800,
    comments: 89,
    shares: 212,
    type: "reel",
    views: "128K"
  },
  {
    id: "3",
    username: "Luna Vibes",
    handle: "@luna.vibes",
    avatar: "https://i.pravatar.cc/150?img=5",
    timeAgo: "1h ago",
    caption: "Sometimes the best moments are the ones you never planned. Golden hour hits different when you're finally free ✨ Here's to chasing light and good vibes. #lifestyle #goldenHour #mindset",
    likes: 6700,
    comments: 234,
    shares: 411,
    type: "text"
  },
  {
    id: "4",
    username: "Nova Arts",
    handle: "@nova.arts",
    avatar: "https://i.pravatar.cc/150?img=20",
    timeAgo: "3h ago",
    caption: "Digital art meets reality 🎨 My latest piece — took 40 hours but worth it. #digitalart #nft",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    likes: 9100,
    comments: 312,
    shares: 550,
    type: "image"
  },
  {
    id: "5",
    username: "Bolt Dev",
    handle: "@bolt_dev",
    avatar: "https://i.pravatar.cc/150?img=7",
    timeAgo: "5h ago",
    caption: "Shipping a full-stack app in 60 minutes ⚡ Full tutorial reel is live. #coding #webdev #buildinpublic",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    likes: 3300,
    comments: 147,
    shares: 189,
    type: "reel",
    views: "87K"
  },
  {
    id: "6",
    username: "Priya K",
    handle: "@priya.k",
    avatar: "https://i.pravatar.cc/150?img=9",
    timeAgo: "8h ago",
    caption: "Morning routine complete 🌅 Gym → matcha → journaling. Consistency over perfection, always. #wellness #morningroutine #selfcare",
    likes: 2100,
    comments: 63,
    shares: 44,
    type: "text"
  },
  {
    id: "7",
    username: "Marcus Drift",
    handle: "@marcus.drift",
    avatar: "https://i.pravatar.cc/150?img=12",
    timeAgo: "12h ago",
    caption: "Cinematic street photography from Barcelona 📸 The city that never sleeps beautifully. #photography #barcelona #streetphotography",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    likes: 7800,
    comments: 298,
    shares: 622,
    type: "image"
  },
  {
    id: "8",
    username: "Zara Style",
    handle: "@zara.style",
    avatar: "https://i.pravatar.cc/150?img=47",
    timeAgo: "1d ago",
    caption: "GRWM for a night out 🌙 From zero to glam in under 20 mins. Drop a 🔥 if you want the products list!",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop",
    likes: 11400,
    comments: 441,
    shares: 830,
    type: "reel",
    views: "215K"
  }
];
function HomePage() {
  const router = useRouter();
  const [searchFocused, setSearchFocused] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { background: "oklch(var(--background))", paddingBottom: "80px" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "header",
          {
            "data-ocid": "home.header",
            className: "sticky top-0 z-30 flex items-center gap-3 px-4 py-3",
            style: {
              background: "oklch(var(--card) / 0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid oklch(var(--border) / 0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  type: "button",
                  "data-ocid": "home.menu.button",
                  "aria-label": "Open menu",
                  className: "flex-shrink-0 button-interactive",
                  whileTap: { scale: 0.9 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6 text-foreground" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  className: "flex-1 flex items-center gap-2 rounded-full px-4 py-2",
                  animate: { scale: searchFocused ? 1.01 : 1 },
                  style: {
                    background: "oklch(var(--muted) / 0.8)",
                    border: `1px solid ${searchFocused ? "oklch(0.65 0.18 240 / 0.6)" : "oklch(var(--border) / 0.3)"}`,
                    transition: "border-color 0.2s"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Search,
                      {
                        className: "w-4 h-4 flex-shrink-0",
                        style: { color: "oklch(var(--muted-foreground))" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        "data-ocid": "home.search.input",
                        type: "text",
                        placeholder: "Search Nexiqo...",
                        className: "flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none min-w-0",
                        style: { fontFamily: "var(--font-body)" },
                        onFocus: () => setSearchFocused(true),
                        onBlur: () => setSearchFocused(false)
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  type: "button",
                  "data-ocid": "home.notifications.button",
                  onClick: () => router.navigate({ to: "/notifications" }),
                  "aria-label": "Notifications",
                  className: "relative flex-shrink-0 button-interactive",
                  whileTap: { scale: 0.9 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-6 h-6 text-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        initial: { scale: 0 },
                        animate: { scale: 1 },
                        className: "absolute -top-1 -right-1.5 w-[18px] h-[18px] rounded-full text-[9px] font-bold text-white flex items-center justify-center",
                        style: {
                          background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))"
                        },
                        children: "3"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  type: "button",
                  "data-ocid": "home.profile.button",
                  onClick: () => router.navigate({ to: "/profile" }),
                  "aria-label": "My profile",
                  className: "flex-shrink-0 button-interactive",
                  whileTap: { scale: 0.9 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-full p-0.5",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: "https://i.pravatar.cc/150?img=11",
                          alt: "My profile",
                          className: "w-full h-full rounded-full object-cover"
                        }
                      )
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-ocid": "home.stories.section", className: "pt-4 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto px-4 pb-1 scrollbar-hide", children: STORIES.map((story, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StoryAvatar, { story, index: i }, story.id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-px mx-4",
            style: { background: "oklch(var(--border) / 0.2)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            "data-ocid": "home.create.card",
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.15 },
            className: "rounded-2xl px-4 pt-3 pb-3",
            style: {
              background: "oklch(var(--card))",
              border: "1px solid oklch(var(--border) / 0.25)",
              boxShadow: "0 2px 16px oklch(0 0 0 / 0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full p-0.5 flex-shrink-0",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: "https://i.pravatar.cc/150?img=11",
                        alt: "My avatar",
                        className: "w-full h-full rounded-full object-cover"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex-1 rounded-full px-4 py-2 cursor-text",
                    style: {
                      background: "oklch(var(--muted) / 0.6)",
                      border: "1px solid oklch(var(--border) / 0.2)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-sm",
                        style: {
                          color: "oklch(var(--muted-foreground))",
                          fontFamily: "var(--font-body)"
                        },
                        children: "What's on your mind?"
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-around pt-2",
                  style: { borderTop: "1px solid oklch(var(--border) / 0.2)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "home.create.image_button",
                        className: "flex items-center gap-2 px-3 py-1.5 rounded-xl button-interactive",
                        style: { background: "oklch(0.65 0.18 240 / 0.1)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Image,
                            {
                              className: "w-4 h-4",
                              style: { color: "oklch(0.65 0.18 240)" }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-xs font-medium",
                              style: {
                                color: "oklch(0.65 0.18 240)",
                                fontFamily: "var(--font-body)"
                              },
                              children: "Image"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "home.create.reel_button",
                        className: "flex items-center gap-2 px-3 py-1.5 rounded-xl button-interactive",
                        style: { background: "oklch(0.5 0.2 290 / 0.1)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Video,
                            {
                              className: "w-4 h-4",
                              style: { color: "oklch(0.6 0.2 290)" }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-xs font-medium",
                              style: {
                                color: "oklch(0.6 0.2 290)",
                                fontFamily: "var(--font-body)"
                              },
                              children: "Reel"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "home.create.live_button",
                        className: "flex items-center gap-2 px-3 py-1.5 rounded-xl button-interactive",
                        style: { background: "oklch(0.6 0.22 25 / 0.12)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Radio,
                            {
                              className: "w-4 h-4",
                              style: { color: "oklch(0.7 0.22 25)" }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-xs font-medium",
                              style: {
                                color: "oklch(0.7 0.22 25)",
                                fontFamily: "var(--font-body)"
                              },
                              children: "Live"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center px-4 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            "data-ocid": "home.ai_feed.badge",
            initial: { opacity: 0, scale: 0.85 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.3 },
            className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full",
            style: {
              background: "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.15), oklch(0.5 0.2 290 / 0.15))",
              border: "1px solid oklch(0.65 0.18 240 / 0.35)",
              animation: "ai-pulse 3s ease-in-out infinite"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Sparkles,
                {
                  className: "w-3.5 h-3.5",
                  style: { color: "oklch(0.75 0.18 240)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[11px] font-semibold",
                  style: {
                    background: "linear-gradient(90deg, oklch(0.75 0.18 240), oklch(0.7 0.2 290))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "var(--font-display)"
                  },
                  children: "AI Powered Feed ✨"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "home.feed.section", className: "px-4", children: [
          POSTS.map((post, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(PostCard, { post, index }, post.id)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1 },
              className: "flex justify-center py-6",
              "aria-label": "Loading more posts",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: [
                { color: "oklch(0.65 0.18 240)", delay: "0ms" },
                { color: "oklch(0.57 0.19 265)", delay: "150ms" },
                { color: "oklch(0.5 0.2 290)", delay: "300ms" }
              ].map((dot) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-1.5 h-1.5 rounded-full animate-bounce",
                  style: { background: dot.color, animationDelay: dot.delay }
                },
                dot.delay
              )) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes ai-pulse {
          0%, 100% { box-shadow: 0 0 12px oklch(0.65 0.18 240 / 0.2), 0 0 24px oklch(0.5 0.2 290 / 0.1); }
          50% { box-shadow: 0 0 20px oklch(0.65 0.18 240 / 0.45), 0 0 40px oklch(0.5 0.2 290 / 0.25); }
        }
      ` })
      ]
    }
  );
}
export {
  HomePage as default
};
