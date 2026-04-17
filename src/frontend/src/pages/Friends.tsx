import {
  Check,
  Search,
  UserCheck,
  UserMinus,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useFollow, useUnfollow } from "../hooks/useFriends";
import type { UserId } from "../types";

// ─── Sample Data ──────────────────────────────────────────────────────────────

interface PersonData {
  id: string;
  username: string;
  displayName: string;
  avatarFrom: string;
  avatarTo: string;
  avatarInitial: string;
  mutual?: number;
  lastActive?: string;
}

const FRIEND_REQUESTS: PersonData[] = [
  {
    id: "req-1",
    username: "kaito.flux",
    displayName: "Kaito Flux",
    avatarFrom: "oklch(0.65 0.18 240)",
    avatarTo: "oklch(0.50 0.20 290)",
    avatarInitial: "K",
    mutual: 14,
  },
  {
    id: "req-2",
    username: "aya.bloom",
    displayName: "Aya Bloom",
    avatarFrom: "oklch(0.62 0.22 350)",
    avatarTo: "oklch(0.70 0.18 50)",
    avatarInitial: "A",
    mutual: 8,
  },
];

const SUGGESTIONS: PersonData[] = [
  {
    id: "s-1",
    username: "nova.creates",
    displayName: "Nova Creates",
    avatarFrom: "oklch(0.75 0.20 180)",
    avatarTo: "oklch(0.65 0.18 240)",
    avatarInitial: "N",
    mutual: 12,
  },
  {
    id: "s-2",
    username: "drift.skate",
    displayName: "Drift Skate",
    avatarFrom: "oklch(0.72 0.18 55)",
    avatarTo: "oklch(0.55 0.22 30)",
    avatarInitial: "D",
    mutual: 7,
  },
  {
    id: "s-3",
    username: "zen.vibes",
    displayName: "Zen Vibes",
    avatarFrom: "oklch(0.70 0.18 145)",
    avatarTo: "oklch(0.60 0.16 180)",
    avatarInitial: "Z",
    mutual: 23,
  },
  {
    id: "s-4",
    username: "pixel_jay",
    displayName: "Pixel Jay",
    avatarFrom: "oklch(0.55 0.22 300)",
    avatarTo: "oklch(0.62 0.22 350)",
    avatarInitial: "P",
    mutual: 5,
  },
  {
    id: "s-5",
    username: "solar_dev",
    displayName: "Solar Dev",
    avatarFrom: "oklch(0.82 0.18 90)",
    avatarTo: "oklch(0.72 0.18 55)",
    avatarInitial: "S",
    mutual: 18,
  },
  {
    id: "s-6",
    username: "mira_art",
    displayName: "Mira Art",
    avatarFrom: "oklch(0.58 0.18 265)",
    avatarTo: "oklch(0.75 0.20 180)",
    avatarInitial: "M",
    mutual: 31,
  },
  {
    id: "s-7",
    username: "vex.motion",
    displayName: "Vex Motion",
    avatarFrom: "oklch(0.65 0.22 10)",
    avatarTo: "oklch(0.50 0.20 290)",
    avatarInitial: "V",
    mutual: 9,
  },
];

const FOLLOWING: PersonData[] = [
  {
    id: "f-1",
    username: "alexa.m",
    displayName: "Alexa Monroe",
    avatarFrom: "oklch(0.65 0.22 350)",
    avatarTo: "oklch(0.55 0.22 20)",
    avatarInitial: "A",
    lastActive: "2m ago",
  },
  {
    id: "f-2",
    username: "james_r",
    displayName: "James Rivera",
    avatarFrom: "oklch(0.65 0.18 240)",
    avatarTo: "oklch(0.50 0.20 270)",
    avatarInitial: "J",
    lastActive: "1h ago",
  },
  {
    id: "f-3",
    username: "luna.vibes",
    displayName: "Luna Vibes",
    avatarFrom: "oklch(0.58 0.20 290)",
    avatarTo: "oklch(0.50 0.20 290)",
    avatarInitial: "L",
    lastActive: "Online",
  },
  {
    id: "f-4",
    username: "tech_josh",
    displayName: "Tech Josh",
    avatarFrom: "oklch(0.75 0.20 180)",
    avatarTo: "oklch(0.70 0.18 210)",
    avatarInitial: "T",
    lastActive: "3h ago",
  },
];

