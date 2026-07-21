"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { treatments } from "@/data/treatments";
import { Button } from "./Button";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Full-page booking form used on /book-appointment (mirrors the modal). */
export function InlineBookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  if (submitted) {
    return (
      <div className="rounded-card border border-champagne/25 bg-white p-12 text-center shadow-soft">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-champagne text-white">
          <Check size={30} aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-serif text-3xl font-medium text-black-pure">
          Request Received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-medium-gray">
          Thank you! Our team will contact you shortly to confirm your
          appointment and answer any questions.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-card border border-soft-gray bg-white p-8 shadow-soft lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" type="text" autoComplete="name" />
        <Field label="Email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <label className="flex flex-col gap-1.5">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
            Treatment
          </span>
          <select
            name="treatment"
            defaultValue={treatments[0].name}
            className="btn-focus rounded-xl border border-soft-gray bg-ivory px-4 py-3 text-sm text-black-pure"
          >
            {treatments.map((t) => (
              <option key={t.slug} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
          Preferred Date &amp; Notes
        </span>
        <textarea
          name="notes"
          rows={4}
          placeholder="Let us know your preferred date or any questions."
          className="btn-focus resize-none rounded-xl border border-soft-gray bg-ivory px-4 py-3 text-sm text-black-pure placeholder:text-medium-gray"
        />
      </label>

      {error && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <Button variant="primary" size="lg" className="w-full sm:w-auto">
        Confirm Booking
      </Button>
    </form>
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
        className="btn-focus rounded-xl border border-soft-gray bg-ivory px-4 py-3 text-sm text-black-pure placeholder:text-medium-gray"
      />
    </label>
  );
}
