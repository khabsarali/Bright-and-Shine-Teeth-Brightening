"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BookingButton } from "@/components/ui/BookingButton";

const stats = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "4.9 ★", label: "Google Rating" },
  { value: "15+", label: "Years of Excellence" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-black-pure">
      {/* Oversized BS monogram watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-1/2 hidden -translate-y-1/2 select-none font-serif text-[38rem] font-semibold leading-none text-white/[0.03] lg:block"
      >
        BS
      </span>

      <div className="container-lux relative grid min-h-[760px] grid-cols-1 items-center gap-10 pb-16 pt-32 lg:min-h-[850px] lg:grid-cols-2 lg:gap-8 lg:pb-0 lg:pt-20">
        {/* Left — copy */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-xl"
        >
          <p className="eyebrow-dark">Luxury Teeth Whitening</p>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Brighter Smile.
            <br />
            Bolder You.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Advanced whitening treatments for stunning, long-lasting results in a
            safe, comfortable experience.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <BookingButton size="lg">Book Appointment</BookingButton>
            <Button href="/treatments" variant="outline" size="lg">
              View Treatments
            </Button>
          </div>

          <dl className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
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

        {/* Right — hero image */}
        <div className="relative h-[420px] w-full sm:h-[520px] lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=85"
              alt="Radiant woman with a bright, confident smile"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            {/* Gradient blend into the black background */}
            <div className="absolute inset-0 bg-gradient-to-r from-black-pure via-black-pure/50 to-transparent lg:via-black-pure/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black-pure/70 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