const FOLLOWERS: PersonData[] = [
  {
    id: "fl-1",
    username: "sky.runner",
    displayName: "Sky Runner",
    avatarFrom: "oklch(0.70 0.18 220)",
    avatarTo: "oklch(0.65 0.18 240)",
    avatarInitial: "S",
    mutual: 6,
  },
  {
    id: "fl-2",
    username: "neon_kira",
    displayName: "Neon Kira",
    avatarFrom: "oklch(0.65 0.24 320)",
    avatarTo: "oklch(0.62 0.22 350)",
    avatarInitial: "N",
    mutual: 19,
  },
  {
    id: "fl-3",
    username: "codec.rex",
    displayName: "Codec Rex",
    avatarFrom: "oklch(0.72 0.18 150)",
    avatarTo: "oklch(0.65 0.18 145)",
    avatarInitial: "C",
    mutual: 3,
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function AvatarGradient({
  from,
  to,
  initial,
  size = "md",
}: {
  from: string;
  to: string;
  initial: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-14 h-14 text-lg",
  };
  return (
    <div
      className={`${sizes[size]} rounded-full flex items-center justify-center font-bold text-white flex-shrink-0`}
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        fontFamily: "var(--font-display)",
      }}
    >
      {initial}
    </div>
  );
}

function OnlineDot({ status }: { status?: string }) {
  const isOnline = status === "Online";
  if (!status) return null;
  return (
    <div
      className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
      style={{
        background: isOnline ? "oklch(0.65 0.18 145)" : "oklch(0.55 0 0)",
        borderColor: "oklch(var(--card))",
      }}
    />
  );
}

