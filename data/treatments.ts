import type { LucideIcon } from "lucide-react";
import { Zap, Sparkles, Crown } from "lucide-react";

export interface Treatment {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  /** Longer copy for the dedicated treatments page. */
  detail: string;
  /** Human-readable duration, e.g. "40 minutes". */
  duration: string;
  /** Numeric duration in minutes — used by the booking summary. */
  durationMinutes: number;
}

/**
 * Professional whitening sessions, distinguished by treatment time.
 * Pricing is intentionally NOT stored here — pricing (where available) is
 * surfaced later in the location-aware booking flow, not on the homepage.
 */
export const treatments: Treatment[] = [
  {
    slug: "quick-session",
    name: "Quick Session",
    description: "A fast, refreshing brightening boost.",
    icon: Zap,
    detail:
      "A fast, refreshing top-up — ideal for maintaining your brightness or a pre-event boost when you're short on time.",
    duration: "20 minutes",
    durationMinutes: 20,
  },
  {
    slug: "regular-session",
    name: "Regular Session",
    description: "Our balanced treatment for noticeable results.",
    icon: Sparkles,
    detail:
      "Our balanced session for noticeable, even brightening — a comfortable treatment suited to most smiles.",
    duration: "40 minutes",
    durationMinutes: 40,
  },
  {
    slug: "platinum-session",
    name: "Platinum Session",
    description: "Our most complete whitening experience.",
    icon: Crown,
    detail:
      "Our most complete whitening experience, with extended treatment time for our deepest results in a single relaxing visit.",
    duration: "60 minutes",
    durationMinutes: 60,
  },
];
