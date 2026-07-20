# Image assets

Placeholder imagery is loaded from Unsplash (configured in `next.config.mjs`).
Replace with the client's final photography before launch:

- Hero — luxury smiling woman (`components/sections/HeroSection.tsx`)
- Before/After results (`data/results.ts`)
- Patient profile photos (`data/testimonials.ts`)
- Clinic professional (`components/ui/ContactSupportCard.tsx`)
- About studio photo (`app/about/page.tsx`)
- Final CTA black-and-white smile (`components/sections/FinalCTA.tsx`)

When you add local files here, reference them as `/images/<file>` and you can
remove the Unsplash `remotePatterns` entry from `next.config.mjs`.
