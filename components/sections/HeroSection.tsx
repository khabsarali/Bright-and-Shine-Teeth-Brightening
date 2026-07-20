"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BookingButton } from "@/components/ui/BookingButton";

const stats = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "4.9 ★", label: "Google Rating" },
  { value: "15+", label: "Years of Excellence" },
];

/**
 * The lady is rendered as a full-bleed CSS background (see `.hero-bg` in
 * globals.css). `--hero-img` layers the client's uploaded image over a
 * temporary Unsplash fallback — drop the real photo at
 * `public/images/hero-lady.jpg` and it takes over automatically.
 */
const heroImageLayers = "url('/images/hero-lady.png')";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="hero-bg relative flex min-h-[720px] items-center overflow-hidden md:min-h-[720px] lg:min-h-[760px]"
      style={{ ["--hero-img" as string]: heroImageLayers }}
    >
      {/* Subtle oversized BS monogram watermark behind the lady */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-1/2 hidden -translate-y-1/2 select-none font-serif text-[34rem] font-semibold leading-none text-white/[0.03] lg:block"
      >
        BS
      </span>

      <div className="container-lux relative z-10 py-24 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="eyebrow-dark">Luxury Teeth Whitening</p>

          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Brighter Smile.
            <br />
            Bolder You.
          </h1>

          <p className="mt-6 max-w-[430px] text-base leading-relaxed text-white/75 md:text-[1.0625rem]">
            Advanced whitening treatments for stunning, long-lasting results in a
            safe, comfortable experience.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <BookingButton size="lg">Book Appointment</BookingButton>
            <Button href="/treatments" variant="outline" size="lg">
              View Treatments
            </Button>
          </div>

          <dl className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6 border-t border-white/10 pt-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i > 0 ? "border-l border-white/15 pl-8" : undefined
                }
              >
                <dt className="font-serif text-3xl font-medium text-white">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
