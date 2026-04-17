# Nexiqo — Design Brief

## Purpose
Dark-themed social media platform emphasizing short video reels with immersive, tech-forward experience. Core differentiator: neon blue–purple gradient accent system with glass morphism effects and fluid animations.

## Tone & Aesthetic
Bold, modern, tech-forward, energetic. Execution strategy: maximize visual hierarchy through color contrast (neon blue on near-black) rather than saturation. Smooth, choreographed transitions reflect "flow" through social graph.

## Color Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Background | `0.078 0 0` | Full-screen dark base (#0D0D0D equivalent) |
| Card | `0.105 0 0` | Elevated surfaces (#1A1A1A equivalent) |
| Primary (Neon Blue) | `0.65 0.18 240` | CTAs, active states, highlight accents |
| Secondary (Purple) | `0.50 0.20 290` | Gradient overlays, secondary interactive elements |
| Accent | `0.65 0.18 240` | Same as primary (neon blue feedback) |
| Foreground | `0.95 0 0` | Primary text (near white) |
| Muted | `0.22 0 0` | Secondary text, inactive borders |
| Border | `0.15 0 0` | Subtle dividers (dark on dark) |
| Destructive | `0.55 0.22 25` | Warnings, delete actions (warm red) |
| Success | `0.65 0.18 130` | Confirmations (vibrant green) |

## Typography

| Layer | Font | Scale | Usage |
|-------|------|-------|-------|
| Display | Space Grotesk | 32px Bold | H1 headers, brand identity |
| Heading | Space Grotesk | 20px SemiBold | H2 section titles, usernames |
| Body | General Sans | 16px Medium | Main content, post text |
| Small | General Sans | 14px Regular | Secondary labels, metadata |
| Meta | General Sans | 12px Regular | Timestamps, engagement counts |
| Mono | JetBrains Mono | 12–14px | Debug info, code snippets |

## Elevation & Depth

| Surface | Treatment | Shadow |
|---------|-----------|--------|
| Background | Solid `#0D0D0D` | None |
| Card | Solid `#1A1A1A` + 1px border `#262626` | `shadow-sm` (subtle) |
| Popover/Modal | Glass effect (`bg-card/70 backdrop-blur-md`) | `shadow-elevated` (8–12px blur) |
| Header/Footer | Glass effect + top/bottom border | `shadow-glass` (blue-tinted) |
| Bottom Nav | Glass effect, floating above content | `shadow-glass` + `animate-float` |
| CTA (Create Button) | Glass effect + primary color | `shadow-elevated` + `pulse-glow` |

## Structural Zones

| Zone | Background | Border | Pattern |
|------|-----------|--------|---------|
| Header (Top Nav) | Glass surface | 1px bottom border `border/30` | Menu left, search center, actions right |
| Main Content | Solid background | None | Card grid or infinite scroll |
| Bottom Navigation | Glass floating surface | 1px top border `border/30` | 5 tabs: Home, Reels, Create (+center), Friends, Chat |
| Create Overlay | Popover glass + backdrop blur | None | Centered floating menu (Camera, Reel, Upload, Go Live, Canvas) |
| Reel Player | Full-screen background | None | Video center, action buttons right (float), username bottom-left |
| Chat List | Card stack | 1px dividers | Profile + last message + online status |

## Component Patterns

- **Button (Primary)**: `bg-primary text-accent-foreground rounded-lg transition-smooth hover:scale-105`
- **Button (Secondary)**: `bg-card border border-border text-foreground transition-smooth`
- **Card**: `bg-card rounded-lg border border-border/30 shadow-sm`
- **Glass Surface**: `bg-card/70 backdrop-blur-md border border-border/20`
- **Input**: `bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground`
- **Badge (Active)**: `bg-primary text-accent-foreground rounded-full text-xs font-semibold`

## Motion & Animation

- **Base Transition**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (smooth easing)
- **Button Interactions**: `hover:scale-105 active:scale-95` (tactile feedback)
- **Entrance**: Fade-in + scale (200ms) on cards, modals
- **Reel Transitions**: Cross-fade (300ms) between video cuts
- **Create Button**: `animate-pulse-glow` (2s cycle) + `animate-float` (3s gentle bob)
- **Micro-interactions**: Scale on hover, color shift on active, shadow boost on focus

## Responsive Design

- **Mobile-first** breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- **Bottom nav**: Sticky, always visible on mobile; dock to bottom on desktop
- **Reel player**: Full-screen on mobile; 16:9 aspect-ratio card on desktop
- **Feed**: Single column mobile; 2-column grid on tablet; 3-column on desktop

## Constraints & Anti-Patterns

- ✗ No Bootstrap blue or default Tailwind colors
- ✗ No uniform `rounded-md` — vary: `rounded-none` (0px), `rounded-md` (8px), `rounded-lg` (16px)
- ✗ No scattered animations — all choreographed to 3–5 key transitions
- ✗ No full-page gradient backgrounds — use layered depth via surfaces
- ✗ No rainbow palettes — strict 5-color limit (blue, purple, red, green, grey)
- ✓ Glass morphism only on interactive/floating surfaces (not background)
- ✓ Neon blue feedback on every interactive element
- ✓ Consistent 16px radius on primary cards
- ✓ Soft shadows (not hard drops) for elevated surfaces

## Signature Detail

**Neon Blue Accent Propagation**: Every interactive element (button, link, active tab, like state) glows with primary neon blue. This creates a cohesive "AI-engaged" visual language where the user instinctively knows what's interactive. Pair with gentle scale animation on hover to reinforce tactile feedback.

**AI Feed Badge**: Subtle star or algorithm icon on AI-ranked posts in feed, using primary color — signals intelligent curation without visual clutter.

**Floating CTA Choreography**: The centered Create button pulses gently and floats vertically (3s cycle), drawing attention without distraction. Tap reveals radial popup menu with 5 creation options.

## Implemented Files

- `src/frontend/src/index.css` — OKLCH tokens, @font-face declarations, utility classes
- `src/frontend/tailwind.config.js` — Custom shadows, keyframes, animations
- `src/frontend/public/assets/fonts/` — Space Grotesk, General Sans, JetBrains Mono
