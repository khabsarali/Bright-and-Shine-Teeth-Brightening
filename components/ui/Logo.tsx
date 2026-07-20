import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /**
   * "light" keeps the white artwork for dark backgrounds (header, footer,
   * mobile menu). "dark" inverts it to black for light backgrounds (the
   * intro overlay).
   */
  variant?: "light" | "dark";
  /** Larger size when true (full lockup contexts); compact when false. */
  showWordmark?: boolean;
  className?: string;
  /** Render without a link wrapper — used inside the intro overlay. */
  asStatic?: boolean;
}

/**
 * Bright & Shine logo — white monogram + wordmark on a black square canvas.
 * The source has generous black padding, so we crop to the horizontal content
 * band with a wide aspect-ratio box (object-cover trims the top/bottom black),
 * then blend the remaining black away:
 *  - light variant → `screen` drops the black, leaving the white logo.
 *  - dark variant → `invert` flips it to black, `multiply` drops the (now white)
 *    backdrop into the ivory page.
 */
export function Logo({
  variant = "dark",
  showWordmark = true,
  className = "",
  asStatic = false,
}: LogoProps) {
  const isLight = variant === "light";

  const mark = (
    <span
      className={`relative block ${showWordmark ? "h-10 lg:h-12" : "h-9"} ${
        isLight ? "mix-blend-screen" : "[filter:invert(1)] mix-blend-multiply"
      } ${className}`}
      style={{ aspectRatio: "1005 / 500" }}
    >
      <Image
        src="/images/bs-logo.png"
        alt="Bright & Shine Teeth Whitening"
        fill
        priority
        sizes="160px"
        className="select-none object-cover object-center"
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
