import {
  Bell,
  Check,
  Heart,
  MessageCircle,
  Radio,
  Star,
  UserPlus,
} from "lucide-react";
import { motion } from "motion/react";
import {
  useMarkAllNotificationsRead,
  useNotifications,
} from "../hooks/useNotifications";

const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    type: "like",
    actor: "alexa.m",
    avatar: "https://i.pravatar.cc/150?img=1",
    message: "liked your post",
    preview:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=80&auto=format&fit=crop",
    time: "2m",
    read: false,
  },
  {
    id: "2",
    type: "follow",
    actor: "nova.creates",
    avatar: "https://i.pravatar.cc/150?img=2",
    message: "started following you",
    preview: null,
    time: "15m",
    read: false,
  },
  {
    id: "3",
    type: "comment",
    actor: "tech_josh",
    avatar: "https://i.pravatar.cc/150?img=3",
    message: 'commented: "Wow this is incredible! 🔥"',
    preview:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=80&auto=format&fit=crop",
    time: "42m",
    read: false,
  },
  {
    id: "4",
    type: "live",
    actor: "luna.vibes",
    avatar: "https://i.pravatar.cc/150?img=5",
    message: "started a live session — join now",
    preview: null,
    time: "2h",
    read: true,
  },
  {
    id: "5",
    type: "like",
    actor: "drift.skate",
    avatar: "https://i.pravatar.cc/150?img=4",
    message: "and 128 others liked your reel",
    preview:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=80&auto=format&fit=crop",
    time: "5h",
    read: true,
  },
  {
    id: "6",
    type: "follow",
    actor: "kai.pixel",
    avatar: "https://i.pravatar.cc/150?img=7",
    message: "started following you",
    preview: null,
    time: "6h",
    read: true,
  },
  {
    id: "7",
    type: "comment",
    actor: "zara.lens",
    avatar: "https://i.pravatar.cc/150?img=9",
    message: 'commented: "Amazing shot! Where was this? 📸"',
    preview:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&auto=format&fit=crop",
    time: "9h",
    read: true,
  },
  {
    id: "8",
    type: "like",
    actor: "marco.vlogs",
    avatar: "https://i.pravatar.cc/150?img=12",
    message: "liked your photo",
    preview:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=80&auto=format&fit=crop",
    time: "1d",
    read: true,
  },
  {
    id: "9",
    type: "star",
    actor: "nexiqo.official",
    avatar: "https://i.pravatar.cc/150?img=15",
    message: "featured your reel on Explore ✨",
    preview:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=80&auto=format&fit=crop",
    time: "2d",
    read: true,
  },
];

const notifIcons: Record<string, { Icon: React.ElementType; color: string }> = {
  like: { Icon: Heart, color: "oklch(0.65 0.22 15)" },
  comment: { Icon: MessageCircle, color: "oklch(0.65 0.18 240)" },
  follow: { Icon: UserPlus, color: "oklch(0.62 0.18 150)" },
  live: { Icon: Radio, color: "oklch(0.65 0.22 25)" },
  star: { Icon: Star, color: "oklch(0.78 0.2 85)" },
};

