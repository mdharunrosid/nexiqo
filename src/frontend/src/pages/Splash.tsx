import { useRouter } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate({ to: "/onboarding" });
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  const handleNavigate = () => {
    router.navigate({ to: "/onboarding" });
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: full-screen tap target, keyboard handled by button below
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden cursor-pointer select-none"
      onClick={handleNavigate}
      data-ocid="splash.page"
      role="presentation"
      style={{
        background:
          "linear-gradient(160deg, #0D1B2A 0%, #120B2E 35%, #1A0533 65%, #0D0D0D 100%)",
      }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.18 240 / 0.35) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.5 0.2 290 / 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px oklch(0.65 0.18 240 / 0.5), 0 0 60px oklch(0.5 0.2 290 / 0.25)",
                "0 0 50px oklch(0.65 0.18 240 / 0.8), 0 0 100px oklch(0.5 0.2 290 / 0.45)",
                "0 0 30px oklch(0.65 0.18 240 / 0.5), 0 0 60px oklch(0.5 0.2 290 / 0.25)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-24 h-24 rounded-3xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              role="img"
              aria-label="Nexiqo logo mark"
            >
              <title>Nexiqo</title>
              <path
                d="M8 8L22 22M22 22L36 8M22 22L8 36M22 22L36 36"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="22" cy="22" r="4" fill="white" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3"
        >
          <h1
            className="text-6xl font-bold tracking-tight text-gradient"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nexiqo
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-sm font-medium tracking-[0.22em] uppercase"
            style={{
              color: "oklch(0.65 0.18 240)",
              fontFamily: "var(--font-body)",
            }}
          >
            Create&nbsp;•&nbsp;Connect&nbsp;•&nbsp;Go Viral
          </motion.p>
        </motion.div>

        {/* Skip wait button — accessible keyboard target */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          onClick={handleNavigate}
          data-ocid="splash.skip_button"
          className="mt-4 px-8 py-2.5 rounded-full text-sm font-medium button-interactive"
          style={{
            background: "oklch(0.65 0.18 240 / 0.15)",
            border: "1px solid oklch(0.65 0.18 240 / 0.3)",
            color: "oklch(0.65 0.18 240)",
            fontFamily: "var(--font-body)",
          }}
        >
          Tap to continue
        </motion.button>
      </div>

      {/* Loading bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2.5, ease: "linear" }}
        style={{
          background:
            "linear-gradient(90deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
