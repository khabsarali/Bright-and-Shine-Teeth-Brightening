"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") || "").trim();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("success");
    setMessage("Thank you for subscribing!");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-1.5 focus-within:border-champagne">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Your email address"
          className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-medium-gray focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          className="btn-focus flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-black-pure transition-colors hover:bg-champagne hover:text-white"
        >
          {status === "success" ? (
            <Check size={16} aria-hidden="true" />
          ) : (
            <ArrowRight size={16} aria-hidden="true" />
          )}
        </button>
      </div>
      {message && (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`mt-2 text-xs ${
            status === "error" ? "text-red-400" : "text-champagne-light"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
