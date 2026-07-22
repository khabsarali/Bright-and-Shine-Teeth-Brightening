import type { LucideIcon } from "lucide-react";
import { Home, Stethoscope, Smile } from "lucide-react";

/** A bookable time range within a day, as 24-hour "HH:MM" start/end. */
export type TimeRange = [string, string];

export interface Location {
  id: string;
  name: string;
  address: string;
  type: string;
  icon: LucideIcon;
  /** Google Maps directions link to this location. */
  mapUrl: string;
  /**
   * Earliest bookable date (ISO "YYYY-MM-DD"), inclusive. Omit if the location
   * is bookable straight away.
   */
  availableFrom?: string;
  /**
   * Bookable hours per weekday (0 = Sunday … 6 = Saturday). Each weekday maps
   * to zero or more time ranges; a missing or empty entry means the location
   * is closed that day. Edit here to change availability everywhere.
   */
  hours: Record<number, TimeRange[]>;
}

/** Interval between offered appointment start times, in minutes. */
export const SLOT_MINUTES = 30;

const directions = (address: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

export const locations: Location[] = [
  {
    id: "home-studio",
    name: "Home Studio",
    address: "6855 Ad Astra Blvd NW, Edmonton, Alberta T5E 6Z6",
    type: "Home Studio",
    icon: Home,
    mapUrl: directions("6855 Ad Astra Blvd NW, Edmonton, Alberta T5E 6Z6"),
    hours: {
      0: [["18:30", "20:30"]], // Sunday
      1: [["08:00", "20:00"]], // Monday
      2: [["08:00", "20:00"]],
      3: [["08:00", "20:00"]],
      4: [["08:00", "20:00"]],
      5: [["08:00", "20:00"]], // Friday
      6: [["18:30", "20:30"]], // Saturday
    },
  },
  {
    id: "sunup-medical",
    name: "SunUp Medical Centre",
    address: "11322 132 Ave NW, Edmonton, Alberta T5E 1A1",
    type: "Medical Centre",
    icon: Stethoscope,
    mapUrl: directions("11322 132 Ave NW, Edmonton, Alberta T5E 1A1"),
    // Bookable from September 1st onwards. Update the year if needed.
    availableFrom: "2026-09-01",
    hours: {
      1: [["09:00", "23:00"]], // Monday
      2: [["09:00", "23:00"]],
      3: [["09:00", "23:00"]],
      4: [["09:00", "23:00"]],
      5: [["09:00", "23:00"]], // Friday
      // Saturday & Sunday: closed
    },
  },
  {
    id: "ritchie-dental",
    name: "Ritchie Dental",
    address: "9601 82 Ave NW, Edmonton, Alberta T6C 0Z9",
    type: "Dental Location",
    icon: Smile,
    mapUrl: directions("9601 82 Ave NW, Edmonton, Alberta T6C 0Z9"),
    hours: {
      0: [["09:00", "16:00"]], // Sunday
      6: [["09:00", "16:00"]], // Saturday
      // Monday–Friday: closed
    },
  },
];

export const getLocation = (id: string | undefined) =>
  locations.find((l) => l.id === id);

/** Local ISO date ("YYYY-MM-DD") for a Date, using its local calendar day. */
export const toISODate = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;

function formatSlot(totalMinutes: number): string {
  const h24 = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const period = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

function expandRanges(ranges: TimeRange[]): string[] {
  const out: string[] = [];
  for (const [start, end] of ranges) {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    for (let t = sh * 60 + sm; t < eh * 60 + em; t += SLOT_MINUTES) {
      out.push(formatSlot(t));
    }
  }
  return out;
}

/** Bookable start times for a location on a specific date (empty if closed). */
export function slotsForDate(location: Location, date: Date): string[] {
  if (location.availableFrom && toISODate(date) < location.availableFrom) {
    return [];
  }
  return expandRanges(location.hours[date.getDay()] ?? []);
}

export interface AvailableDate {
  iso: string;
  label: string;
  slots: string[];
}

/**
 * Upcoming bookable dates for a location, honouring its weekday hours and
 * `availableFrom`. Scans forward from `from` and returns up to `maxDates`
 * dates that actually have slots.
 */
export function getAvailableDates(
  location: Location,
  from: Date,
  maxDates = 30,
  maxScanDays = 180,
): AvailableDate[] {
  const out: AvailableDate[] = [];
  for (let i = 0; i < maxScanDays && out.length < maxDates; i++) {
    const d = new Date(from);
    d.setDate(from.getDate() + i);
    const slots = slotsForDate(location, d);
    if (slots.length) {
      out.push({
        iso: toISODate(d),
        label: d.toLocaleDateString("en-CA", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        slots,
      });
    }
  }
  return out;
}
