import {
  ArrowLeft,
  CheckCheck,
  Edit3,
  Image,
  Mic,
  Phone,
  Search,
  Send,
  Smile,
  Video,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useConversations } from "../hooks/useChat";

interface Conversation {
  id: string;
  username: string;
  name: string;
  avatarGradient: [string, string];
  avatarInitials: string;
  lastMessage: string;
  time: string;
  online: boolean;
  unread: number;
  verified?: boolean;
}

interface ChatMessage {
  id: string;
  text: string;
  sent: boolean;
  time: string;
  read?: boolean;
}

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    username: "alexa.m",
    name: "Alexa Martinez",
    avatarGradient: ["oklch(0.65 0.18 330)", "oklch(0.55 0.22 290)"],
    avatarInitials: "AM",
    lastMessage: "Hey what's up? 👋",
    time: "2m",
    online: true,
    unread: 3,
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
    verified: true,
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
    unread: 0,
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
    unread: 0,
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
    unread: 0,
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
    unread: 0,
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
    unread: 0,
  },
];

const MOCK_THREAD: Record<string, ChatMessage[]> = {
  "1": [
    {
      id: "m1",
      text: "Hey! Your last reel was incredible 🔥",
      sent: false,
      time: "10:21 AM",
    },
    {
      id: "m2",
      text: "Thank you so much! Spent hours on the edit",
      sent: true,
      time: "10:23 AM",
      read: true,
    },
    {
      id: "m3",
      text: "The transitions were so smooth",
      sent: false,
      time: "10:24 AM",
    },
    { id: "m4", text: "Hey what's up? 👋", sent: false, time: "10:30 AM" },
  ],
  "2": [
    {
      id: "m1",
      text: "Bro that new gadget looks wild",
      sent: true,
      time: "9:05 AM",
      read: true,
    },
    {
      id: "m2",
      text: "Right?! Check out my new reel! 🔥",
      sent: false,
      time: "9:06 AM",
    },
  ],
  "3": [
    {
      id: "m1",
      text: "Your aesthetic is amazing",
      sent: true,
      time: "Yesterday",
      read: true,
    },
    {
      id: "m2",
      text: "Aw thank you 🥹 Let's go live tonight 🔴",
      sent: false,
      time: "Yesterday",
    },
  ],
  "4": [
    {
      id: "m1",
      text: "Long time no see! How's the grind?",
      sent: false,
      time: "Mon",
    },
    {
      id: "m2",
      text: "Let's collab on the next reel!",
      sent: false,
      time: "Mon",
    },
  ],
  "5": [
    {
      id: "m1",
      text: "Wow your photos are stunning!",
      sent: true,
      time: "Sun",
      read: true,
    },
    { id: "m2", text: "Sent a photo 📸", sent: false, time: "Sun" },
  ],
  "6": [
    {
      id: "m1",
      text: "Just dropped a new edit, check it out",
      sent: true,
      time: "Fri",
      read: true,
    },
    { id: "m2", text: "That edit was insane 🎬", sent: false, time: "Fri" },
  ],
  "7": [
    {
      id: "m1",
      text: "Working on something special",
      sent: true,
      time: "Thu",
      read: true,
    },
    { id: "m2", text: "When are you posting next?", sent: false, time: "Thu" },
  ],
};

