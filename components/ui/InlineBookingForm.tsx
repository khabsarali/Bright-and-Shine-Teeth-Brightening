"use client";

import { BookingFlow } from "./BookingFlow";

/**
 * Full-page booking form used on /book-appointment. Wraps the shared
 * location-aware BookingFlow in a card so there's a single source of truth
 * for the booking experience (the modal uses the same component).
 */
export function InlineBookingForm() {
  return (
    <div className="rounded-card border border-soft-gray bg-white p-8 shadow-soft lg:p-10">
      <BookingFlow />
    </div>
  );
}
