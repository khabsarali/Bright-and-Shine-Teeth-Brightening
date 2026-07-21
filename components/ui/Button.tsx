import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "accent" | "outline" | "outline-dark" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "btn-focus inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-[0.14em] rounded-xl transition-all duration-300 ease-lux disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // White pill on dark / black pill on light — matches reference CTAs
  primary:
    "bg-white text-black-pure hover:bg-champagne hover:text-white shadow-soft",
  // Brand-champagne filled CTA — used for the primary hero action
  accent:
    "bg-champagne text-white hover:bg-champagne-light hover:text-white shadow-soft hover:shadow-soft-lg",
  // Outlined button used on dark hero
  outline:
    "border border-white/40 text-white hover:border-champagne hover:text-champagne-light",
  // Outlined button used on light backgrounds
  "outline-dark":
    "border border-black/20 text-black-pure hover:border-champagne hover:text-champagne",
  ghost: "text-black-pure hover:text-champagne",
};

const sizes: Record<Size, string> = {
  sm: "text-[0.7rem] px-5 py-2.5",
  md: "text-xs px-7 py-3.5",
  lg: "text-sm px-9 py-4",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  /** Anchor attributes forwarded to the underlying link (e.g. external maps). */
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
