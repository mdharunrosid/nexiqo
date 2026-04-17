import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion, I as Image } from "./index-BPdZgswX.js";
import { u as useActor, a as useQuery, c as createActor } from "./backend-D16dRU6l.js";
import { S as Search } from "./search-D7UPoyDF.js";
import { V as Video } from "./video-Dd9SSo34.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
];
const CheckCheck = createLucideIcon("check-check", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
];
const Mic = createLucideIcon("mic", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
];
const PenLine = createLucideIcon("pen-line", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$2);
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
];
const Smile = createLucideIcon("smile", __iconNode);
function useConversations() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["chat", "conversations"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getConversations();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 5e3
  });
}
const MOCK_CONVERSATIONS = [
  {
    id: "1",
    username: "alexa.m",
    name: "Alexa Martinez",
    avatarGradient: ["oklch(0.65 0.18 330)", "oklch(0.55 0.22 290)"],
    avatarInitials: "AM",
    lastMessage: "Hey what's up? 👋",
    time: "2m",
    online: true,
    unread: 3
  },
  {
    id: "2",
    username: "tech_josh",
    name: "Josh Chen",
    avatarGradient: ["oklch(0.55 0.2 220)", "oklch(0.45 0.22 260)"],
    avatarInitials: "JC",
    lastMessage: "Check out my new reel! 🔥",
    time: "12m",
    online: true,
    unread: 1,
    verified: true
  },
  {
    id: "3",
    username: "luna.vibes",
    name: "Luna Shah",
    avatarGradient: ["oklch(0.6 0.2 80)", "oklch(0.5 0.22 50)"],
    avatarInitials: "LS",
    lastMessage: "Let's go live tonight 🔴",
    time: "1h",
    online: false,
    unread: 0
  },
  {
    id: "4",
    username: "pixel_jay",
    name: "Jay Parker",
    avatarGradient: ["oklch(0.55 0.18 160)", "oklch(0.45 0.22 200)"],
    avatarInitials: "JP",
    lastMessage: "Let's collab on the next reel!",
    time: "3h",
    online: false,
    unread: 0
  },
  {
    id: "5",
    username: "nova.creates",
    name: "Nova Williams",
    avatarGradient: ["oklch(0.65 0.2 20)", "oklch(0.55 0.22 350)"],
    avatarInitials: "NW",
    lastMessage: "Sent a photo 📸",
    time: "1d",
    online: false,
    unread: 0
  },
  {
    id: "6",
    username: "kai_wave",
    name: "Kai Thompson",
    avatarGradient: ["oklch(0.6 0.22 240)", "oklch(0.5 0.2 270)"],
    avatarInitials: "KT",
    lastMessage: "That edit was insane 🎬",
    time: "2d",
    online: false,
    unread: 0
  },
  {
    id: "7",
    username: "priya.codes",
    name: "Priya Patel",
    avatarGradient: ["oklch(0.58 0.2 130)", "oklch(0.48 0.22 160)"],
    avatarInitials: "PP",
    lastMessage: "When are you posting next?",
    time: "3d",
    online: false,
    unread: 0
  }
];
const MOCK_THREAD = {
  "1": [
    {
      id: "m1",
      text: "Hey! Your last reel was incredible 🔥",
      sent: false,
      time: "10:21 AM"
    },
    {
      id: "m2",
      text: "Thank you so much! Spent hours on the edit",
      sent: true,
      time: "10:23 AM",
      read: true
    },
    {
      id: "m3",
      text: "The transitions were so smooth",
      sent: false,
      time: "10:24 AM"
    },
    { id: "m4", text: "Hey what's up? 👋", sent: false, time: "10:30 AM" }
  ],
  "2": [
    {
      id: "m1",
      text: "Bro that new gadget looks wild",
      sent: true,
      time: "9:05 AM",
      read: true
    },
    {
      id: "m2",
      text: "Right?! Check out my new reel! 🔥",
      sent: false,
      time: "9:06 AM"
    }
  ],
  "3": [
    {
      id: "m1",
      text: "Your aesthetic is amazing",
      sent: true,
      time: "Yesterday",
      read: true
    },
    {
      id: "m2",
      text: "Aw thank you 🥹 Let's go live tonight 🔴",
      sent: false,
      time: "Yesterday"
    }
  ],
  "4": [
    {
      id: "m1",
      text: "Long time no see! How's the grind?",
      sent: false,
      time: "Mon"
    },
    {
      id: "m2",
      text: "Let's collab on the next reel!",
      sent: false,
      time: "Mon"
    }
  ],
  "5": [
    {
      id: "m1",
      text: "Wow your photos are stunning!",
      sent: true,
      time: "Sun",
      read: true
    },
    { id: "m2", text: "Sent a photo 📸", sent: false, time: "Sun" }
  ],
  "6": [
    {
      id: "m1",
      text: "Just dropped a new edit, check it out",
      sent: true,
      time: "Fri",
      read: true
    },
    { id: "m2", text: "That edit was insane 🎬", sent: false, time: "Fri" }
  ],
  "7": [
    {
      id: "m1",
      text: "Working on something special",
      sent: true,
      time: "Thu",
      read: true
    },
    { id: "m2", text: "When are you posting next?", sent: false, time: "Thu" }
  ]
};
function AvatarBubble({
  conv,
  size = 52
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex-shrink-0 rounded-full flex items-center justify-center font-bold text-white relative",
      style: {
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${conv.avatarGradient[0]}, ${conv.avatarGradient[1]})`,
        fontSize: size * 0.35,
        fontFamily: "var(--font-display)"
      },
      children: [
        conv.avatarInitials,
        conv.online && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute rounded-full border-2",
            style: {
              width: size * 0.24,
              height: size * 0.24,
              bottom: size * 0.02,
              right: size * 0.02,
              background: "oklch(0.72 0.2 142)",
              borderColor: "oklch(var(--background))"
            }
          }
        )
      ]
    }
  );
}
function ChatThread({ conv, onBack }) {
  const [messages, setMessages] = reactExports.useState(
    MOCK_THREAD[conv.id] ?? []
  );
  const [input, setInput] = reactExports.useState("");
  const bottomRef = reactExports.useRef(null);
  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const newMsg = {
      id: `new-${Date.now()}`,
      text,
      sent: true,
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      }),
      read: false
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setTimeout(
      () => {
        var _a;
        return (_a = bottomRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      },
      50
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" },
      transition: { type: "spring", damping: 28, stiffness: 280 },
      className: "fixed inset-0 z-50 flex flex-col",
      style: { background: "oklch(var(--background))" },
      "data-ocid": "chat.thread.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "header",
          {
            className: "sticky top-0 z-10 px-4 py-3 flex items-center gap-3",
            style: {
              background: "oklch(var(--card) / 0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid oklch(var(--border) / 0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "chat.thread.back_button",
                  onClick: onBack,
                  className: "button-interactive w-9 h-9 rounded-full flex items-center justify-center",
                  style: { background: "oklch(var(--muted))" },
                  "aria-label": "Back to messages",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 text-foreground" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarBubble, { conv, size: 40 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-bold text-sm text-foreground truncate",
                    style: { fontFamily: "var(--font-display)" },
                    children: conv.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs",
                    style: {
                      color: conv.online ? "oklch(0.72 0.2 142)" : "oklch(var(--muted-foreground))",
                      fontFamily: "var(--font-body)"
                    },
                    children: conv.online ? "Active now" : `@${conv.username}`
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "chat.thread.voice_call_button",
                    "aria-label": "Voice call",
                    className: "button-interactive w-9 h-9 rounded-full flex items-center justify-center",
                    style: { background: "oklch(var(--muted))" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-foreground" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "chat.thread.video_call_button",
                    "aria-label": "Video call",
                    className: "button-interactive w-9 h-9 rounded-full flex items-center justify-center",
                    style: { background: "oklch(var(--muted))" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-4 h-4 text-foreground" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2",
            style: { overscrollBehavior: "contain" },
            children: [
              messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 8, scale: 0.96 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { delay: i * 0.04, duration: 0.2 },
                  className: `flex ${msg.sent ? "justify-end" : "justify-start"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "max-w-[72%] px-4 py-2.5 rounded-2xl",
                      style: msg.sent ? {
                        background: "linear-gradient(135deg, oklch(0.6 0.2 240), oklch(0.48 0.22 275))",
                        borderBottomRightRadius: "4px"
                      } : {
                        background: "oklch(var(--card) / 0.8)",
                        border: "1px solid oklch(var(--border) / 0.3)",
                        backdropFilter: "blur(12px)",
                        borderBottomLeftRadius: "4px"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm leading-relaxed break-words",
                            style: {
                              color: msg.sent ? "oklch(0.98 0 0)" : "oklch(var(--foreground))",
                              fontFamily: "var(--font-body)"
                            },
                            children: msg.text
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: `flex items-center gap-1 mt-1 ${msg.sent ? "justify-end" : "justify-start"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-[10px]",
                                  style: {
                                    color: msg.sent ? "oklch(0.98 0 0 / 0.65)" : "oklch(var(--muted-foreground))",
                                    fontFamily: "var(--font-body)"
                                  },
                                  children: msg.time
                                }
                              ),
                              msg.sent && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                CheckCheck,
                                {
                                  className: "w-3 h-3",
                                  style: {
                                    color: msg.read ? "oklch(0.85 0.1 200)" : "oklch(0.98 0 0 / 0.65)"
                                  }
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                },
                msg.id
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "px-3 py-3 flex items-end gap-2 pb-safe",
            style: {
              background: "oklch(var(--card) / 0.95)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid oklch(var(--border) / 0.25)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "chat.thread.emoji_button",
                  "aria-label": "Emoji",
                  className: "button-interactive w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5",
                  style: { background: "oklch(var(--muted))" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smile, { className: "w-4 h-4 text-muted-foreground" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex-1 rounded-2xl px-4 py-2.5 flex items-center min-h-[42px]",
                  style: {
                    background: "oklch(var(--muted))",
                    border: "1px solid oklch(var(--border) / 0.3)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      "data-ocid": "chat.thread.message_input",
                      type: "text",
                      placeholder: "Message...",
                      value: input,
                      onChange: (e) => setInput(e.target.value),
                      onKeyDown: (e) => e.key === "Enter" && handleSend(),
                      className: "flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none",
                      style: { fontFamily: "var(--font-body)" }
                    }
                  )
                }
              ),
              input.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "chat.thread.send_button",
                  onClick: handleSend,
                  "aria-label": "Send message",
                  className: "button-interactive w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                    boxShadow: "0 2px 12px oklch(0.65 0.18 240 / 0.4)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 text-white", strokeWidth: 2.5 })
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "chat.thread.image_button",
                    "aria-label": "Send image",
                    className: "button-interactive w-10 h-10 rounded-full flex items-center justify-center",
                    style: { background: "oklch(var(--muted))" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4 text-muted-foreground" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "chat.thread.voice_button",
                    "aria-label": "Voice message",
                    className: "button-interactive w-10 h-10 rounded-full flex items-center justify-center",
                    style: { background: "oklch(var(--muted))" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "w-4 h-4 text-muted-foreground" })
                  }
                )
              ] })
            ]
          }
        )
      ]
    },
    "thread"
  );
}
function ChatPage() {
  const [search, setSearch] = reactExports.useState("");
  const [activeConv, setActiveConv] = reactExports.useState(null);
  const { data: _conversations } = useConversations();
  const filtered = MOCK_CONVERSATIONS.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.username.toLowerCase().includes(search.toLowerCase())
  );
  const totalUnread = MOCK_CONVERSATIONS.reduce((sum, c) => sum + c.unread, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { background: "oklch(var(--background))" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "header",
          {
            "data-ocid": "chat.header",
            className: "sticky top-0 z-30 px-5 pt-5 pb-3 flex items-center justify-between",
            style: {
              background: "oklch(var(--card) / 0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid oklch(var(--border) / 0.2)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: "text-2xl font-bold text-foreground",
                    style: { fontFamily: "var(--font-display)" },
                    children: "Messages"
                  }
                ),
                totalUnread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[11px] font-bold text-white rounded-full px-2 py-0.5",
                    style: {
                      background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))"
                    },
                    children: totalUnread
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "chat.compose.open_modal_button",
                  "aria-label": "New message",
                  className: "button-interactive w-9 h-9 rounded-full flex items-center justify-center",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.2), oklch(0.5 0.2 290 / 0.2))",
                    border: "1px solid oklch(0.65 0.18 240 / 0.35)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    PenLine,
                    {
                      className: "w-4 h-4",
                      style: { color: "oklch(0.72 0.18 240)" }
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-3 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2.5 rounded-2xl px-4 py-3",
            style: {
              background: "oklch(var(--card) / 0.8)",
              border: "1px solid oklch(var(--border) / 0.25)",
              backdropFilter: "blur(12px)"
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
                  "data-ocid": "chat.search.input",
                  type: "text",
                  placeholder: "Search conversations...",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none",
                  style: { fontFamily: "var(--font-body)" }
                }
              ),
              search && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSearch(""),
                  className: "text-muted-foreground hover:text-foreground transition-colors text-xs",
                  "aria-label": "Clear search",
                  children: "✕"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-1 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs font-semibold mb-2.5",
              style: {
                color: "oklch(var(--muted-foreground))",
                fontFamily: "var(--font-body)"
              },
              children: "Online Now"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto no-scrollbar pb-1", children: MOCK_CONVERSATIONS.filter((c) => c.online).map((conv) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `chat.online_user.item.${conv.id}`,
              onClick: () => setActiveConv(conv),
              className: "flex flex-col items-center gap-1.5 flex-shrink-0 button-interactive",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-base",
                      style: {
                        background: `linear-gradient(135deg, ${conv.avatarGradient[0]}, ${conv.avatarGradient[1]})`,
                        fontFamily: "var(--font-display)",
                        boxShadow: `0 0 0 2.5px oklch(var(--background)), 0 0 0 4px ${conv.avatarGradient[0]}`
                      },
                      children: conv.avatarInitials
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2",
                      style: {
                        background: "oklch(0.72 0.2 142)",
                        borderColor: "oklch(var(--background))"
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[11px] text-muted-foreground truncate max-w-[56px]",
                    style: { fontFamily: "var(--font-body)" },
                    children: conv.name.split(" ")[0]
                  }
                )
              ]
            },
            conv.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mx-4 mb-1 h-px",
            style: { background: "oklch(var(--border) / 0.25)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "chat.conversations.list", className: "flex flex-col pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0 },
            "data-ocid": "chat.empty_state",
            className: "flex flex-col items-center justify-center gap-4 py-20 px-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-20 h-20 rounded-full flex items-center justify-center",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.15), oklch(0.5 0.2 290 / 0.15))",
                    border: "1px solid oklch(0.65 0.18 240 / 0.25)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Search,
                    {
                      className: "w-8 h-8",
                      style: { color: "oklch(0.65 0.18 240)" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-bold text-foreground mb-1",
                    style: { fontFamily: "var(--font-display)" },
                    children: "No conversations found"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm text-muted-foreground",
                    style: { fontFamily: "var(--font-body)" },
                    children: "Try a different name or username"
                  }
                )
              ] })
            ]
          },
          "empty"
        ) : filtered.map((conv, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            "data-ocid": `chat.conversation.item.${index + 1}`,
            initial: { opacity: 0, x: -16 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -16 },
            transition: { delay: index * 0.05, duration: 0.22 },
            onClick: () => setActiveConv(conv),
            className: "flex items-center gap-3.5 px-4 py-3.5 text-left w-full transition-smooth",
            style: {
              background: "transparent"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.background = "oklch(var(--card) / 0.6)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.background = "transparent";
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarBubble, { conv, size: 52 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-bold text-sm text-foreground truncate",
                        style: { fontFamily: "var(--font-display)" },
                        children: conv.name
                      }
                    ),
                    conv.verified && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[10px] w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 font-bold",
                        style: {
                          background: "oklch(0.65 0.18 240)",
                          color: "white"
                        },
                        children: "✓"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[11px] flex-shrink-0 ml-2",
                      style: {
                        color: conv.unread > 0 ? "oklch(0.72 0.18 240)" : "oklch(var(--muted-foreground))",
                        fontFamily: "var(--font-body)",
                        fontWeight: conv.unread > 0 ? 600 : 400
                      },
                      children: conv.time
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                    conv.unread === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CheckCheck,
                      {
                        className: "w-3.5 h-3.5 flex-shrink-0",
                        style: { color: "oklch(0.65 0.18 240)" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs truncate",
                        style: {
                          color: conv.unread > 0 ? "oklch(var(--foreground))" : "oklch(var(--muted-foreground))",
                          fontWeight: conv.unread > 0 ? 600 : 400,
                          fontFamily: "var(--font-body)"
                        },
                        children: conv.lastMessage
                      }
                    )
                  ] }),
                  conv.unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold text-white flex items-center justify-center flex-shrink-0",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                        fontFamily: "var(--font-display)"
                      },
                      "data-ocid": `chat.unread_badge.${index + 1}`,
                      children: conv.unread
                    }
                  )
                ] })
              ] })
            ]
          },
          conv.id
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeConv && /* @__PURE__ */ jsxRuntimeExports.jsx(ChatThread, { conv: activeConv, onBack: () => setActiveConv(null) }) })
      ]
    }
  );
}
export {
  ChatPage as default
};
