# Bright & Shine Teeth Whitening

A production-ready, luxury teeth-whitening website built with the Next.js App
Router. Editorial serif typography, a black / ivory / champagne palette, subtle
motion, and fully responsive, accessible components.

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** (custom brand design system)
- **Framer Motion** — subtle fade-up entrances, modal & menu transitions, logo intro
- **Swiper.js** — testimonials carousel
- **Lucide React** — line icons
- **next/font** — Cormorant Garamond (headings) + Inter (body/UI)
- **next/image** — optimized, responsive imagery

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Routes

| Route               | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `/`                 | Homepage (hero, benefits, results, process, treatments, testimonials, FAQ, CTA) |
| `/about`            | Brand story, stats, benefits & process                  |
| `/treatments`       | All treatments with detail cards                        |
| `/results`          | Before/after gallery with draggable sliders             |
| `/reviews`          | Full patient reviews                                    |
| `/faq`              | FAQ accordion + support card                            |
| `/contact`          | Contact details + validated contact form                |
| `/book-appointment` | Full-page booking form                                  |
| `/privacy`          | Privacy policy (placeholder copy)                       |
| `/terms`            | Terms of service (placeholder copy)                     |

## Key Features

- Opening **logo intro** animation (once per session, respects reduced motion)
- Sticky header — transparent over hero, blurred black after scroll
- Mobile navigation drawer
- Functional **before/after sliders** (pointer, touch, and keyboard)
- **Testimonial carousel** with custom controls
- **FAQ accordion** (one open at a time, animated)
- Global **booking modal** opened from any "Book" button
- Form validation with success/error states (booking, contact, newsletter)
- Fade-up on scroll, accessible focus states, `prefers-reduced-motion` support
- No horizontal overflow; static-rendered pages

## Design System

Brand tokens live in `tailwind.config.ts` and `app/globals.css`:

- **Ink:** `#050505` / `#0B0B0B` / `#171717`
- **Neutrals:** `#F8F6F2` ivory · `#F1EEE8` cream · `#E6E3DE` soft gray · `#8F8F8F` medium gray
- **Accent:** `#B5A088` champagne
- No blue anywhere.

## Project Structure

```
app/                     # routes (App Router)
components/
  layout/                # Header, MobileMenu, Footer, LogoIntro
  sections/              # homepage sections
  ui/                    # reusable primitives, cards, forms, modal
data/                    # treatments, testimonials, faqs, results, benefits, process, navigation
public/
  logo/                  # drop final logo art here
  images/                # drop final photography here
```

## Assets to Replace Before Launch

The build ships with royalty-free Unsplash placeholders. Swap in the client's
final assets:

1. **Logo** — currently an inline SVG in `components/ui/Logo.tsx`. Add the real
   art to `public/logo/` (see the README there).
2. **Hero image** — `components/sections/HeroSection.tsx`
3. **Before/After results** — `data/results.ts` (real patient photos, with consent)
4. **Patient profile photos** — `data/testimonials.ts`
5. **Clinic professional** — `components/ui/ContactSupportCard.tsx`
6. **About studio photo** — `app/about/page.tsx`
7. **Final CTA smile (B&W)** — `components/sections/FinalCTA.tsx`
8. **Business details** — phone, email, address, hours in `data/navigation.ts`
9. **Privacy / Terms** — replace placeholder copy in `app/privacy` and `app/terms`

Once local images are used, you can remove the Unsplash `remotePatterns` entry
from `next.config.mjs`.
