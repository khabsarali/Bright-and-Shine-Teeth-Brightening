import type { LucideIcon } from "lucide-react";
import { CalendarCheck, ClipboardList, Sparkles, Smile } from "lucide-react";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description: "We evaluate your smile and discuss your goals.",
    icon: CalendarCheck,
  },
  {
    step: "02",
    title: "Personalized Plan",
    description: "We create a custom whitening plan for you.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Whitening Treatment",
    description: "Enjoy a comfortable, professional whitening session.",
    icon: Sparkles,
  },
  {
    step: "04",
    title: "Reveal Your Smile",
    description: "Walk out with a brighter, more confident you.",
    icon: Smile,
  },
];
