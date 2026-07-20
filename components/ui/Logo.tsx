import Link from "next/link";

interface LogoProps {
  /** "light" renders white marks for dark backgrounds, "dark" renders black marks. */
  variant?: "light" | "dark";
  /** Show the "BRIGHT & SHINE / TEETH WHITENING" wordmark beside the monogram. */
  showWordmark?: boolean;
  className?: string;
  /** When true renders as a plain element (no link) — used inside the intro overlay. */
  asStatic?: boolean;
}

/**
 * Bright & Shine monogram, recreated as an inline SVG so it stays crisp on any
 * background. Swap `public/logo/*` and this component for the client's final art.
 */
export function Logo({
  variant = "dark",
  showWordmark = true,
  className = "",
  asStatic = false,
}: LogoProps) {
  const ink = variant === "light" ? "#FFFFFF" : "#0B0B0B";

  const mark = (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="h-10 w-10 shrink-0"
        role="img"
        aria-label="Bright & Shine monogram"
      >
        {/* Serif "B" */}
        <text
          x="8"
          y="86"
          fontFamily="var(--font-cormorant), Georgia, serif"
          fontSize="86"
          fontWeight="600"
          fill={ink}
        >
          B
        </text>
        {/* Serif "S" overlapping */}
        <text
          x="52"
          y="98"
          fontFamily="var(--font-cormorant), Georgia, serif"
          fontSize="86"
          fontWeight="600"
          fill={ink}
        >
          S
        </text>
        {/* Champagne ampersand accent */}
        <text
          x="58"
          y="44"
          fontFamily="var(--font-cormorant), Georgia, serif"
          fontSize="34"
          fontStyle="italic"
          fill="#B5A088"
        >
          &amp;
        </text>
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="font-serif text-lg font-semibold tracking-wide"
            style={{ color: ink }}
          >
            BRIGHT &amp; SHINE
          </span>
          <span
            className="font-sans text-[0.6rem] uppercase tracking-[0.35em]"
            style={{ color: variant === "light" ? "#C9B79E" : "#8F8F8F" }}
          >
            Teeth Whitening
          </span>
        </span>
      )}
    </span>
  );

  if (asStatic) return mark;

  return (
    <Link
      href="/"
      aria-label="Bright & Shine Teeth Whitening — home"
      className="btn-focus inline-flex rounded-md"
    >
      {mark}
    </Link>
  );
}
