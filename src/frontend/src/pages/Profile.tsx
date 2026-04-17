import { useRouter } from "@tanstack/react-router";
import { Camera, Film, Grid, Play, Settings, Tag } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useMyProfile } from "../hooks/useProfile";

const MOCK_POSTS = [
  {
    id: "p1",
    url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&auto=format&fit=crop",
  },
  {
    id: "p2",
    url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=300&auto=format&fit=crop",
  },
  {
    id: "p3",
    url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&auto=format&fit=crop",
  },
  {
    id: "p4",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&auto=format&fit=crop",
  },
  {
    id: "p5",
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&auto=format&fit=crop",
  },
  {
    id: "p6",
    url: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=300&auto=format&fit=crop",
  },
  {
    id: "p7",
    url: "https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?w=300&auto=format&fit=crop",
  },
  {
    id: "p8",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&auto=format&fit=crop",
  },
  {
    id: "p9",
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&auto=format&fit=crop",
  },
];

const MOCK_REELS = [
  {
    id: "r1",
    url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&auto=format&fit=crop",
  },
  {
    id: "r2",
    url: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&auto=format&fit=crop",
  },
  {
    id: "r3",
    url: "https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=300&auto=format&fit=crop",
  },
  {
    id: "r4",
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&auto=format&fit=crop",
  },
  {
    id: "r5",
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300&auto=format&fit=crop",
  },
  {
    id: "r6",
    url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&auto=format&fit=crop",
  },
];

const STATS = [
  { id: "posts", label: "Posts", value: "127" },
  { id: "followers", label: "Followers", value: "48.2k" },
  { id: "following", label: "Following", value: "312" },
];

const TABS = [
  { id: "posts", Icon: Grid, label: "Posts" },
  { id: "reels", Icon: Film, label: "Reels" },
  { id: "tagged", Icon: Tag, label: "Tagged" },
];

type TabId = "posts" | "reels" | "tagged";