function AvatarBubble({
  conv,
  size = 52,
}: {
  conv: Conversation;
  size?: number;
}) {
  return (
    <div
      className="flex-shrink-0 rounded-full flex items-center justify-center font-bold text-white relative"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${conv.avatarGradient[0]}, ${conv.avatarGradient[1]})`,
        fontSize: size * 0.35,
        fontFamily: "var(--font-display)",
      }}
    >
      {conv.avatarInitials}
      {conv.online && (
        <div
          className="absolute rounded-full border-2"
          style={{
            width: size * 0.24,
            height: size * 0.24,
            bottom: size * 0.02,
            right: size * 0.02,
            background: "oklch(0.72 0.2 142)",
            borderColor: "oklch(var(--background))",
          }}
        />
      )}
    </div>
  );
}

interface ChatThreadProps {
  conv: Conversation;
  onBack: () => void;
}

function ChatThread({ conv, onBack }: ChatThreadProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(
    MOCK_THREAD[conv.id] ?? [],
  );
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const newMsg: ChatMessage = {
      id: `new-${Date.now()}`,
      text,
      sent: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      read: false,
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setTimeout(
      () => bottomRef.current?.scrollIntoView({ behavior: "smooth" }),
      50,
    );
  };

  return (
    <motion.div
      key="thread"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 28, stiffness: 280 }}
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "oklch(var(--background))" }}
      data-ocid="chat.thread.panel"
    >
      {/* Thread Header */}
      <header
        className="sticky top-0 z-10 px-4 py-3 flex items-center gap-3"
        style={{
          background: "oklch(var(--card) / 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid oklch(var(--border) / 0.25)",
        }}
      >
        <button
          type="button"
          data-ocid="chat.thread.back_button"
          onClick={onBack}
          className="button-interactive w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: "oklch(var(--muted))" }}
          aria-label="Back to messages"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>

        <AvatarBubble conv={conv} size={40} />

        <div className="flex-1 min-w-0">
          <p
            className="font-bold text-sm text-foreground truncate"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {conv.name}
          </p>
          <p
            className="text-xs"
            style={{
              color: conv.online
                ? "oklch(0.72 0.2 142)"
                : "oklch(var(--muted-foreground))",
              fontFamily: "var(--font-body)",
            }}
          >
            {conv.online ? "Active now" : `@${conv.username}`}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            data-ocid="chat.thread.voice_call_button"
            aria-label="Voice call"
            className="button-interactive w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "oklch(var(--muted))" }}
          >
            <Phone className="w-4 h-4 text-foreground" />
          </button>
          <button
            type="button"
            data-ocid="chat.thread.video_call_button"
            aria-label="Video call"
            className="button-interactive w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "oklch(var(--muted))" }}
          >
            <Video className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2"
        style={{ overscrollBehavior: "contain" }}
      >
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.04, duration: 0.2 }}
            className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-[72%] px-4 py-2.5 rounded-2xl"
              style={
                msg.sent
                  ? {
                      background:
                        "linear-gradient(135deg, oklch(0.6 0.2 240), oklch(0.48 0.22 275))",
                      borderBottomRightRadius: "4px",
                    }
                  : {
                      background: "oklch(var(--card) / 0.8)",
                      border: "1px solid oklch(var(--border) / 0.3)",
                      backdropFilter: "blur(12px)",
                      borderBottomLeftRadius: "4px",
                    }
              }
            >
              <p
                className="text-sm leading-relaxed break-words"
                style={{
                  color: msg.sent
                    ? "oklch(0.98 0 0)"
                    : "oklch(var(--foreground))",
                  fontFamily: "var(--font-body)",
                }}
              >
                {msg.text}
              </p>
              <div
                className={`flex items-center gap-1 mt-1 ${msg.sent ? "justify-end" : "justify-start"}`}
              >
                <span
                  className="text-[10px]"
                  style={{
                    color: msg.sent
                      ? "oklch(0.98 0 0 / 0.65)"
                      : "oklch(var(--muted-foreground))",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {msg.time}
                </span>
                {msg.sent && (
                  <CheckCheck
                    className="w-3 h-3"
                    style={{
                      color: msg.read
                        ? "oklch(0.85 0.1 200)"
                        : "oklch(0.98 0 0 / 0.65)",
                    }}
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        className="px-3 py-3 flex items-end gap-2 pb-safe"
        style={{
          background: "oklch(var(--card) / 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid oklch(var(--border) / 0.25)",
        }}
      >
        <button
          type="button"
          data-ocid="chat.thread.emoji_button"
          aria-label="Emoji"
          className="button-interactive w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5"
          style={{ background: "oklch(var(--muted))" }}
        >
          <Smile className="w-4 h-4 text-muted-foreground" />
        </button>

        <div
          className="flex-1 rounded-2xl px-4 py-2.5 flex items-center min-h-[42px]"
          style={{
            background: "oklch(var(--muted))",
            border: "1px solid oklch(var(--border) / 0.3)",
          }}
        >
          <input
            data-ocid="chat.thread.message_input"
            type="text"
            placeholder="Message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>

        {input.trim() ? (
          <button
            type="button"
            data-ocid="chat.thread.send_button"
            onClick={handleSend}
            aria-label="Send message"
            className="button-interactive w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
              boxShadow: "0 2px 12px oklch(0.65 0.18 240 / 0.4)",
            }}
          >
            <Send className="w-4 h-4 text-white" strokeWidth={2.5} />
          </button>
        ) : (
          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              type="button"
              data-ocid="chat.thread.image_button"
              aria-label="Send image"
              className="button-interactive w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "oklch(var(--muted))" }}
            >
              <Image className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              type="button"
              data-ocid="chat.thread.voice_button"
              aria-label="Voice message"
              className="button-interactive w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "oklch(var(--muted))" }}
            >
              <Mic className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ChatPage() {
  const [search, setSearch] = useState("");
  const [activeConv, setActiveConv] = useState<Conversation | null>(null);
  const { data: _conversations } = useConversations();

  const filtered = MOCK_CONVERSATIONS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.username.toLowerCase().includes(search.toLowerCase()),
  );

  const totalUnread = MOCK_CONVERSATIONS.reduce((sum, c) => sum + c.unread, 0);

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(var(--background))" }}
    >
      {/* Header */}
      <header
        data-ocid="chat.header"
        className="sticky top-0 z-30 px-5 pt-5 pb-3 flex items-center justify-between"
        style={{
          background: "oklch(var(--card) / 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid oklch(var(--border) / 0.2)",
        }}
      >
        <div className="flex items-center gap-2">
          <h1
            className="text-2xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Messages
          </h1>
          {totalUnread > 0 && (
            <span
              className="text-[11px] font-bold text-white rounded-full px-2 py-0.5"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
              }}
            >
              {totalUnread}
            </span>
          )}
        </div>
        <button
          type="button"
          data-ocid="chat.compose.open_modal_button"
          aria-label="New message"
          className="button-interactive w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.2), oklch(0.5 0.2 290 / 0.2))",
            border: "1px solid oklch(0.65 0.18 240 / 0.35)",
          }}
        >
          <Edit3
            className="w-4 h-4"
            style={{ color: "oklch(0.72 0.18 240)" }}
          />
        </button>
      </header>

      {/* Search bar */}
      <div className="px-4 pt-3 pb-2">
        <div
          className="flex items-center gap-2.5 rounded-2xl px-4 py-3"
          style={{
            background: "oklch(var(--card) / 0.8)",
            border: "1px solid oklch(var(--border) / 0.25)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Search
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "oklch(var(--muted-foreground))" }}
          />
          <input
            data-ocid="chat.search.input"
            type="text"
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            style={{ fontFamily: "var(--font-body)" }}
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-muted-foreground hover:text-foreground transition-colors text-xs"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Online contacts strip */}
      <div className="px-4 pt-1 pb-3">
        <p
          className="text-xs font-semibold mb-2.5"
          style={{
            color: "oklch(var(--muted-foreground))",
            fontFamily: "var(--font-body)",
          }}
        >
          Online Now
        </p>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {MOCK_CONVERSATIONS.filter((c) => c.online).map((conv) => (
            <button
              key={conv.id}
              type="button"
              data-ocid={`chat.online_user.item.${conv.id}`}
              onClick={() => setActiveConv(conv)}
              className="flex flex-col items-center gap-1.5 flex-shrink-0 button-interactive"
            >
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-base"
                  style={{
                    background: `linear-gradient(135deg, ${conv.avatarGradient[0]}, ${conv.avatarGradient[1]})`,
                    fontFamily: "var(--font-display)",
                    boxShadow: `0 0 0 2.5px oklch(var(--background)), 0 0 0 4px ${conv.avatarGradient[0]}`,
                  }}
                >
                  {conv.avatarInitials}
                </div>
                <div
                  className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2"
                  style={{
                    background: "oklch(0.72 0.2 142)",
                    borderColor: "oklch(var(--background))",
                  }}
                />
              </div>
              <span
                className="text-[11px] text-muted-foreground truncate max-w-[56px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {conv.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="mx-4 mb-1 h-px"
        style={{ background: "oklch(var(--border) / 0.25)" }}
      />

      {/* Conversation list */}
      <div data-ocid="chat.conversations.list" className="flex flex-col pb-24">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              data-ocid="chat.empty_state"
              className="flex flex-col items-center justify-center gap-4 py-20 px-6"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.15), oklch(0.5 0.2 290 / 0.15))",
                  border: "1px solid oklch(0.65 0.18 240 / 0.25)",
                }}
              >
                <Search
                  className="w-8 h-8"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                />
              </div>
              <div className="text-center">
                <p
                  className="font-bold text-foreground mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  No conversations found
                </p>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Try a different name or username
                </p>
              </div>
            </motion.div>
          ) : (
            filtered.map((conv, index) => (
              <motion.button
                type="button"
                key={conv.id}
                data-ocid={`chat.conversation.item.${index + 1}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ delay: index * 0.05, duration: 0.22 }}
                onClick={() => setActiveConv(conv)}
                className="flex items-center gap-3.5 px-4 py-3.5 text-left w-full transition-smooth"
                style={{
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(var(--card) / 0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                <AvatarBubble conv={conv} size={52} />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span
                        className="font-bold text-sm text-foreground truncate"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {conv.name}
                      </span>
                      {conv.verified && (
                        <span
                          className="text-[10px] w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
                          style={{
                            background: "oklch(0.65 0.18 240)",
                            color: "white",
                          }}
                        >
                          ✓
                        </span>
                      )}
                    </div>
                    <span
                      className="text-[11px] flex-shrink-0 ml-2"
                      style={{
                        color:
                          conv.unread > 0
                            ? "oklch(0.72 0.18 240)"
                            : "oklch(var(--muted-foreground))",
                        fontFamily: "var(--font-body)",
                        fontWeight: conv.unread > 0 ? 600 : 400,
                      }}
                    >
                      {conv.time}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      {conv.unread === 0 && (
                        <CheckCheck
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: "oklch(0.65 0.18 240)" }}
                        />
                      )}
                      <span
                        className="text-xs truncate"
                        style={{
                          color:
                            conv.unread > 0
                              ? "oklch(var(--foreground))"
                              : "oklch(var(--muted-foreground))",
                          fontWeight: conv.unread > 0 ? 600 : 400,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {conv.lastMessage}
                      </span>
                    </div>
                    {conv.unread > 0 && (
                      <span
                        className="min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold text-white flex items-center justify-center flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                          fontFamily: "var(--font-display)",
                        }}
                        data-ocid={`chat.unread_badge.${index + 1}`}
                      >
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Chat thread overlay */}
      <AnimatePresence>
        {activeConv && (
          <ChatThread conv={activeConv} onBack={() => setActiveConv(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
