import { Camera, Film, ImageIcon, Palette, Radio, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface CreateMenuProps {
  open: boolean;
  onClose: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  Icon: React.ElementType;
  gradient: string;
  glow: string;
}

const menuItems: MenuItem[] = [
  {
    id: "camera",
    label: "Camera",
    Icon: Camera,
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.18 200), oklch(0.55 0.2 220))",
    glow: "oklch(0.65 0.18 200 / 0.4)",
  },
  {
    id: "reel",
    label: "Create Reel",
    Icon: Film,
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 270))",
    glow: "oklch(0.65 0.18 240 / 0.4)",
  },
  {
    id: "image",
    label: "Upload Image",
    Icon: ImageIcon,
    gradient:
      "linear-gradient(135deg, oklch(0.6 0.2 290), oklch(0.5 0.22 310))",
    glow: "oklch(0.6 0.2 290 / 0.4)",
  },
  {
    id: "live",
    label: "Go Live",
    Icon: Radio,
    gradient: "linear-gradient(135deg, oklch(0.62 0.22 15), oklch(0.55 0.2 0))",
    glow: "oklch(0.62 0.22 15 / 0.4)",
  },
  {
    id: "canvas",
    label: "Canvas",
    Icon: Palette,
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.18 130), oklch(0.55 0.2 160))",
    glow: "oklch(0.65 0.18 130 / 0.4)",
  },
];

export default function CreateMenu({ open, onClose }: CreateMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            data-ocid="create.dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50"
            style={{
              background: "oklch(0.05 0 0 / 0.8)",
              backdropFilter: "blur(8px)",
            }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe"
            style={{
              paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 80px)",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden p-5"
              style={{
                background: "oklch(var(--card) / 0.97)",
                backdropFilter: "blur(24px)",
                border: "1px solid oklch(var(--border) / 0.3)",
                boxShadow: "0 -8px 48px oklch(0.65 0.18 240 / 0.15)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h3
                  className="text-lg font-bold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Create
                </h3>
                <button
                  type="button"
                  data-ocid="create.close_button"
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-smooth hover:bg-muted active:scale-90"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Grid of actions */}
              <div className="grid grid-cols-5 gap-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    data-ocid={`create.${item.id}.button`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.06,
                      type: "spring",
                      stiffness: 400,
                      damping: 28,
                    }}
                    onClick={onClose}
                    className="flex flex-col items-center gap-2 button-interactive"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: item.gradient,
                        boxShadow: `0 4px 16px ${item.glow}`,
                      }}
                    >
                      <item.Icon
                        className="w-5 h-5 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <span
                      className="text-[10px] font-medium text-center leading-tight"
                      style={{
                        color: "oklch(var(--muted-foreground))",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
