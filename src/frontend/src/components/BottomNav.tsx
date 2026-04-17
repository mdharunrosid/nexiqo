import { useLocation, useRouter } from "@tanstack/react-router";
import { Film, Home, MessageCircle, Plus, Users } from "lucide-react";
import { useState } from "react";
import CreateMenu from "./CreateMenu";

interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", path: "/home", icon: Home },
  { id: "reels", label: "Reels", path: "/reels", icon: Film },
  { id: "friends", label: "Friends", path: "/friends", icon: Users },
  { id: "chat", label: "Chat", path: "/chat", icon: MessageCircle },
];

export default function BottomNav() {
  const [createOpen, setCreateOpen] = useState(false);
  const router = useRouter();
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = (path: string) => {
    router.navigate({ to: path });
  };

  const isActive = (path: string) => currentPath === path;

  return (
    <>
      <CreateMenu open={createOpen} onClose={() => setCreateOpen(false)} />

      <nav
        data-ocid="bottom_nav"
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around px-2 pt-2"
        style={{
          background: "oklch(var(--card) / 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid oklch(var(--border) / 0.2)",
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 8px)",
          minHeight: "64px",
        }}
      >
        <NavButton
          item={navItems[0]}
          active={isActive(navItems[0].path)}
          onClick={() => navigate(navItems[0].path)}
        />

        <NavButton
          item={navItems[1]}
          active={isActive(navItems[1].path)}
          onClick={() => navigate(navItems[1].path)}
        />

        {/* Create — centered, glowing */}
        <button
          type="button"
          data-ocid="create.open_modal_button"
          onClick={() => setCreateOpen(true)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full transition-smooth active:scale-90 button-interactive"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
            boxShadow:
              "0 0 20px oklch(0.65 0.18 240 / 0.6), 0 0 40px oklch(0.5 0.2 290 / 0.3)",
          }}
          aria-label="Create new content"
        >
          <Plus className="w-7 h-7 text-white" strokeWidth={2.5} />
        </button>

        <NavButton
          item={navItems[2]}
          active={isActive(navItems[2].path)}
          onClick={() => navigate(navItems[2].path)}
        />

        <NavButton
          item={navItems[3]}
          active={isActive(navItems[3].path)}
          onClick={() => navigate(navItems[3].path)}
        />
      </nav>
    </>
  );
}

interface NavButtonProps {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}

function NavButton({ item, active, onClick }: NavButtonProps) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      data-ocid={`nav.${item.id}.tab`}
      onClick={onClick}
      className="flex flex-col items-center gap-0.5 px-3 py-1 transition-smooth button-interactive"
      aria-label={item.label}
    >
      <Icon
        className="w-6 h-6 transition-smooth"
        style={{
          color: active
            ? "oklch(0.65 0.18 240)"
            : "oklch(var(--muted-foreground))",
          filter: active
            ? "drop-shadow(0 0 6px oklch(0.65 0.18 240 / 0.7))"
            : "none",
        }}
        strokeWidth={active ? 2.5 : 2}
      />
      <span
        className="text-[10px] font-medium transition-smooth"
        style={{
          color: active
            ? "oklch(0.65 0.18 240)"
            : "oklch(var(--muted-foreground))",
          fontFamily: "var(--font-display)",
        }}
      >
        {item.label}
      </span>
    </button>
  );
}
