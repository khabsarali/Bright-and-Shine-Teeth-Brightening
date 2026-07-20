"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please complete all fields.");
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
      <div className="rounded-card border border-champagne/25 bg-white p-10 text-center shadow-soft">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-white">
          <Check size={26} aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-medium text-black-pure">
          Message Sent
        </h3>
        <p className="mt-2 text-sm text-medium-gray">
          Thank you for reaching out. Our team will respond within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-card border border-soft-gray bg-white p-8 shadow-soft"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" name="name" type="text" autoComplete="name" />
        <FormField label="Email" name="email" type="email" autoComplete="email" />
      </div>
      <FormField label="Phone" name="phone" type="tel" autoComplete="tel" required={false} />
      <label className="flex flex-col gap-1.5">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
          Message
        </span>
        <textarea
          name="message"
          rows={5}
          required
          className="btn-focus resize-none rounded-xl border border-soft-gray bg-ivory px-4 py-3 text-sm text-black-pure placeholder:text-medium-gray"
        />
      </label>

      {error && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <Button variant="primary" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}

function FormField({
  label,
  name,
  type,
  autoComplete,
  required = true,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="btn-focus rounded-xl border border-soft-gray bg-ivory px-4 py-3 text-sm text-black-pure placeholder:text-medium-gray"
      />
    </label>
  );
}