export default function NotificationsPage() {
  const { data: _notifications } = useNotifications();
  const markAll = useMarkAllNotificationsRead();

  const unread = MOCK_NOTIFICATIONS.filter((n) => !n.read);
  const read = MOCK_NOTIFICATIONS.filter((n) => n.read);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header
        data-ocid="notifications.header"
        className="sticky top-0 z-30 px-4 py-4 flex items-center justify-between"
        style={{
          background: "oklch(var(--card) / 0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid oklch(var(--border) / 0.2)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.2), oklch(0.5 0.2 290 / 0.2))",
              border: "1px solid oklch(0.65 0.18 240 / 0.3)",
            }}
          >
            <Bell
              className="w-4 h-4"
              style={{ color: "oklch(0.65 0.18 240)" }}
            />
          </div>
          <h1
            className="text-xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Notifications
          </h1>
          {unread.length > 0 && (
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                color: "white",
                fontFamily: "var(--font-display)",
              }}
            >
              {unread.length}
            </span>
          )}
        </div>
        <button
          type="button"
          data-ocid="notifications.mark_all_read.button"
          onClick={() => markAll.mutate()}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-smooth button-interactive"
          style={{
            color: "oklch(0.65 0.18 240)",
            background: "oklch(0.65 0.18 240 / 0.1)",
            border: "1px solid oklch(0.65 0.18 240 / 0.2)",
            fontFamily: "var(--font-display)",
          }}
        >
          <Check className="w-3.5 h-3.5" />
          Mark all read
        </button>
      </header>

      {/* New section */}
      {unread.length > 0 && (
        <div className="px-4 pt-5">
          <SectionLabel label="New" />
          <div className="flex flex-col gap-2">
            {unread.map((notif, index) => (
              <NotificationItem key={notif.id} notif={notif} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Earlier section */}
      <div className="px-4 pt-5">
        <SectionLabel label="Earlier" />
        <div className="flex flex-col gap-2">
          {read.map((notif, index) => (
            <NotificationItem
              key={notif.id}
              notif={notif}
              index={unread.length + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <p
        className="text-xs font-bold uppercase tracking-widest"
        style={{
          color: "oklch(var(--muted-foreground))",
          fontFamily: "var(--font-display)",
        }}
      >
        {label}
      </p>
      <div
        className="flex-1 h-px"
        style={{ background: "oklch(var(--border) / 0.2)" }}
      />
    </div>
  );
}

interface NotifData {
  id: string;
  type: string;
  actor: string;
  avatar: string;
  message: string;
  preview: string | null;
  time: string;
  read: boolean;
}

function NotificationItem({
  notif,
  index,
}: { notif: NotifData; index: number }) {
  const config = notifIcons[notif.type] ?? notifIcons.like;
  const { Icon, color } = config;

  return (
    <motion.div
      data-ocid={`notifications.item.${index + 1}`}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="flex items-center gap-3 p-3.5 rounded-2xl transition-smooth cursor-pointer"
      style={{
        background: notif.read
          ? "oklch(var(--card) / 0.5)"
          : "oklch(0.65 0.18 240 / 0.07)",
        border: notif.read
          ? "1px solid oklch(var(--border) / 0.15)"
          : "1px solid oklch(0.65 0.18 240 / 0.2)",
        borderLeft: notif.read
          ? "1px solid oklch(var(--border) / 0.15)"
          : "3px solid oklch(0.65 0.18 240 / 0.8)",
      }}
    >
      {/* Avatar + type icon */}
      <div className="relative flex-shrink-0">
        <img
          src={notif.avatar}
          alt={notif.actor}
          className="w-12 h-12 rounded-full object-cover"
          style={{
            outline: notif.read
              ? "none"
              : "2px solid oklch(0.65 0.18 240 / 0.3)",
            outlineOffset: "2px",
          }}
        />
        <div
          className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center border-2"
          style={{
            background: color,
            borderColor: "oklch(var(--background))",
          }}
        >
          <Icon className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className="text-sm leading-snug truncate"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span
            className="font-bold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {notif.actor}{" "}
          </span>
          <span style={{ color: "oklch(var(--foreground) / 0.75)" }}>
            {notif.message}
          </span>
        </p>
        <p
          className="text-xs mt-0.5"
          style={{
            color: notif.read
              ? "oklch(var(--muted-foreground))"
              : "oklch(0.65 0.18 240 / 0.8)",
            fontFamily: "var(--font-body)",
          }}
        >
          {notif.time} ago
        </p>
      </div>

      {/* Post preview thumbnail */}
      {notif.preview && (
        <img
          src={notif.preview}
          alt=""
          className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
          style={{
            border: "1px solid oklch(var(--border) / 0.2)",
          }}
        />
      )}

      {/* Follow-back button */}
      {notif.type === "follow" && (
        <button
          type="button"
          data-ocid={`notifications.follow_back.${index + 1}`}
          className="px-3 py-1.5 rounded-xl text-xs font-bold text-white flex-shrink-0 transition-smooth button-interactive"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
            fontFamily: "var(--font-display)",
            boxShadow: "0 2px 8px oklch(0.65 0.18 240 / 0.3)",
          }}
        >
          Follow
        </button>
      )}

      {/* Live join button */}
      {notif.type === "live" && (
        <button
          type="button"
          data-ocid={`notifications.join_live.${index + 1}`}
          className="px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0 transition-smooth button-interactive"
          style={{
            background: "oklch(0.65 0.22 15 / 0.15)",
            color: "oklch(0.75 0.18 15)",
            border: "1px solid oklch(0.65 0.22 15 / 0.3)",
            fontFamily: "var(--font-display)",
          }}
        >
          🔴 Join
        </button>
      )}
    </motion.div>
  );
}
