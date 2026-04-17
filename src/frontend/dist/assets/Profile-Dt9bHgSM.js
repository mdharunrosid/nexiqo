import { c as createLucideIcon, u as useRouter, r as reactExports, j as jsxRuntimeExports, C as Camera, m as motion, F as Film, A as AnimatePresence } from "./index-BPdZgswX.js";
import { u as useActor, a as useQuery, c as createActor } from "./backend-D16dRU6l.js";
import { P as Play } from "./play-Brt3FT8g.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
];
const Grid3x3 = createLucideIcon("grid-3x3", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode$1);
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function useMyProfile() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["profile", "me"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMyProfile();
    },
    enabled: !!actor && !isFetching
  });
}
const MOCK_POSTS = [
  {
    id: "p1",
    url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&auto=format&fit=crop"
  },
  {
    id: "p2",
    url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=300&auto=format&fit=crop"
  },
  {
    id: "p3",
    url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&auto=format&fit=crop"
  },
  {
    id: "p4",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&auto=format&fit=crop"
  },
  {
    id: "p5",
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&auto=format&fit=crop"
  },
  {
    id: "p6",
    url: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=300&auto=format&fit=crop"
  },
  {
    id: "p7",
    url: "https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?w=300&auto=format&fit=crop"
  },
  {
    id: "p8",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&auto=format&fit=crop"
  },
  {
    id: "p9",
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&auto=format&fit=crop"
  }
];
const MOCK_REELS = [
  {
    id: "r1",
    url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&auto=format&fit=crop"
  },
  {
    id: "r2",
    url: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&auto=format&fit=crop"
  },
  {
    id: "r3",
    url: "https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=300&auto=format&fit=crop"
  },
  {
    id: "r4",
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&auto=format&fit=crop"
  },
  {
    id: "r5",
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300&auto=format&fit=crop"
  },
  {
    id: "r6",
    url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&auto=format&fit=crop"
  }
];
const STATS = [
  { id: "posts", label: "Posts", value: "127" },
  { id: "followers", label: "Followers", value: "48.2k" },
  { id: "following", label: "Following", value: "312" }
];
const TABS = [
  { id: "posts", Icon: Grid3x3, label: "Posts" },
  { id: "reels", Icon: Film, label: "Reels" },
  { id: "tagged", Icon: Tag, label: "Tagged" }
];
function ProfilePage() {
  const router = useRouter();
  const { data: _profile } = useMyProfile();
  const [activeTab, setActiveTab] = reactExports.useState("posts");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-full h-full",
          style: {
            background: "linear-gradient(135deg, oklch(0.22 0.12 255) 0%, oklch(0.18 0.14 285) 50%, oklch(0.14 0.1 300) 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-30",
          style: {
            backgroundImage: "radial-gradient(circle at 30% 50%, oklch(0.65 0.18 240 / 0.4) 0%, transparent 60%), radial-gradient(circle at 75% 30%, oklch(0.5 0.2 290 / 0.3) 0%, transparent 50%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(to bottom, transparent 50%, oklch(var(--background)) 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "profile.settings.button",
          onClick: () => router.navigate({ to: "/home" }),
          className: "absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center button-interactive",
          style: {
            background: "oklch(0 0 0 / 0.4)",
            backdropFilter: "blur(12px)",
            border: "1px solid oklch(1 0 0 / 0.1)"
          },
          "aria-label": "Settings",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4 text-white" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 -mt-16 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-24 h-24 rounded-full p-0.5",
              style: {
                background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://i.pravatar.cc/150?img=11",
                  alt: "Alex Rivers",
                  className: "w-full h-full rounded-full object-cover",
                  style: { outline: "3px solid oklch(var(--background))" }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "profile.edit_photo.button",
              className: "absolute bottom-1 right-0 w-7 h-7 rounded-full flex items-center justify-center transition-smooth hover:scale-110 active:scale-95",
              style: {
                background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                border: "2px solid oklch(var(--background))"
              },
              "aria-label": "Change photo",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-3.5 h-3.5 text-white" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "profile.edit.button",
            className: "px-6 py-2 rounded-xl text-sm font-semibold transition-smooth button-interactive",
            style: {
              border: "1.5px solid oklch(0.65 0.18 240)",
              color: "oklch(0.65 0.18 240)",
              background: "oklch(0.65 0.18 240 / 0.08)",
              fontFamily: "var(--font-display)"
            },
            children: "Edit Profile"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          className: "text-xl font-bold text-foreground mb-0.5",
          style: { fontFamily: "var(--font-display)" },
          children: "Alex Rivers"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm mb-2",
          style: {
            color: "oklch(var(--muted-foreground))",
            fontFamily: "var(--font-body)"
          },
          children: "@alex.rivers"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          className: "text-sm leading-relaxed mb-5",
          style: {
            color: "oklch(var(--foreground) / 0.85)",
            fontFamily: "var(--font-body)"
          },
          children: [
            "✨ Creating content that inspires.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.65 0.18 240)" }, children: "#filmmaker" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.65 0.18 240)" }, children: "#travel" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.65 0.18 240)" }, children: "#tech" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          "data-ocid": "profile.stats.section",
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "flex items-center justify-around py-4 rounded-2xl mb-5",
          style: {
            background: "oklch(var(--card))",
            border: "1px solid oklch(var(--border) / 0.25)",
            boxShadow: "0 4px 20px oklch(0 0 0 / 0.25)"
          },
          children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center gap-0.5 flex-1",
              style: i > 0 ? { borderLeft: "1px solid oklch(var(--border) / 0.3)" } : void 0,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-lg font-bold text-gradient",
                    style: { fontFamily: "var(--font-display)" },
                    children: stat.value
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs",
                    style: {
                      color: "oklch(var(--muted-foreground))",
                      fontFamily: "var(--font-body)"
                    },
                    children: stat.label
                  }
                )
              ]
            },
            stat.id
          ))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex border-b sticky top-0 z-20",
        style: {
          borderColor: "oklch(var(--border) / 0.25)",
          background: "oklch(var(--background) / 0.95)",
          backdropFilter: "blur(12px)"
        },
        children: TABS.map((tab, i) => {
          const isActive = activeTab === tab.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `profile.tab.${i + 1}`,
              onClick: () => setActiveTab(tab.id),
              className: "flex-1 py-3 flex items-center justify-center gap-1.5 transition-smooth",
              style: {
                borderBottom: isActive ? "2px solid oklch(0.65 0.18 240)" : "2px solid transparent"
              },
              "aria-label": tab.label,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  tab.Icon,
                  {
                    className: "w-4 h-4",
                    style: {
                      color: isActive ? "oklch(0.65 0.18 240)" : "oklch(var(--muted-foreground))"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-semibold",
                    style: {
                      color: isActive ? "oklch(0.65 0.18 240)" : "oklch(var(--muted-foreground))",
                      fontFamily: "var(--font-display)"
                    },
                    children: tab.label
                  }
                )
              ]
            },
            tab.id
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      activeTab === "posts" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          "data-ocid": "profile.posts.grid",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "grid grid-cols-3 gap-0.5 p-0.5",
          children: MOCK_POSTS.map((post, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              type: "button",
              "data-ocid": `profile.post.item.${index + 1}`,
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: index * 0.04 },
              className: "relative aspect-square overflow-hidden button-interactive",
              "aria-label": `Post ${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: post.url,
                  alt: `Post ${index + 1}`,
                  className: "w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                }
              )
            },
            post.id
          ))
        },
        "posts"
      ),
      activeTab === "reels" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          "data-ocid": "profile.reels.grid",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "grid grid-cols-3 gap-0.5 p-0.5",
          children: MOCK_REELS.map((reel, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              "data-ocid": `profile.reel.item.${index + 1}`,
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: index * 0.04 },
              className: "relative aspect-square overflow-hidden button-interactive group",
              "aria-label": `Reel ${index + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: reel.url,
                    alt: `Reel ${index + 1}`,
                    className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 flex items-center justify-center transition-opacity duration-200",
                    style: { background: "oklch(0 0 0 / 0.25)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-9 h-9 rounded-full flex items-center justify-center",
                        style: {
                          background: "oklch(1 0 0 / 0.2)",
                          backdropFilter: "blur(4px)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 text-white fill-white" })
                      }
                    )
                  }
                )
              ]
            },
            reel.id
          ))
        },
        "reels"
      ),
      activeTab === "tagged" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          "data-ocid": "profile.tagged.empty_state",
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          transition: { duration: 0.25 },
          className: "flex flex-col items-center justify-center px-8 py-20 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-20 h-20 rounded-full flex items-center justify-center mb-5",
                style: {
                  background: "oklch(0.65 0.18 240 / 0.1)",
                  border: "1px solid oklch(0.65 0.18 240 / 0.2)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tag,
                  {
                    className: "w-8 h-8",
                    style: { color: "oklch(0.65 0.18 240 / 0.6)" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-base font-bold text-foreground mb-2",
                style: { fontFamily: "var(--font-display)" },
                children: "No tagged posts yet"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm leading-relaxed",
                style: {
                  color: "oklch(var(--muted-foreground))",
                  fontFamily: "var(--font-body)"
                },
                children: "When people tag you in posts, they'll appear here."
              }
            )
          ]
        },
        "tagged"
      )
    ] })
  ] });
}
export {
  ProfilePage as default
};
