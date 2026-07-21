"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen preloader: the white brand logo, centered on a dark background,
 * fades + scales in while initial assets load, then fades out and unmounts.
 * Mounted once in the root layout, so it does not reappear on internal
 * navigation. Respects prefers-reduced-motion via globals.css.
 */
export function LogoIntro() {
  const [isLoading, setIsLoading] = useState(true);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    const minimumDuration = 900; // avoid a flash on fast connections
    const maxDuration = 1500; // never hold longer than ~1.5s

    const hide = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(minimumDuration - elapsed, 0);
      window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }
    const cap = window.setTimeout(() => setIsLoading(false), maxDuration);

    return () => {
      window.removeEventListener("load", hide);
      window.clearTimeout(cap);
    };
  }, []);

  // Lock scrolling only while the preloader is active.
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (gone) return null;

  return (
    <div
      className={`site-preloader${isLoading ? "" : " is-hidden"}`}
      aria-hidden="true"
      onTransitionEnd={() => {
        if (!isLoading) setGone(true);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/white-logo.png"
        alt="Bright and Shine Teeth Whitening"
        className="preloader-logo"
      />
    </div>
  );
}
