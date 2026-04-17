import { c as createLucideIcon, k as useQueryClient, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion, U as Users, X } from "./index-BPdZgswX.js";
import { u as useActor, c as createActor } from "./backend-D16dRU6l.js";
import { u as useMutation } from "./useMutation-DpU7ySII.js";
import { S as Search } from "./search-D7UPoyDF.js";
import { C as Check, U as UserPlus } from "./user-plus-DlV9x7-t.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserMinus = createLucideIcon("user-minus", __iconNode);
function useFollow() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (targetId) => {
      if (!actor) throw new Error("Not connected");
      return actor.follow(targetId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    }
  });
}
function useUnfollow() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (targetId) => {
      if (!actor) throw new Error("Not connected");
      return actor.unfollow(targetId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    }
  });
}
const FRIEND_REQUESTS = [
  {
    id: "req-1",
    username: "kaito.flux",
    displayName: "Kaito Flux",
    avatarFrom: "oklch(0.65 0.18 240)",
    avatarTo: "oklch(0.50 0.20 290)",
    avatarInitial: "K",
    mutual: 14
  },
  {
    id: "req-2",
    username: "aya.bloom",
    displayName: "Aya Bloom",
    avatarFrom: "oklch(0.62 0.22 350)",
    avatarTo: "oklch(0.70 0.18 50)",
    avatarInitial: "A",
    mutual: 8
  }
];
const SUGGESTIONS = [
  {
    id: "s-1",
    username: "nova.creates",
    displayName: "Nova Creates",
    avatarFrom: "oklch(0.75 0.20 180)",
    avatarTo: "oklch(0.65 0.18 240)",
    avatarInitial: "N",
    mutual: 12
  },
  {
    id: "s-2",
    username: "drift.skate",
    displayName: "Drift Skate",
    avatarFrom: "oklch(0.72 0.18 55)",
    avatarTo: "oklch(0.55 0.22 30)",
    avatarInitial: "D",
    mutual: 7
  },
  {
    id: "s-3",
    username: "zen.vibes",
    displayName: "Zen Vibes",
    avatarFrom: "oklch(0.70 0.18 145)",
    avatarTo: "oklch(0.60 0.16 180)",
    avatarInitial: "Z",
    mutual: 23
  },
  {
    id: "s-4",
    username: "pixel_jay",
    displayName: "Pixel Jay",
    avatarFrom: "oklch(0.55 0.22 300)",
    avatarTo: "oklch(0.62 0.22 350)",
    avatarInitial: "P",
    mutual: 5
  },
  {
    id: "s-5",
    username: "solar_dev",
    displayName: "Solar Dev",
    avatarFrom: "oklch(0.82 0.18 90)",
    avatarTo: "oklch(0.72 0.18 55)",
    avatarInitial: "S",
    mutual: 18
  },
  {
    id: "s-6",
    username: "mira_art",
    displayName: "Mira Art",
    avatarFrom: "oklch(0.58 0.18 265)",
    avatarTo: "oklch(0.75 0.20 180)",
    avatarInitial: "M",
    mutual: 31
  },
  {
    id: "s-7",
    username: "vex.motion",
    displayName: "Vex Motion",
    avatarFrom: "oklch(0.65 0.22 10)",
    avatarTo: "oklch(0.50 0.20 290)",
    avatarInitial: "V",
    mutual: 9
  }
];
const FOLLOWING = [
  {
    id: "f-1",
    username: "alexa.m",
    displayName: "Alexa Monroe",
    avatarFrom: "oklch(0.65 0.22 350)",
    avatarTo: "oklch(0.55 0.22 20)",
    avatarInitial: "A",
    lastActive: "2m ago"
  },
  {
    id: "f-2",
    username: "james_r",
    displayName: "James Rivera",
    avatarFrom: "oklch(0.65 0.18 240)",
    avatarTo: "oklch(0.50 0.20 270)",
    avatarInitial: "J",
    lastActive: "1h ago"
  },
  {
    id: "f-3",
    username: "luna.vibes",
    displayName: "Luna Vibes",
    avatarFrom: "oklch(0.58 0.20 290)",
    avatarTo: "oklch(0.50 0.20 290)",
    avatarInitial: "L",
    lastActive: "Online"
  },
  {
    id: "f-4",
    username: "tech_josh",
    displayName: "Tech Josh",
    avatarFrom: "oklch(0.75 0.20 180)",
    avatarTo: "oklch(0.70 0.18 210)",
    avatarInitial: "T",
    lastActive: "3h ago"
  }
];
const FOLLOWERS = [
  {
    id: "fl-1",
    username: "sky.runner",
    displayName: "Sky Runner",
    avatarFrom: "oklch(0.70 0.18 220)",
    avatarTo: "oklch(0.65 0.18 240)",
    avatarInitial: "S",
    mutual: 6
  },
  {
    id: "fl-2",
    username: "neon_kira",
    displayName: "Neon Kira",
    avatarFrom: "oklch(0.65 0.24 320)",
    avatarTo: "oklch(0.62 0.22 350)",
    avatarInitial: "N",
    mutual: 19
  },
  {
    id: "fl-3",
    username: "codec.rex",
    displayName: "Codec Rex",
    avatarFrom: "oklch(0.72 0.18 150)",
    avatarTo: "oklch(0.65 0.18 145)",
    avatarInitial: "C",
    mutual: 3
  }
];
function AvatarGradient({
  from,
  to,
  initial,
  size = "md"
}) {
  const sizes = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-14 h-14 text-lg"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `${sizes[size]} rounded-full flex items-center justify-center font-bold text-white flex-shrink-0`,
      style: {
        background: `linear-gradient(135deg, ${from}, ${to})`,
        fontFamily: "var(--font-display)"
      },
      children: initial
    }
  );
}
function OnlineDot({ status }) {
  const isOnline = status === "Online";
  if (!status) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2",
      style: {
        background: isOnline ? "oklch(0.65 0.18 145)" : "oklch(0.55 0 0)",
        borderColor: "oklch(var(--card))"
      }
    }
  );
}
function RequestCard({
  person,
  index,
  onAccept,
  onDecline
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `friends.request.item.${index + 1}`,
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, x: 60, scale: 0.9 },
      transition: { delay: index * 0.08 },
      className: "flex items-center gap-3 p-3 rounded-2xl",
      style: {
        background: "linear-gradient(135deg, oklch(var(--card)), oklch(0.14 0.02 250))",
        border: "1px solid oklch(0.65 0.18 240 / 0.25)",
        boxShadow: "0 2px 16px oklch(0.65 0.18 240 / 0.1)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          AvatarGradient,
          {
            from: person.avatarFrom,
            to: person.avatarTo,
            initial: person.avatarInitial,
            size: "md"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-bold text-sm text-foreground truncate",
              style: { fontFamily: "var(--font-display)" },
              children: person.displayName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-xs truncate",
              style: {
                color: "oklch(var(--muted-foreground))",
                fontFamily: "var(--font-body)"
              },
              children: [
                "@",
                person.username,
                person.mutual ? ` · ${person.mutual} mutual` : ""
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `friends.request.accept.${index + 1}`,
              onClick: () => onAccept(person.id),
              className: "w-9 h-9 rounded-xl flex items-center justify-center button-interactive",
              style: {
                background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                boxShadow: "0 2px 8px oklch(0.65 0.18 240 / 0.4)"
              },
              "aria-label": "Accept request",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `friends.request.decline.${index + 1}`,
              onClick: () => onDecline(person.id),
              className: "w-9 h-9 rounded-xl flex items-center justify-center button-interactive",
              style: {
                background: "oklch(var(--muted) / 0.6)",
                border: "1px solid oklch(var(--border) / 0.3)"
              },
              "aria-label": "Decline request",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-muted-foreground" })
            }
          )
        ] })
      ]
    },
    person.id
  );
}
function SuggestionCard({
  person,
  index,
  followed,
  onFollow
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `friends.suggestion.item.${index + 1}`,
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.06 },
      className: "flex items-center gap-3 p-3 rounded-2xl card-elevated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AvatarGradient,
          {
            from: person.avatarFrom,
            to: person.avatarTo,
            initial: person.avatarInitial,
            size: "md"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-bold text-sm text-foreground truncate",
              style: { fontFamily: "var(--font-display)" },
              children: person.displayName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-xs truncate",
              style: {
                color: "oklch(var(--muted-foreground))",
                fontFamily: "var(--font-body)"
              },
              children: [
                "@",
                person.username,
                " · ",
                person.mutual,
                " mutual friends"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `friends.suggestion.follow.${index + 1}`,
            onClick: () => onFollow(person.id),
            className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-smooth button-interactive flex-shrink-0",
            style: followed ? {
              background: "oklch(var(--muted))",
              border: "1px solid oklch(0.65 0.18 240 / 0.4)",
              color: "oklch(0.65 0.18 240)"
            } : {
              background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
              boxShadow: "0 2px 8px oklch(0.65 0.18 240 / 0.35)",
              color: "white"
            },
            children: followed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-3.5 h-3.5" }),
              "Following"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-3.5 h-3.5" }),
              "Follow"
            ] })
          }
        )
      ]
    },
    person.id
  );
}
function FollowingCard({
  person,
  index,
  onUnfollow
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `friends.following.item.${index + 1}`,
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.06 },
      className: "flex items-center gap-3 p-3 rounded-2xl card-elevated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AvatarGradient,
            {
              from: person.avatarFrom,
              to: person.avatarTo,
              initial: person.avatarInitial,
              size: "md"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OnlineDot, { status: person.lastActive })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-bold text-sm text-foreground truncate",
              style: { fontFamily: "var(--font-display)" },
              children: person.displayName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-xs truncate",
              style: {
                color: "oklch(var(--muted-foreground))",
                fontFamily: "var(--font-body)"
              },
              children: [
                "@",
                person.username,
                person.lastActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "ml-1",
                    style: {
                      color: person.lastActive === "Online" ? "oklch(0.65 0.18 145)" : "inherit"
                    },
                    children: [
                      "· ",
                      person.lastActive
                    ]
                  }
                ) : null
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `friends.following.unfollow.${index + 1}`,
            onClick: () => onUnfollow(person.id),
            className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-smooth button-interactive flex-shrink-0",
            style: {
              background: "oklch(var(--muted) / 0.5)",
              border: "1px solid oklch(var(--border) / 0.4)",
              color: "oklch(var(--muted-foreground))"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { className: "w-3.5 h-3.5" }),
              "Unfollow"
            ]
          }
        )
      ]
    },
    person.id
  );
}
function FollowerCard({
  person,
  index,
  followed,
  onFollow,
  onRemove
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `friends.follower.item.${index + 1}`,
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.06 },
      className: "flex items-center gap-3 p-3 rounded-2xl card-elevated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AvatarGradient,
          {
            from: person.avatarFrom,
            to: person.avatarTo,
            initial: person.avatarInitial,
            size: "md"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-bold text-sm text-foreground truncate",
              style: { fontFamily: "var(--font-display)" },
              children: person.displayName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-xs truncate",
              style: {
                color: "oklch(var(--muted-foreground))",
                fontFamily: "var(--font-body)"
              },
              children: [
                "@",
                person.username,
                person.mutual ? ` · ${person.mutual} mutual` : ""
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `friends.follower.follow_back.${index + 1}`,
              onClick: () => onFollow(person.id),
              className: "flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-smooth button-interactive",
              style: followed ? {
                background: "oklch(var(--muted))",
                border: "1px solid oklch(0.65 0.18 240 / 0.4)",
                color: "oklch(0.65 0.18 240)"
              } : {
                background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                boxShadow: "0 2px 8px oklch(0.65 0.18 240 / 0.3)",
                color: "white"
              },
              children: [
                followed ? /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-3.5 h-3.5" }),
                followed ? "Following" : "Follow back"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `friends.follower.remove.${index + 1}`,
              onClick: () => onRemove(person.id),
              className: "w-8 h-8 rounded-xl flex items-center justify-center transition-smooth button-interactive",
              style: {
                background: "oklch(var(--muted) / 0.4)",
                border: "1px solid oklch(var(--border) / 0.3)"
              },
              "aria-label": "Remove follower",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5 text-muted-foreground" })
            }
          )
        ] })
      ]
    },
    person.id
  );
}
function EmptyState({
  icon: Icon,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": "friends.empty_state",
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      className: "flex flex-col items-center justify-center py-16 px-6 text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-16 h-16 rounded-2xl flex items-center justify-center mb-4",
            style: {
              background: "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.15), oklch(0.5 0.2 290 / 0.15))",
              border: "1px solid oklch(0.65 0.18 240 / 0.2)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-8 h-8", style: { color: "oklch(0.65 0.18 240)" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-bold text-foreground mb-1",
            style: { fontFamily: "var(--font-display)" },
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: subtitle })
      ]
    }
  );
}
const TABS = [
  { id: "suggestions", label: "Suggestions" },
  { id: "following", label: "Following" },
  { id: "followers", label: "Followers" }
];
function FriendsPage() {
  const follow = useFollow();
  const unfollow = useUnfollow();
  const [activeTab, setActiveTab] = reactExports.useState("suggestions");
  const [followedIds, setFollowedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [requests, setRequests] = reactExports.useState(FRIEND_REQUESTS);
  const [following, setFollowing] = reactExports.useState(FOLLOWING);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [showSearch, setShowSearch] = reactExports.useState(false);
  const handleFollow = (id) => {
    setFollowedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    follow.mutate(id);
  };
  const handleUnfollow = (id) => {
    setFollowing((prev) => prev.filter((p) => p.id !== id));
    unfollow.mutate(id);
  };
  const handleAccept = (id) => {
    const person = requests.find((r) => r.id === id);
    if (person) {
      setFollowing((prev) => [...prev, { ...person, lastActive: "just now" }]);
    }
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };
  const handleDecline = (id) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };
  const filterBySearch = (items) => {
    if (!searchQuery) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(
      (p) => p.displayName.toLowerCase().includes(q) || p.username.toLowerCase().includes(q)
    );
  };
  const filteredSuggestions = filterBySearch(SUGGESTIONS);
  const filteredFollowing = filterBySearch(following);
  const filteredFollowers = filterBySearch(FOLLOWERS);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "header",
      {
        "data-ocid": "friends.header",
        className: "sticky top-0 z-30 px-4",
        style: {
          background: "oklch(var(--card) / 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid oklch(var(--border) / 0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "text-xl font-bold text-foreground",
                style: { fontFamily: "var(--font-display)" },
                children: "Friends"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "friends.search.toggle",
                onClick: () => setShowSearch((v) => !v),
                className: "w-9 h-9 rounded-xl flex items-center justify-center transition-smooth button-interactive",
                style: {
                  background: showSearch ? "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))" : "oklch(var(--muted) / 0.5)",
                  border: "1px solid oklch(var(--border) / 0.3)"
                },
                "aria-label": "Toggle search",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-foreground" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showSearch && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.2 },
              className: "overflow-hidden pb-3",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    "data-ocid": "friends.search_input",
                    type: "text",
                    placeholder: "Search people...",
                    value: searchQuery,
                    onChange: (e) => setSearchQuery(e.target.value),
                    className: "w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth",
                    style: {
                      background: "oklch(var(--muted) / 0.5)",
                      border: "1px solid oklch(var(--border) / 0.3)",
                      fontFamily: "var(--font-body)"
                    }
                  }
                )
              ] })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `friends.tab.${tab.id}`,
                onClick: () => setActiveTab(tab.id),
                className: "flex-1 py-3 text-sm font-semibold transition-smooth relative",
                style: {
                  color: isActive ? "oklch(0.65 0.18 240)" : "oklch(var(--muted-foreground))",
                  fontFamily: "var(--font-display)"
                },
                children: [
                  tab.label,
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      layoutId: "friends-tab-indicator",
                      className: "absolute bottom-0 left-0 right-0 h-0.5 rounded-full",
                      style: {
                        background: "linear-gradient(90deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))"
                      }
                    }
                  )
                ]
              },
              tab.id
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4 flex flex-col gap-3 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      activeTab === "suggestions" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.2 },
          className: "flex flex-col gap-3",
          children: [
            requests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                      color: "white",
                      fontFamily: "var(--font-display)"
                    },
                    children: requests.length
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-sm font-semibold text-foreground",
                    style: { fontFamily: "var(--font-display)" },
                    children: "Friend Requests"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: requests.map((person, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                RequestCard,
                {
                  person,
                  index,
                  onAccept: handleAccept,
                  onDecline: handleDecline
                },
                person.id
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mt-4 mb-1 border-t",
                  style: { borderColor: "oklch(var(--border) / 0.2)" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Users,
                {
                  className: "w-4 h-4",
                  style: { color: "oklch(0.65 0.18 240)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-sm font-semibold text-foreground",
                  style: { fontFamily: "var(--font-display)" },
                  children: "People you may know"
                }
              )
            ] }),
            filteredSuggestions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              EmptyState,
              {
                icon: Users,
                title: "No suggestions found",
                subtitle: "Try a different search term"
              }
            ) : filteredSuggestions.map((person, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              SuggestionCard,
              {
                person,
                index,
                followed: followedIds.has(person.id),
                onFollow: handleFollow
              },
              person.id
            ))
          ]
        },
        "suggestions"
      ),
      activeTab === "following" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.2 },
          className: "flex flex-col gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-sm font-semibold text-foreground",
                style: { fontFamily: "var(--font-display)" },
                children: [
                  filteredFollowing.length,
                  " Following"
                ]
              }
            ) }),
            filteredFollowing.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              EmptyState,
              {
                icon: UserCheck,
                title: "Not following anyone yet",
                subtitle: "Find people to follow in the Suggestions tab"
              }
            ) : filteredFollowing.map((person, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FollowingCard,
              {
                person,
                index,
                onUnfollow: handleUnfollow
              },
              person.id
            ))
          ]
        },
        "following"
      ),
      activeTab === "followers" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.2 },
          className: "flex flex-col gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-sm font-semibold text-foreground",
                style: { fontFamily: "var(--font-display)" },
                children: [
                  filteredFollowers.length,
                  " Followers"
                ]
              }
            ) }),
            filteredFollowers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              EmptyState,
              {
                icon: Users,
                title: "No followers yet",
                subtitle: "Share your profile to get followers"
              }
            ) : filteredFollowers.map((person, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FollowerCard,
              {
                person,
                index,
                followed: followedIds.has(person.id),
                onFollow: handleFollow,
                onRemove: () => {
                }
              },
              person.id
            ))
          ]
        },
        "followers"
      )
    ] }) })
  ] });
}
export {
  FriendsPage as default
};