export default function ProfilePage() {
  const router = useRouter();
  const { data: _profile } = useMyProfile();
  const [activeTab, setActiveTab] = useState<TabId>("posts");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Cover Photo */}
      <div className="relative h-44">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.12 255) 0%, oklch(0.18 0.14 285) 50%, oklch(0.14 0.1 300) 100%)",
          }}
        />
        {/* Decorative overlay pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, oklch(0.65 0.18 240 / 0.4) 0%, transparent 60%), radial-gradient(circle at 75% 30%, oklch(0.5 0.2 290 / 0.3) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 50%, oklch(var(--background)) 100%)",
          }}
        />
        <button
          type="button"
          data-ocid="profile.settings.button"
          onClick={() => router.navigate({ to: "/home" })}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center button-interactive"
          style={{
            background: "oklch(0 0 0 / 0.4)",
            backdropFilter: "blur(12px)",
            border: "1px solid oklch(1 0 0 / 0.1)",
          }}
          aria-label="Settings"
        >
          <Settings className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Profile Info */}
      <div className="px-4 -mt-16 relative z-10">
        {/* Avatar row */}
        <div className="flex items-end justify-between mb-4">
          <div className="relative">
            <div
              className="w-24 h-24 rounded-full p-0.5"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
              }}
            >
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="Alex Rivers"
                className="w-full h-full rounded-full object-cover"
                style={{ outline: "3px solid oklch(var(--background))" }}
              />
            </div>
            <button
              type="button"
              data-ocid="profile.edit_photo.button"
              className="absolute bottom-1 right-0 w-7 h-7 rounded-full flex items-center justify-center transition-smooth hover:scale-110 active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                border: "2px solid oklch(var(--background))",
              }}
              aria-label="Change photo"
            >
              <Camera className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          <button
            type="button"
            data-ocid="profile.edit.button"
            className="px-6 py-2 rounded-xl text-sm font-semibold transition-smooth button-interactive"
            style={{
              border: "1.5px solid oklch(0.65 0.18 240)",
              color: "oklch(0.65 0.18 240)",
              background: "oklch(0.65 0.18 240 / 0.08)",
              fontFamily: "var(--font-display)",
            }}
          >
            Edit Profile
          </button>
        </div>

        {/* Name + username */}
        <h1
          className="text-xl font-bold text-foreground mb-0.5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Alex Rivers
        </h1>
        <p
          className="text-sm mb-2"
          style={{
            color: "oklch(var(--muted-foreground))",
            fontFamily: "var(--font-body)",
          }}
        >
          @alex.rivers
        </p>
        <p
          className="text-sm leading-relaxed mb-5"
          style={{
            color: "oklch(var(--foreground) / 0.85)",
            fontFamily: "var(--font-body)",
          }}
        >
          ✨ Creating content that inspires.{" "}
          <span style={{ color: "oklch(0.65 0.18 240)" }}>#filmmaker</span>{" "}
          <span style={{ color: "oklch(0.65 0.18 240)" }}>#travel</span>{" "}
          <span style={{ color: "oklch(0.65 0.18 240)" }}>#tech</span>
        </p>

        {/* Stats row */}
        <motion.div
          data-ocid="profile.stats.section"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-around py-4 rounded-2xl mb-5"
          style={{
            background: "oklch(var(--card))",
            border: "1px solid oklch(var(--border) / 0.25)",
            boxShadow: "0 4px 20px oklch(0 0 0 / 0.25)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.id}
              className="flex flex-col items-center gap-0.5 flex-1"
              style={
                i > 0
                  ? { borderLeft: "1px solid oklch(var(--border) / 0.3)" }
                  : undefined
              }
            >
              <span
                className="text-lg font-bold text-gradient"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs"
                style={{
                  color: "oklch(var(--muted-foreground))",
                  fontFamily: "var(--font-body)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tabs */}
      <div
        className="flex border-b sticky top-0 z-20"
        style={{
          borderColor: "oklch(var(--border) / 0.25)",
          background: "oklch(var(--background) / 0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        {TABS.map((tab, i) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              type="button"
              key={tab.id}
              data-ocid={`profile.tab.${i + 1}`}
              onClick={() => setActiveTab(tab.id as TabId)}
              className="flex-1 py-3 flex items-center justify-center gap-1.5 transition-smooth"
              style={{
                borderBottom: isActive
                  ? "2px solid oklch(0.65 0.18 240)"
                  : "2px solid transparent",
              }}
              aria-label={tab.label}
            >
              <tab.Icon
                className="w-4 h-4"
                style={{
                  color: isActive
                    ? "oklch(0.65 0.18 240)"
                    : "oklch(var(--muted-foreground))",
                }}
              />
              <span
                className="text-xs font-semibold"
                style={{
                  color: isActive
                    ? "oklch(0.65 0.18 240)"
                    : "oklch(var(--muted-foreground))",
                  fontFamily: "var(--font-display)",
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "posts" && (
          <motion.div
            key="posts"
            data-ocid="profile.posts.grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 gap-0.5 p-0.5"
          >
            {MOCK_POSTS.map((post, index) => (
              <motion.button
                type="button"
                key={post.id}
                data-ocid={`profile.post.item.${index + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                className="relative aspect-square overflow-hidden button-interactive"
                aria-label={`Post ${index + 1}`}
              >
                <img
                  src={post.url}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.button>
            ))}
          </motion.div>
        )}

        {activeTab === "reels" && (
          <motion.div
            key="reels"
            data-ocid="profile.reels.grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 gap-0.5 p-0.5"
          >
            {MOCK_REELS.map((reel, index) => (
              <motion.button
                type="button"
                key={reel.id}
                data-ocid={`profile.reel.item.${index + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                className="relative aspect-square overflow-hidden button-interactive group"
                aria-label={`Reel ${index + 1}`}
              >
                <img
                  src={reel.url}
                  alt={`Reel ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
                  style={{ background: "oklch(0 0 0 / 0.25)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: "oklch(1 0 0 / 0.2)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}

        {activeTab === "tagged" && (
          <motion.div
            key="tagged"
            data-ocid="profile.tagged.empty_state"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center justify-center px-8 py-20 text-center"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
              style={{
                background: "oklch(0.65 0.18 240 / 0.1)",
                border: "1px solid oklch(0.65 0.18 240 / 0.2)",
              }}
            >
              <Tag
                className="w-8 h-8"
                style={{ color: "oklch(0.65 0.18 240 / 0.6)" }}
              />
            </div>
            <h3
              className="text-base font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              No tagged posts yet
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "oklch(var(--muted-foreground))",
                fontFamily: "var(--font-body)",
              }}
            >
              When people tag you in posts, they'll appear here.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
