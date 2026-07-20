import type { LucideIcon } from "lucide-react";
import { Sparkles, ShieldCheck, UserRound, Star, Smile } from "lucide-react";

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    title: "Advanced Technology",
    description: "State-of-the-art whitening for superior results",
    icon: Sparkles,
  },
  {
    title: "Safe & Painless",
    description: "Gentle formulas that protect your enamel",
    icon: ShieldCheck,
  },
  {
    title: "Expert Care",
    description: "Trained professionals you can trust",
    icon: UserRound,
  },
  {
    title: "Visible Results",
    description: "Notice a brighter smile after just one visit",
    icon: Star,
  },
  {
    title: "Comfortable Experience",
    description: "Relaxing environment designed for you",
    icon: Smile,
  },
];