function RequestCard({
  person,
  index,
  onAccept,
  onDecline,
}: {
  person: PersonData;
  index: number;
  onAccept: (id: string) => void;
  onDecline: (id: string) => void;
}) {
  return (
    <motion.div
      key={person.id}
      data-ocid={`friends.request.item.${index + 1}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 60, scale: 0.9 }}
      transition={{ delay: index * 0.08 }}
      className="flex items-center gap-3 p-3 rounded-2xl"
      style={{
        background:
          "linear-gradient(135deg, oklch(var(--card)), oklch(0.14 0.02 250))",
        border: "1px solid oklch(0.65 0.18 240 / 0.25)",
        boxShadow: "0 2px 16px oklch(0.65 0.18 240 / 0.1)",
      }}
    >
      <div className="relative">
        <AvatarGradient
          from={person.avatarFrom}
          to={person.avatarTo}
          initial={person.avatarInitial}
          size="md"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="font-bold text-sm text-foreground truncate"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {person.displayName}
        </p>
        <p
          className="text-xs truncate"
          style={{
            color: "oklch(var(--muted-foreground))",
            fontFamily: "var(--font-body)",
          }}
        >
          @{person.username}
          {person.mutual ? ` · ${person.mutual} mutual` : ""}
        </p>
      </div>
      <div className="flex gap-2 flex-shrink-0">
        <button
          type="button"
          data-ocid={`friends.request.accept.${index + 1}`}
          onClick={() => onAccept(person.id)}
          className="w-9 h-9 rounded-xl flex items-center justify-center button-interactive"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
            boxShadow: "0 2px 8px oklch(0.65 0.18 240 / 0.4)",
          }}
          aria-label="Accept request"
        >
          <Check className="w-4 h-4 text-white" />
        </button>
        <button
          type="button"
          data-ocid={`friends.request.decline.${index + 1}`}
          onClick={() => onDecline(person.id)}
          className="w-9 h-9 rounded-xl flex items-center justify-center button-interactive"
          style={{
            background: "oklch(var(--muted) / 0.6)",
            border: "1px solid oklch(var(--border) / 0.3)",
          }}
          aria-label="Decline request"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </motion.div>
  );
}

function SuggestionCard({
  person,
  index,
  followed,
  onFollow,
}: {
  person: PersonData;
  index: number;
  followed: boolean;
  onFollow: (id: string) => void;
}) {
  return (
    <motion.div
      key={person.id}
      data-ocid={`friends.suggestion.item.${index + 1}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
      className="flex items-center gap-3 p-3 rounded-2xl card-elevated"
    >
      <AvatarGradient
        from={person.avatarFrom}
        to={person.avatarTo}
        initial={person.avatarInitial}
        size="md"
      />
      <div className="flex-1 min-w-0">
        <p
          className="font-bold text-sm text-foreground truncate"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {person.displayName}
        </p>
        <p
          className="text-xs truncate"
          style={{
            color: "oklch(var(--muted-foreground))",
            fontFamily: "var(--font-body)",
          }}
        >
          @{person.username} · {person.mutual} mutual friends
        </p>
      </div>
      <button
        type="button"
        data-ocid={`friends.suggestion.follow.${index + 1}`}
        onClick={() => onFollow(person.id)}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-smooth button-interactive flex-shrink-0"
        style={
          followed
            ? {
                background: "oklch(var(--muted))",
                border: "1px solid oklch(0.65 0.18 240 / 0.4)",
                color: "oklch(0.65 0.18 240)",
              }
            : {
                background:
                  "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                boxShadow: "0 2px 8px oklch(0.65 0.18 240 / 0.35)",
                color: "white",
              }
        }
      >
        {followed ? (
          <>
            <UserCheck className="w-3.5 h-3.5" />
            Following
          </>
        ) : (
          <>
            <UserPlus className="w-3.5 h-3.5" />
            Follow
          </>
        )}
      </button>
    </motion.div>
  );
}

function FollowingCard({
  person,
  index,
  onUnfollow,
}: {
  person: PersonData;
  index: number;
  onUnfollow: (id: string) => void;
}) {
  return (
    <motion.div
      key={person.id}
      data-ocid={`friends.following.item.${index + 1}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
      className="flex items-center gap-3 p-3 rounded-2xl card-elevated"
    >
      <div className="relative">
        <AvatarGradient
          from={person.avatarFrom}
          to={person.avatarTo}
          initial={person.avatarInitial}
          size="md"
        />
        <OnlineDot status={person.lastActive} />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="font-bold text-sm text-foreground truncate"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {person.displayName}
        </p>
        <p
          className="text-xs truncate"
          style={{
            color: "oklch(var(--muted-foreground))",
            fontFamily: "var(--font-body)",
          }}
        >
          @{person.username}
          {person.lastActive ? (
            <span
              className="ml-1"
              style={{
                color:
                  person.lastActive === "Online"
                    ? "oklch(0.65 0.18 145)"
                    : "inherit",
              }}
            >
              · {person.lastActive}
            </span>
          ) : null}
        </p>
      </div>
      <button
        type="button"
        data-ocid={`friends.following.unfollow.${index + 1}`}
        onClick={() => onUnfollow(person.id)}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-smooth button-interactive flex-shrink-0"
        style={{
          background: "oklch(var(--muted) / 0.5)",
          border: "1px solid oklch(var(--border) / 0.4)",
          color: "oklch(var(--muted-foreground))",
        }}
      >
        <UserMinus className="w-3.5 h-3.5" />
        Unfollow
      </button>
    </motion.div>
  );
}

function FollowerCard({
  person,
  index,
  followed,
  onFollow,
  onRemove,
}: {
  person: PersonData;
  index: number;
  followed: boolean;
  onFollow: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <motion.div
      key={person.id}
      data-ocid={`friends.follower.item.${index + 1}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
      className="flex items-center gap-3 p-3 rounded-2xl card-elevated"
    >
      <AvatarGradient
        from={person.avatarFrom}
        to={person.avatarTo}
        initial={person.avatarInitial}
        size="md"
      />
      <div className="flex-1 min-w-0">
        <p
          className="font-bold text-sm text-foreground truncate"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {person.displayName}
        </p>
        <p
          className="text-xs truncate"
          style={{
            color: "oklch(var(--muted-foreground))",
            fontFamily: "var(--font-body)",
          }}
        >
          @{person.username}
          {person.mutual ? ` · ${person.mutual} mutual` : ""}
        </p>
      </div>
      <div className="flex gap-2 flex-shrink-0">
        <button
          type="button"
          data-ocid={`friends.follower.follow_back.${index + 1}`}
          onClick={() => onFollow(person.id)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-smooth button-interactive"
          style={
            followed
              ? {
                  background: "oklch(var(--muted))",
                  border: "1px solid oklch(0.65 0.18 240 / 0.4)",
                  color: "oklch(0.65 0.18 240)",
                }
              : {
                  background:
                    "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                  boxShadow: "0 2px 8px oklch(0.65 0.18 240 / 0.3)",
                  color: "white",
                }
          }
        >
          {followed ? (
            <UserCheck className="w-3.5 h-3.5" />
          ) : (
            <UserPlus className="w-3.5 h-3.5" />
          )}
          {followed ? "Following" : "Follow back"}
        </button>
        <button
          type="button"
          data-ocid={`friends.follower.remove.${index + 1}`}
          onClick={() => onRemove(person.id)}
          className="w-8 h-8 rounded-xl flex items-center justify-center transition-smooth button-interactive"
          style={{
            background: "oklch(var(--muted) / 0.4)",
            border: "1px solid oklch(var(--border) / 0.3)",
          }}
          aria-label="Remove follower"
        >
          <X className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      </div>
    </motion.div>
  );
}

function EmptyState({
  icon: Icon,
  title,
  subtitle,
}: { icon: React.ElementType; title: string; subtitle: string }) {
  return (
    <motion.div
      data-ocid="friends.empty_state"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.65 0.18 240 / 0.15), oklch(0.5 0.2 290 / 0.15))",
          border: "1px solid oklch(0.65 0.18 240 / 0.2)",
        }}
      >
        <Icon className="w-8 h-8" style={{ color: "oklch(0.65 0.18 240)" }} />
      </div>
      <p
        className="font-bold text-foreground mb-1"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </p>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

type TabId = "suggestions" | "following" | "followers";

const TABS: { id: TabId; label: string; count?: number }[] = [
  { id: "suggestions", label: "Suggestions" },
  { id: "following", label: "Following" },
  { id: "followers", label: "Followers" },
];

export default function FriendsPage() {
  const follow = useFollow();
  const unfollow = useUnfollow();

  const [activeTab, setActiveTab] = useState<TabId>("suggestions");
  const [followedIds, setFollowedIds] = useState<Set<string>>(new Set());
  const [requests, setRequests] = useState<PersonData[]>(FRIEND_REQUESTS);
  const [following, setFollowing] = useState<PersonData[]>(FOLLOWING);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleFollow = (id: string) => {
    setFollowedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    follow.mutate(id as unknown as UserId);
  };

  const handleUnfollow = (id: string) => {
    setFollowing((prev) => prev.filter((p) => p.id !== id));
    unfollow.mutate(id as unknown as UserId);
  };

  const handleAccept = (id: string) => {
    const person = requests.find((r) => r.id === id);
    if (person) {
      setFollowing((prev) => [...prev, { ...person, lastActive: "just now" }]);
    }
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const handleDecline = (id: string) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const filterBySearch = <T extends PersonData>(items: T[]) => {
    if (!searchQuery) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(
      (p) =>
        p.displayName.toLowerCase().includes(q) ||
        p.username.toLowerCase().includes(q),
    );
  };

  const filteredSuggestions = filterBySearch(SUGGESTIONS);
  const filteredFollowing = filterBySearch(following);
  const filteredFollowers = filterBySearch(FOLLOWERS);

  return (
    <div className="min-h-screen bg-background">
      {/* ── Header ── */}
      <header
        data-ocid="friends.header"
        className="sticky top-0 z-30 px-4"
        style={{
          background: "oklch(var(--card) / 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid oklch(var(--border) / 0.2)",
        }}
      >
        <div className="flex items-center justify-between py-4">
          <h1
            className="text-xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Friends
          </h1>
          <button
            type="button"
            data-ocid="friends.search.toggle"
            onClick={() => setShowSearch((v) => !v)}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-smooth button-interactive"
            style={{
              background: showSearch
                ? "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))"
                : "oklch(var(--muted) / 0.5)",
              border: "1px solid oklch(var(--border) / 0.3)",
            }}
            aria-label="Toggle search"
          >
            <Search className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden pb-3"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  data-ocid="friends.search_input"
                  type="text"
                  placeholder="Search people..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth"
                  style={{
                    background: "oklch(var(--muted) / 0.5)",
                    border: "1px solid oklch(var(--border) / 0.3)",
                    fontFamily: "var(--font-body)",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tabs */}
        <div className="flex">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                type="button"
                key={tab.id}
                data-ocid={`friends.tab.${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 py-3 text-sm font-semibold transition-smooth relative"
                style={{
                  color: isActive
                    ? "oklch(0.65 0.18 240)"
                    : "oklch(var(--muted-foreground))",
                  fontFamily: "var(--font-display)",
                }}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="friends-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </header>

      {/* ── Content ── */}
      <div className="px-4 py-4 flex flex-col gap-3 pb-24">
        <AnimatePresence mode="wait">
          {/* ─── Suggestions Tab ─── */}
          {activeTab === "suggestions" && (
            <motion.div
              key="suggestions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              {/* Friend Requests Section */}
              {requests.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                        color: "white",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {requests.length}
                    </div>
                    <span
                      className="text-sm font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Friend Requests
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <AnimatePresence>
                      {requests.map((person, index) => (
                        <RequestCard
                          key={person.id}
                          person={person}
                          index={index}
                          onAccept={handleAccept}
                          onDecline={handleDecline}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                  <div
                    className="mt-4 mb-1 border-t"
                    style={{ borderColor: "oklch(var(--border) / 0.2)" }}
                  />
                </div>
              )}

              {/* People You May Know */}
              <div className="flex items-center gap-2 mb-1">
                <Users
                  className="w-4 h-4"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                />
                <span
                  className="text-sm font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  People you may know
                </span>
              </div>

              {filteredSuggestions.length === 0 ? (
                <EmptyState
                  icon={Users}
                  title="No suggestions found"
                  subtitle="Try a different search term"
                />
              ) : (
                filteredSuggestions.map((person, index) => (
                  <SuggestionCard
                    key={person.id}
                    person={person}
                    index={index}
                    followed={followedIds.has(person.id)}
                    onFollow={handleFollow}
                  />
                ))
              )}
            </motion.div>
          )}

          {/* ─── Following Tab ─── */}
          {activeTab === "following" && (
            <motion.div
              key="following"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className="text-sm font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {filteredFollowing.length} Following
                </span>
              </div>

              {filteredFollowing.length === 0 ? (
                <EmptyState
                  icon={UserCheck}
                  title="Not following anyone yet"
                  subtitle="Find people to follow in the Suggestions tab"
                />
              ) : (
                filteredFollowing.map((person, index) => (
                  <FollowingCard
                    key={person.id}
                    person={person}
                    index={index}
                    onUnfollow={handleUnfollow}
                  />
                ))
              )}
            </motion.div>
          )}

          {/* ─── Followers Tab ─── */}
          {activeTab === "followers" && (
            <motion.div
              key="followers"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className="text-sm font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {filteredFollowers.length} Followers
                </span>
              </div>

              {filteredFollowers.length === 0 ? (
                <EmptyState
                  icon={Users}
                  title="No followers yet"
                  subtitle="Share your profile to get followers"
                />
              ) : (
                filteredFollowers.map((person, index) => (
                  <FollowerCard
                    key={person.id}
                    person={person}
                    index={index}
                    followed={followedIds.has(person.id)}
                    onFollow={handleFollow}
                    onRemove={() => {}}
                  />
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
