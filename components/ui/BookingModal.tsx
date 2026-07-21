"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useId, useRef } from "react";
import { useBooking } from "./BookingProvider";
import { BookingFlow } from "./BookingFlow";

export function BookingModal() {
  const { isOpen, closeBooking, selectedTreatment, selectedLocationId } =
    useBooking();
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeBooking]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close booking dialog"
            onClick={closeBooking}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-card-lg border border-champagne/20 bg-ivory shadow-soft-lg"
          >
            <button
              type="button"
              onClick={closeBooking}
              aria-label="Close"
              className="btn-focus absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/80 text-medium-gray transition-colors hover:bg-soft-gray hover:text-black-pure"
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="overflow-y-auto p-8">
              <p className="eyebrow">Book Appointment</p>
              <h2
                id={titleId}
                className="mt-3 font-serif text-3xl font-medium text-black-pure"
              >
                Reserve Your Visit
              </h2>
              <p className="mb-6 mt-2 text-sm text-medium-gray">
                Choose your session and location, then pick a time that suits you.
              </p>

              <BookingFlow
                initialTreatment={selectedTreatment}
                initialLocationId={selectedLocationId}
                onDone={closeBooking}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
