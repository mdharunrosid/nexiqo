import { useRouter } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Slide {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  glowColor: string;
  cardGradient: string;
  dotGradient: string;
  btnGradient: string;
  btnShadow: string;
  dotShadow: string;
  subtitleColor: string;
}

const slides: Slide[] = [
  {
    id: "feed",
    emoji: "📱",
    title: "Social Feed",
    subtitle: "Your world, curated",
    description:
      "Stay connected with friends and discover trending content powered by AI — tailored just for you.",
    glowColor:
      "radial-gradient(ellipse 60% 40% at 50% 30%, oklch(0.55 0.2 220 / 0.18) 0%, transparent 70%)",
    cardGradient:
      "linear-gradient(135deg, oklch(0.65 0.18 200), oklch(0.55 0.2 240))",
    dotGradient:
      "linear-gradient(90deg, oklch(0.65 0.18 200), oklch(0.55 0.2 240))",
    btnGradient:
      "linear-gradient(135deg, oklch(0.65 0.18 200), oklch(0.55 0.2 240))",
    btnShadow: "0 4px 28px oklch(0.6 0.18 220 / 0.45)",
    dotShadow: "0 0 12px oklch(0.65 0.18 220 / 0.6)",
    subtitleColor: "oklch(0.65 0.18 220)",
  },
  {
    id: "reels",
    emoji: "🎬",
    title: "Reels",
    subtitle: "The future of short video",
    description:
      "Create stunning short-form videos, go viral in seconds, and unleash your creativity on the world.",
    glowColor:
      "radial-gradient(ellipse 60% 40% at 50% 30%, oklch(0.55 0.2 260 / 0.18) 0%, transparent 70%)",
    cardGradient:
      "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
    dotGradient:
      "linear-gradient(90deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
    btnGradient:
      "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
    btnShadow: "0 4px 28px oklch(0.6 0.18 260 / 0.45)",
    dotShadow: "0 0 12px oklch(0.65 0.18 260 / 0.6)",
    subtitleColor: "oklch(0.65 0.18 260)",
  },
  {
    id: "live",
    emoji: "🔴",
    title: "Live + Chat",
    subtitle: "Go live and connect in real time",
    description:
      "Stream live to your audience, receive gifts, and chat in real-time with friends around the world.",
    glowColor:
      "radial-gradient(ellipse 60% 40% at 50% 30%, oklch(0.55 0.22 320 / 0.18) 0%, transparent 70%)",
    cardGradient:
      "linear-gradient(135deg, oklch(0.6 0.22 310), oklch(0.5 0.2 340))",
    dotGradient:
      "linear-gradient(90deg, oklch(0.6 0.22 310), oklch(0.5 0.2 340))",
    btnGradient:
      "linear-gradient(135deg, oklch(0.6 0.22 310), oklch(0.5 0.2 340))",
    btnShadow: "0 4px 28px oklch(0.6 0.2 320 / 0.45)",
    dotShadow: "0 0 12px oklch(0.65 0.18 320 / 0.6)",
    subtitleColor: "oklch(0.65 0.18 320)",
  },
];

export default function OnboardingPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const router = useRouter();

  const slide = slides[current];
  const isLast = current === slides.length - 1;

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const handleNext = () => {
    if (current < slides.length - 1) {
      goTo(current + 1);
    } else {
      router.navigate({ to: "/login" });
    }
  };

  const handleSkip = () => {
    router.navigate({ to: "/login" });
  };

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      data-ocid="onboarding.page"
      style={{
        background:
          "linear-gradient(180deg, #0D1B2A 0%, #0D0D1A 40%, #0D0D0D 100%)",
      }}
    >
      {/* Background accent glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: slide.glowColor }}
        />
      </AnimatePresence>

      {/* Top bar — skip link */}
      <div className="relative z-10 flex justify-end px-6 pt-14">
        {!isLast && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={handleSkip}
            data-ocid="onboarding.skip_button"
            className="text-sm font-medium px-4 py-1.5 rounded-full transition-smooth hover:opacity-80"
            style={{
              color: "oklch(0.55 0 0)",
              fontFamily: "var(--font-body)",
              background: "oklch(0.14 0 0 / 0.6)",
              border: "1px solid oklch(0.25 0 0 / 0.4)",
            }}
          >
            Skip
          </motion.button>
        )}
      </div>

      {/* Slide area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="w-full max-w-sm flex flex-col items-center gap-8"
          >
            {/* Glass card */}
            <div
              className="w-full rounded-3xl px-8 py-10 flex flex-col items-center gap-6 text-center"
              style={{
                background: "oklch(0.105 0 0 / 0.75)",
                border: "1px solid oklch(0.22 0 0 / 0.5)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "0 8px 40px oklch(0 0 0 / 0.4), 0 0 0 1px oklch(0.22 0 0 / 0.3) inset",
              }}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 240 }}
                className="w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{
                  background: slide.cardGradient,
                  boxShadow: "0 0 32px oklch(0.6 0.2 260 / 0.35)",
                }}
              >
                <span
                  className="text-4xl leading-none"
                  role="img"
                  aria-label={slide.title}
                >
                  {slide.emoji}
                </span>
              </motion.div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{
                    color: slide.subtitleColor,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold"
                  style={{
                    color: "oklch(0.95 0 0)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="text-sm leading-relaxed"
                  style={{
                    color: "oklch(0.55 0 0)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {slide.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 pb-14">
        {/* Progress dots */}
        <div
          className="flex items-center gap-2.5"
          aria-label="Slide indicator"
          role="tablist"
        >
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              data-ocid={`onboarding.dot.${i + 1}`}
              onClick={() => goTo(i)}
              className="transition-smooth focus:outline-none focus-visible:ring-2 rounded-full"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background:
                  i === current ? slides[i].dotGradient : "oklch(0.22 0 0)",
                boxShadow: i === current ? slides[i].dotShadow : "none",
              }}
            />
          ))}
        </div>

        {/* CTA button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleNext}
          data-ocid={
            isLast ? "onboarding.get_started_button" : "onboarding.next_button"
          }
          className="w-full max-w-sm py-4 rounded-2xl font-semibold text-base text-white transition-smooth"
          style={{
            background: slide.btnGradient,
            boxShadow: slide.btnShadow,
            fontFamily: "var(--font-display)",
          }}
        >
          {isLast ? "Get Started 🚀" : "Next"}
        </motion.button>
      </div>
    </div>
  );
}
