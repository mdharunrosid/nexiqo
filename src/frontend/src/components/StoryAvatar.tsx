import { Plus } from "lucide-react";
import { motion } from "motion/react";

export type StoryItem = {
  id: string;
  username: string;
  avatar: string | null;
  isOwn?: boolean;
  seen?: boolean;
};

export function StoryAvatar({
  story,
  index,
}: { story: StoryItem; index: number }) {
  const gradientActive =
    "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290), oklch(0.7 0.2 320))";

  return (
    <motion.button
      type="button"
      data-ocid={`home.story.item.${index + 1}`}
      className="flex flex-col items-center gap-1.5 min-w-[68px] flex-shrink-0"
      whileTap={{ scale: 0.93 }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
    >
      <div className="relative w-[62px] h-[62px]">
        {!story.isOwn && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: story.seen ? "oklch(0.35 0 0)" : gradientActive,
              padding: "2.5px",
              borderRadius: "9999px",
            }}
          />
        )}
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            inset: story.isOwn ? 0 : "2.5px",
            background: story.isOwn ? "oklch(0.16 0 0)" : undefined,
          }}
        >
          {story.avatar ? (
            <img
              src={story.avatar}
              alt={story.username}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="You"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {story.isOwn && (
          <div
            className="absolute bottom-0 right-0 w-[18px] h-[18px] rounded-full flex items-center justify-center z-10"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
              border: "2px solid oklch(0.078 0 0)",
            }}
          >
            <Plus className="w-2.5 h-2.5 text-white" strokeWidth={3.5} />
          </div>
        )}
      </div>
      <span
        className="text-[10px] max-w-[64px] truncate leading-tight"
        style={{
          color: story.isOwn
            ? "oklch(0.95 0 0)"
            : story.seen
              ? "oklch(0.45 0 0)"
              : "oklch(0.75 0 0)",
          fontFamily: "var(--font-body)",
        }}
      >
        {story.username}
      </span>
    </motion.button>
  );
}
