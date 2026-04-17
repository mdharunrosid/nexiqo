import { useRouter } from "@tanstack/react-router";
import { Eye, EyeOff, Globe, Lock, Mail, Shield, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NexiqoLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="logo-grad"
        x1="0"
        y1="0"
        x2="32"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="oklch(0.65 0.18 240)" />
        <stop offset="1" stopColor="oklch(0.5 0.2 290)" />
      </linearGradient>
    </defs>
    <path d="M6 6h8l10 20h-8L6 6z" fill="url(#logo-grad)" />
    <path d="M18 6h8L16 26l-4-8 6-12z" fill="url(#logo-grad)" opacity="0.6" />
  </svg>
);

const inputBase =
  "w-full py-3.5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-smooth focus:ring-2";

interface FieldProps {
  icon: React.ReactNode;
  trailingIcon?: React.ReactNode;
  [key: string]: unknown;
}

function Field({ icon, trailingIcon, ...props }: FieldProps) {
  return (
    <div className="relative">
      <span
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: "oklch(var(--muted-foreground))" }}
      >
        {icon}
      </span>
      <input
        className={`${inputBase} pl-11 ${trailingIcon ? "pr-11" : "pr-4"}`}
        style={{
          background: "oklch(var(--card))",
          border: "1px solid oklch(var(--border) / 0.5)",
          fontFamily: "var(--font-body)",
          boxShadow: "inset 0 1px 4px oklch(0 0 0 / 0.2)",
        }}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
      {trailingIcon && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2">
          {trailingIcon}
        </span>
      )}
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);

  // Login fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup fields
  const [username, setUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.trim() && loginPassword.trim()) {
      router.navigate({ to: "/home" });
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && signupEmail.trim() && signupPassword.trim()) {
      router.navigate({ to: "/home" });
    }
  };

  const eyeToggle = (show: boolean) => (
    <button
      type="button"
      data-ocid="login.show_password.toggle"
      onClick={() => setShowPassword(!show)}
      className="text-muted-foreground hover:text-foreground transition-colors p-1"
      aria-label={show ? "Hide password" : "Show password"}
    >
      {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
    </button>
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-10 overflow-hidden relative"
      style={{ background: "oklch(var(--background))" }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.65 0.18 240 / 0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 100%, oklch(0.5 0.2 290 / 0.1) 0%, transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 180,
          damping: 22,
        }}
        className="w-full max-w-sm relative z-10"
      >
        {/* Logo */}
        <motion.div
          className="flex flex-col items-center gap-3 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
              boxShadow:
                "0 0 32px oklch(0.65 0.18 240 / 0.45), 0 8px 24px oklch(0 0 0 / 0.4)",
            }}
          >
            <NexiqoLogo />
          </div>
          <div className="text-center">
            <h1
              className="text-3xl font-bold text-gradient leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nexiqo
            </h1>
            <p
              className="text-xs mt-1"
              style={{
                color: "oklch(var(--muted-foreground))",
                fontFamily: "var(--font-body)",
              }}
            >
              Create • Connect • Go Viral
            </p>
          </div>
        </motion.div>

        {/* Glass card */}
        <div
          className="glass-effect overflow-hidden"
          style={{
            boxShadow:
              "0 8px 40px oklch(0 0 0 / 0.5), 0 0 0 1px oklch(var(--border) / 0.15)",
          }}
        >
          {/* Tab switcher */}
          <div
            className="flex p-1.5 m-4 mb-0 rounded-xl"
            style={{ background: "oklch(var(--muted) / 0.6)" }}
          >
            {(["login", "signup"] as const).map((t, i) => (
              <button
                key={t}
                type="button"
                data-ocid={`login.toggle.${i === 0 ? "signin" : "signup"}`}
                onClick={() => {
                  setTab(t);
                  setShowPassword(false);
                }}
                className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-smooth relative"
                style={{
                  fontFamily: "var(--font-display)",
                  color:
                    tab === t
                      ? "oklch(0.98 0 0)"
                      : "oklch(var(--muted-foreground))",
                  background: "transparent",
                }}
              >
                {tab === t && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                      boxShadow: "0 2px 12px oklch(0.65 0.18 240 / 0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
                <span className="relative z-10">
                  {i === 0 ? "Sign In" : "Sign Up"}
                </span>
              </button>
            ))}
          </div>

          {/* Form area */}
          <div className="p-4 pt-5">
            <AnimatePresence mode="wait">
              {tab === "login" ? (
                <motion.form
                  key="login"
                  onSubmit={handleLogin}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-3"
                >
                  <Field
                    icon={<Mail className="w-4 h-4" />}
                    type="email"
                    placeholder="Email or username"
                    value={loginEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLoginEmail(e.target.value)
                    }
                    data-ocid="login.email.input"
                    autoComplete="email"
                    required
                  />

                  <Field
                    icon={<Lock className="w-4 h-4" />}
                    trailingIcon={eyeToggle(showPassword)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setLoginPassword(e.target.value)
                    }
                    data-ocid="login.password.input"
                    autoComplete="current-password"
                    required
                  />

                  <div className="flex justify-end">
                    <button
                      type="button"
                      data-ocid="login.forgot_password.link"
                      className="text-xs font-medium transition-smooth hover:opacity-80"
                      style={{
                        color: "oklch(0.65 0.18 240)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    data-ocid="login.submit.button"
                    className="w-full py-3.5 rounded-xl font-semibold text-white transition-smooth button-interactive mt-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      background:
                        "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                      boxShadow: "0 4px 24px oklch(0.65 0.18 240 / 0.4)",
                    }}
                  >
                    Sign In
                  </button>

                  <Divider />

                  <GoogleButton
                    onClick={() => router.navigate({ to: "/home" })}
                  />
                </motion.form>
              ) : (
                <motion.form
                  key="signup"
                  onSubmit={handleSignup}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-3"
                >
                  <Field
                    icon={<User className="w-4 h-4" />}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUsername(e.target.value)
                    }
                    data-ocid="signup.username.input"
                    autoComplete="username"
                    required
                  />

                  <Field
                    icon={<Mail className="w-4 h-4" />}
                    type="text"
                    placeholder="Email or phone"
                    value={signupEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSignupEmail(e.target.value)
                    }
                    data-ocid="signup.email.input"
                    autoComplete="email"
                    required
                  />

                  <Field
                    icon={<Lock className="w-4 h-4" />}
                    trailingIcon={eyeToggle(showPassword)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={signupPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSignupPassword(e.target.value)
                    }
                    data-ocid="signup.password.input"
                    autoComplete="new-password"
                    required
                  />

                  {/* Privacy toggle */}
                  <div
                    className="flex items-center justify-between rounded-xl px-4 py-3"
                    style={{
                      background: "oklch(var(--card))",
                      border: "1px solid oklch(var(--border) / 0.4)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      {isPrivate ? (
                        <Shield
                          className="w-4 h-4"
                          style={{ color: "oklch(0.65 0.18 240)" }}
                        />
                      ) : (
                        <Globe
                          className="w-4 h-4"
                          style={{ color: "oklch(0.65 0.22 150)" }}
                        />
                      )}
                      <span
                        className="text-sm font-medium"
                        style={{
                          color: "oklch(var(--foreground))",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {isPrivate ? "🔒 Private Account" : "🌍 Public Account"}
                      </span>
                    </div>
                    <button
                      type="button"
                      data-ocid="signup.account_type.toggle"
                      role="switch"
                      aria-checked={isPrivate}
                      onClick={() => setIsPrivate(!isPrivate)}
                      className="w-12 h-6 rounded-full relative transition-smooth flex-shrink-0"
                      style={{
                        background: isPrivate
                          ? "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))"
                          : "oklch(var(--muted))",
                        boxShadow: isPrivate
                          ? "0 0 12px oklch(0.65 0.18 240 / 0.4)"
                          : "none",
                      }}
                    >
                      <motion.span
                        layout
                        className="absolute top-0.5 bottom-0.5 w-5 rounded-full"
                        style={{ background: "oklch(0.98 0 0)" }}
                        animate={{
                          left: isPrivate ? "calc(100% - 22px)" : "2px",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    </button>
                  </div>

                  <button
                    type="submit"
                    data-ocid="signup.submit.button"
                    className="w-full py-3.5 rounded-xl font-semibold text-white transition-smooth button-interactive mt-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      background:
                        "linear-gradient(135deg, oklch(0.65 0.18 240), oklch(0.5 0.2 290))",
                      boxShadow: "0 4px 24px oklch(0.65 0.18 240 / 0.4)",
                    }}
                  >
                    Create Account
                  </button>

                  <Divider />

                  <GoogleButton
                    onClick={() => router.navigate({ to: "/home" })}
                  />
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Terms footnote */}
        <p
          className="text-center text-xs mt-5 leading-relaxed px-4"
          style={{
            color: "oklch(var(--muted-foreground))",
            fontFamily: "var(--font-body)",
          }}
        >
          By continuing you agree to our{" "}
          <button
            type="button"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "oklch(0.65 0.18 240)" }}
          >
            Terms
          </button>{" "}
          and{" "}
          <button
            type="button"
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            style={{ color: "oklch(0.65 0.18 240)" }}
          >
            Privacy Policy
          </button>
        </p>
      </motion.div>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 my-1">
      <div
        className="flex-1 h-px"
        style={{ background: "oklch(var(--border) / 0.4)" }}
      />
      <span
        className="text-xs"
        style={{
          color: "oklch(var(--muted-foreground))",
          fontFamily: "var(--font-body)",
        }}
      >
        or
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: "oklch(var(--border) / 0.4)" }}
      />
    </div>
  );
}

function GoogleButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      data-ocid="login.google.button"
      onClick={onClick}
      className="w-full py-3.5 rounded-xl font-medium text-foreground transition-smooth button-interactive flex items-center justify-center gap-3"
      style={{
        background: "oklch(var(--card))",
        border: "1px solid oklch(var(--border) / 0.5)",
        fontFamily: "var(--font-body)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 flex-shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
      Continue with Google
    </button>
  );
}
