"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { treatments } from "@/data/treatments";
import { useBooking } from "./BookingProvider";
import { Button } from "./Button";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function BookingModal() {
  const { isOpen, closeBooking, selectedTreatment } = useBooking();
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  // Reset internal state whenever the modal reopens.
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError(null);
    }
  }, [isOpen]);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (!name || !email || !phone) {
      setError("Please complete all required fields.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

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
            className="relative w-full max-w-lg rounded-card-lg border border-champagne/20 bg-ivory p-8 shadow-soft-lg"
          >
            <button
              type="button"
              onClick={closeBooking}
              aria-label="Close"
              className="btn-focus absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-medium-gray transition-colors hover:bg-soft-gray hover:text-black-pure"
            >
              <X size={18} aria-hidden="true" />
            </button>

            {submitted ? (
              <div className="py-6 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-white">
                  <Check size={26} aria-hidden="true" />
                </span>
                <h2
                  id={titleId}
                  className="mt-5 font-serif text-3xl font-medium text-black-pure"
                >
                  Request Received
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-medium-gray">
                  Thank you! Our team will contact you shortly to confirm your
                  appointment and answer any questions.
                </p>
                <Button
                  className="mt-7"
                  variant="primary"
                  onClick={closeBooking}
                >
                  Done
                </Button>
              </div>
            ) : (
              <>
                <p className="eyebrow">Book Appointment</p>
                <h2
                  id={titleId}
                  className="mt-3 font-serif text-3xl font-medium text-black-pure"
                >
                  Reserve Your Visit
                </h2>
                <p className="mt-2 text-sm text-medium-gray">
                  Share your details and we&apos;ll be in touch to confirm.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4" noValidate>
                  <Field label="Full Name" name="name" type="text" autoComplete="name" />
                  <Field label="Email" name="email" type="email" autoComplete="email" />
                  <Field label="Phone" name="phone" type="tel" autoComplete="tel" />

                  <label className="flex flex-col gap-1.5">
                    <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
                      Treatment
                    </span>
                    <select
                      name="treatment"
                      defaultValue={selectedTreatment ?? treatments[0].name}
                      className="btn-focus rounded-xl border border-soft-gray bg-white px-4 py-3 text-sm text-black-pure"
                    >
                      {treatments.map((t) => (
                        <option key={t.slug} value={t.name}>
                          {t.name} — {t.price}
                        </option>
                      ))}
                    </select>
                  </label>

                  {error && (
                    <p role="alert" className="text-sm font-medium text-red-700">
                      {error}
                    </p>
                  )}

                  <Button className="mt-2 w-full" variant="primary" size="lg">
                    Confirm Booking
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="btn-focus rounded-xl border border-soft-gray bg-white px-4 py-3 text-sm text-black-pure placeholder:text-medium-gray"
      />
    </label>
  );
}
