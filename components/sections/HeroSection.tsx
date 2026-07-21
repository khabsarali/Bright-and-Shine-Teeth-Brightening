"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BookingButton } from "@/components/ui/BookingButton";

/**
 * The subject in hero-bg.png sits on the right of the frame with open space on
 * the left. It is rendered as a full-bleed CSS background (see `.hero-bg` in
 * globals.css); `--hero-img` supplies the image path. A left-to-right dark
 * gradient keeps the left-aligned content readable while the subject on the
 * right stays clearly visible.
 */
const heroImageLayers = "url('/images/hero-bg.png')";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const item = reduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      };

  // Subtle fade + scale-in for the brand logo.
  const logoItem = reduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, scale: 0.92 },
        show: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section
      className="hero-bg relative flex min-h-[750px] items-center overflow-hidden md:min-h-[90vh]"
      style={{ ["--hero-img" as string]: heroImageLayers }}
    >
      <div className="container-lux relative z-10 py-24 lg:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[600px]"
        >
          {/* Brand lockup — the official black logo on its white background,
              held in a large white panel so it reads over the dark hero. */}
          <motion.div
            variants={logoItem}
            className="rounded-card-lg border border-champagne/15 bg-white p-10 shadow-soft-lg sm:p-12"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/white-logo.png"
              alt="Bright and Shine Teeth Whitening"
              className="hero-logo"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 max-sm:items-center sm:flex-row sm:flex-wrap sm:items-center"
          >
            <BookingButton variant="accent" size="lg">
              Book Your Appointment
            </BookingButton>
            <Button href="/treatments" variant="outline" size="lg">
              Explore Treatments
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
