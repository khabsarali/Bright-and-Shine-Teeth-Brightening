"use client";

import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import type { Review } from "@/data/reviews";
import { StarRating } from "./StarRating";

const READ_MORE_LIMIT = 170;

function initials(name: string) {
  const words = name.trim().split(/\s+/);
  const letters =
    words.length >= 2 ? words[0][0] + words[1][0] : name.slice(0, 2);
  return letters.toUpperCase();
}

export function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > READ_MORE_LIMIT;
  const text =
    isLong && !expanded
      ? `${review.text.slice(0, READ_MORE_LIMIT).trimEnd()}… `
      : review.text;

  return (
    <figure className="flex h-full flex-col rounded-card border border-soft-gray bg-white p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream font-serif text-sm font-medium text-charcoal"
        >
          {initials(review.name)}
        </span>
        <div className="min-w-0">
          <figcaption className="truncate text-sm font-medium text-black-pure">
            {review.name}
          </figcaption>
          <p className="text-xs text-medium-gray">{review.date}</p>
        </div>
        <span
          className="ml-auto flex shrink-0 items-center gap-1 rounded-full bg-cream px-2.5 py-1 text-[0.65rem] font-medium text-charcoal"
          title="Google Review"
        >
          <BadgeCheck size={13} className="text-champagne" aria-hidden="true" />
          Google
        </span>
      </div>

      <StarRating rating={review.rating} size={15} className="mt-4" />

      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-medium-gray">
        {text}
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="btn-focus rounded font-medium text-champagne hover:text-black-pure"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </blockquote>
    </figure>
  );
}
