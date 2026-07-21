import type { LucideIcon } from "lucide-react";
import { Sparkles, Sun, Gem, Crown } from "lucide-react";

export interface Treatment {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  /** Longer copy for the dedicated treatments page. */
  detail: string;
  duration: string;
}

export const treatments: Treatment[] = [
  {
    slug: "in-office-whitening",
    name: "In-Office Whitening",
    description: "Fast, powerful results in just one visit.",
    icon: Sparkles,
    detail:
      "Our signature professional-grade treatment brightens your smile by several shades in a single relaxing session, supervised by trained specialists.",
    duration: "60 minutes",
  },
  {
    slug: "laser-whitening",
    name: "Laser Whitening",
    description: "Advanced laser technology for enhanced results.",
    icon: Sun,
    detail:
      "Precision laser activation accelerates the whitening gel for our most dramatic, longest-lasting transformation with maximum comfort.",
    duration: "75 minutes",
  },
  {
    slug: "led-whitening",
    name: "LED Whitening",
    description: "Gentle LED light for effective and long-lasting results.",
    icon: Gem,
    detail:
      "A gentle cool-light treatment ideal for sensitive smiles — effective, comfortable, and beautifully consistent.",
    duration: "50 minutes",
  },
  {
    slug: "touch-up-kit",
    name: "Touch-Up Kit",
    description: "Maintain your brightness at home with ease.",
    icon: Crown,
    detail:
      "Custom-fit trays and premium gel to preserve your radiant results from the comfort of home between visits.",
    duration: "At home",
  },
];
