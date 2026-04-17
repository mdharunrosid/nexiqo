import { c as createLucideIcon, k as useQueryClient, j as jsxRuntimeExports, R as Radio, M as MessageCircle, m as motion } from "./index-BPdZgswX.js";
import { u as useActor, a as useQuery, c as createActor } from "./backend-D16dRU6l.js";
import { u as useMutation } from "./useMutation-DpU7ySII.js";
import { B as Bell } from "./bell-B5NEYvup.js";
import { C as Check, U as UserPlus } from "./user-plus-DlV9x7-t.js";
import { H as Heart } from "./heart-FMpl6SPO.js";
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
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function useNotifications(limit = 30, offset = 0) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["notifications", limit, offset],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMyNotifications(BigInt(limit), BigInt(offset));
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 1e4
  });
}
function useMarkAllNotificationsRead() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      return actor.markAllNotificationsRead();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    }
  });
}
const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    type: "like",
    actor: "alexa.m",
    avatar: "https://i.pravatar.cc/150?img=1",
    message: "liked your post",
    preview: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=80&auto=format&fit=crop",
    time: "2m",
    read: false
  },
  {
    id: "2",
    type: "follow",
    actor: "nova.creates",
    avatar: "https://i.pravatar.cc/150?img=2",
    message: "started following you",
    preview: null,
    time: "15m",
    read: false
  },
  {
    id: "3",
    type: "comment",
    actor: "tech_josh",
    avatar: "https://i.pravatar.cc/150?img=3",
    message: 'commented: "Wow this is incredible! 🔥"',
    preview: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=80&auto=format&fit=crop",
    time: "42m",
    read: false
  },
  {
    id: "4",
    type: "live",
    actor: "luna.vibes",
    avatar: "https://i.pravatar.cc/150?img=5",
    message: "started a live session — join now",
    preview: null,
    time: "2h",
    read: true
  },
  {
    id: "5",
    type: "like",
    actor: "drift.skate",
    avatar: "https://i.pravatar.cc/150?img=4",
    message: "and 128 others liked your reel",
    preview: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=80&auto=format&fit=crop",
    time: "5h",
    read: true
  },
  {
    id: "6",
    type: "follow",
    actor: "kai.pixel",
    avatar: "https://i.pravatar.cc/150?img=7",
    message: "started following you",
    preview: null,
    time: "6h",
    read: true
  },
  {
    id: "7",
    type: "comment",
    actor: "zara.lens",
    avatar: "https://i.pravatar.cc/150?img=9",
    message: 'commented: "Amazing shot! Where was this? 📸"',
    preview: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&auto=format&fit=crop",
    time: "9h",
    read: true
  },
  {
    id: "8",
    type: "like",
    actor: "marco.vlogs",
    avatar: "https://i.pravatar.cc/150?img=12",
    message: "liked your photo",
    preview: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=80&auto=format&fit=crop",
    time: "1d",
    read: true
  },
  {
    id: "9",
    type: "star",
    actor: "nexiqo.official",
    avatar: "https://i.pravatar.cc/150?img=15",
    message: "featured your reel on Explore ✨",
    preview: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=80&auto=format&fit=crop",
    time: "2d",
    read: true
  }
];
const notifIcons = {
  like: { Icon: Heart, color: "oklch(0.65 0.22 15)" },
  comment: { Icon: MessageCircle, color: "oklch(0.65 0.18 240)" },
  follow: { Icon: UserPlus, color: "oklch(0.62 0.18 150)" },
  live: { Icon: Radio, color: "oklch(0.65 0.22 25)" },
  star: { Icon: Star, color: "oklch(0.78 0.2 85)" }
};
function NotificationsPage() {
  const { data: _notifications } = useNotifications();
  const markAll = useMarkAllNotificationsRead();
  const unread = MOCK_NOTIFICATIONS.filter((n) => !n.read);
  const read = MOCK_NOTIFICATIONS.filter((n) => n.read);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "header",
      {
        "data-ocid": "notifications.header",
        className: "sticky top-0 z-30 px-4 py-4 flex items-center justify-between",
        style: {
          background: "oklch(var(--card) / 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid oklch(var(--border) / 0.2)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center",
                style: {
                  background: "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.2), oklch(0.5 0.2 290 / 0.2))",
                  border: "1px solid oklch(0.65 0.18 240 / 0.3)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bell,
                  {
                    className: "w-4 h-4",
                    style: { color: "oklch(0.65 0.18 240)" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "text-xl font-bold text-foreground",
                style: { fontFamily: "var(--font-display)" },
                children: "Notifications"
              }
            ),
            unread.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-bold px-2 py-0.5 rounded-full",
                style: {
                  background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                  color: "white",
                  fontFamily: "var(--font-display)"
                },
                children: unread.length
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "notifications.mark_all_read.button",
              onClick: () => markAll.mutate(),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-smooth button-interactive",
              style: {
                color: "oklch(0.65 0.18 240)",
                background: "oklch(0.65 0.18 240 / 0.1)",
                border: "1px solid oklch(0.65 0.18 240 / 0.2)",
                fontFamily: "var(--font-display)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }),
                "Mark all read"
              ]
            }
          )
        ]
      }
    ),
    unread.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { label: "New" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: unread.map((notif, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationItem, { notif, index }, notif.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { label: "Earlier" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: read.map((notif, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        NotificationItem,
        {
          notif,
          index: unread.length + index
        },
        notif.id
      )) })
    ] })
  ] });
}
function SectionLabel({ label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-xs font-bold uppercase tracking-widest",
        style: {
          color: "oklch(var(--muted-foreground))",
          fontFamily: "var(--font-display)"
        },
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-1 h-px",
        style: { background: "oklch(var(--border) / 0.2)" }
      }
    )
  ] });
}
function NotificationItem({
  notif,
  index
}) {
  const config = notifIcons[notif.type] ?? notifIcons.like;
  const { Icon, color } = config;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `notifications.item.${index + 1}`,
      initial: { opacity: 0, x: -16 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.05, duration: 0.3 },
      className: "flex items-center gap-3 p-3.5 rounded-2xl transition-smooth cursor-pointer",
      style: {
        background: notif.read ? "oklch(var(--card) / 0.5)" : "oklch(0.65 0.18 240 / 0.07)",
        border: notif.read ? "1px solid oklch(var(--border) / 0.15)" : "1px solid oklch(0.65 0.18 240 / 0.2)",
        borderLeft: notif.read ? "1px solid oklch(var(--border) / 0.15)" : "3px solid oklch(0.65 0.18 240 / 0.8)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: notif.avatar,
              alt: notif.actor,
              className: "w-12 h-12 rounded-full object-cover",
              style: {
                outline: notif.read ? "none" : "2px solid oklch(0.65 0.18 240 / 0.3)",
                outlineOffset: "2px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center border-2",
              style: {
                background: color,
                borderColor: "oklch(var(--background))"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-2.5 h-2.5 text-white", strokeWidth: 2.5 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-sm leading-snug truncate",
              style: { fontFamily: "var(--font-body)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-bold text-foreground",
                    style: { fontFamily: "var(--font-display)" },
                    children: [
                      notif.actor,
                      " "
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(var(--foreground) / 0.75)" }, children: notif.message })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-xs mt-0.5",
              style: {
                color: notif.read ? "oklch(var(--muted-foreground))" : "oklch(0.65 0.18 240 / 0.8)",
                fontFamily: "var(--font-body)"
              },
              children: [
                notif.time,
                " ago"
              ]
            }
          )
        ] }),
        notif.preview && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: notif.preview,
            alt: "",
            className: "w-12 h-12 rounded-xl object-cover flex-shrink-0",
            style: {
              border: "1px solid oklch(var(--border) / 0.2)"
            }
          }
        ),
        notif.type === "follow" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `notifications.follow_back.${index + 1}`,
            className: "px-3 py-1.5 rounded-xl text-xs font-bold text-white flex-shrink-0 transition-smooth button-interactive",
            style: {
              background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
              fontFamily: "var(--font-display)",
              boxShadow: "0 2px 8px oklch(0.65 0.18 240 / 0.3)"
            },
            children: "Follow"
          }
        ),
        notif.type === "live" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `notifications.join_live.${index + 1}`,
            className: "px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0 transition-smooth button-interactive",
            style: {
              background: "oklch(0.65 0.22 15 / 0.15)",
              color: "oklch(0.75 0.18 15)",
              border: "1px solid oklch(0.65 0.22 15 / 0.3)",
              fontFamily: "var(--font-display)"
            },
            children: "🔴 Join"
          }
        )
      ]
    }
  );
}
export {
  NotificationsPage as default
};
