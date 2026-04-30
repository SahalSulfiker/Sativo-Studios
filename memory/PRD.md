# Sativo Studios — Marketing Website PRD

## Original problem statement
Professional, corporate, Apple-style website for "Sativo Studios" (a web/digital studio).
Reference: https://satiostudio.com/

Sections:
1. **Hero** — logo, brand name, services as a single elegant paragraph (NOT bullet points).
2. **Works/Portfolio** — 2 work cards now, future-ready for "show more". On hover: preview the website's hero, then a description with features. Creative interaction.
3. **About us** — new enthusiastic startup copy.
4. **Contact** — Name, Phone, Message. Send buttons open Gmail compose and WhatsApp pre-filled.

Constraints:
- Fixed background image with parallax across sections.
- Apple-style elegant + professional.
- Optimised for PC, Android, iOS.
- Light/white minimal with blue accents (#1A6BFF).
- No backend (frontend-only).

## Architecture
- React (CRA + craco), TailwindCSS, Shadcn/UI components, framer-motion, lucide-react.
- Single-page site, all sections on `/`.
- Frontend-only (no backend storage). Contact form opens `mail.google.com` compose and `wa.me/919061673057`.
- Fonts: Outfit (heading) + Manrope (body) via Google Fonts.
- Brand color: `#1A6BFF`.

## What's implemented (v1 — Feb 2026)
- Custom SVG logo: SATIVO with the "A" replaced by a blue right-triangle play icon and "STUDIOS" subtitle.
- Sticky glass header with smooth scroll nav and "Let's Talk" CTA.
- Hero with eyebrow chip, large logo, headline ("We take your brand to the next level"), services paragraph, dual CTAs, animated scroll cue.
- Animated black marquee strip listing services.
- Portfolio: 2 bento-style cards with browser-chrome preview frames; hover slides up a glass overlay revealing description + 4 feature pills. Disabled "More works coming soon" placeholder for future expansion.
- About: split layout, 3 pillar cards (Built to launch / Made with care / Always your partner) + 3-stat strip.
- Contact: split card — dark left panel with Gmail + Phone direct links, right form with Name/Phone/Message; **Send via Gmail** opens Gmail compose, **Send via WhatsApp** opens wa.me with pre-filled text. Inline validation.
- Footer with email, phone, back-to-top.
- Fixed parallax backgrounds (3 layers crossfade as you scroll), white vignette, blue radial glows.
- All interactive elements have unique `data-testid`s.
- Fully responsive (mobile/tablet/desktop), Apple-style motion via framer-motion.

## Backlog
- P1: Replace placeholder portfolio items with real client URLs (iframe support already wired via `previewUrl`). Wire "Show more works" once 5+ projects exist.
- P1: Add OG/meta tags + favicon using SATIVO triangle logo.
- P2: Light/dark theme toggle.
- P2: Backend lead capture (e.g., to Resend/SendGrid) so submissions are never lost if a user closes Gmail/WhatsApp.
- P2: Case-study sub-pages (`/work/:id`) with deeper write-ups.
- P2: Subtle grain/noise on hero, custom cursor, mobile menu polish.

## Next tasks
- Gather real project URLs + client logos.
- Add Google Analytics / Plausible.
- Domain hookup + Emergent deployment.
