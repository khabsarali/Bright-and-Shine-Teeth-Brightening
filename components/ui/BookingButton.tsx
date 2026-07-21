"use client";

import type { ReactNode } from "react";
import { Button } from "./Button";
import { useBooking } from "./BookingProvider";

interface BookingButtonProps {
  children: ReactNode;
  variant?: "primary" | "accent" | "outline" | "outline-dark" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  treatment?: string;
  /** Preselect a location in the booking flow (by location id). */
  locationId?: string;
}

/** Opens the global booking modal instead of navigating. */
export function BookingButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  treatment,
  locationId,
}: BookingButtonProps) {
  const { openBooking } = useBooking();
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => openBooking({ treatment, locationId })}
    >
      {children}
    </Button>
  );
}
