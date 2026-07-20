import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /**
   * "light" renders a white version for dark backgrounds (header, footer,
   * mobile menu). "dark" keeps the original black-on-ivory art for light
   * backgrounds (the intro overlay).
   */
  variant?: "light" | "dark";
  /** Larger size when true (full lockup contexts); compact when false. */
  showWordmark?: boolean;
  className?: string;
  /** Render without a link wrapper — used inside the intro overlay. */
  asStatic?: boolean;
}

/**
 * Bright & Shine logo. The source art is a black monogram + wordmark on a light
 * background (non-transparent JPEG), so we adapt it per background:
 *  - light variant → invert + grayscale turns the marks white and drops the
 *    (now near-black) backdrop into the dark site background.
 *  - dark variant → multiply blend melts the light backdrop into the ivory page
 *    while preserving the original black + champagne artwork.
 */
export function Logo({
  variant = "dark",
  showWordmark = true,
  className = "",
  asStatic = false,
}: LogoProps) {
  const isLight = variant === "light";

  const mark = (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo-bs.jpeg"
        alt="Bright & Shine Teeth Whitening"
        width={1005}
        height={927}
        priority
        sizes="120px"
        className={`w-auto select-none ${showWordmark ? "h-12 lg:h-14" : "h-10"} ${
          isLight
            ? "[filter:invert(1)_grayscale(1)_contrast(1.05)]"
            : "mix-blend-multiply"
        }`}
      />
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
