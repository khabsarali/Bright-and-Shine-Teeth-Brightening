import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}
    >
      <p className={isDark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={`mt-4 text-4xl font-medium leading-[1.05] md:text-5xl lg:text-[3.25rem] ${
          isDark ? "text-white" : "text-black-pure"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            isDark ? "text-white/70" : "text-medium-gray"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
