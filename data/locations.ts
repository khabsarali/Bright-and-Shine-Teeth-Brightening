import type { LucideIcon } from "lucide-react";
import { Home, Stethoscope, Smile } from "lucide-react";

export interface Location {
  id: string;
  name: string;
  address: string;
  type: string;
  icon: LucideIcon;
  /** Google Maps directions link to this location. */
  mapUrl: string;
  /**
   * SAMPLE availability only — this is NOT live, real-time availability.
   * Replace with a real scheduling source before launch.
   *
   * Keyed by weekday (0 = Sunday … 6 = Saturday); each value lists the
   * bookable start times offered on that weekday at this location.
   */
  availability: Record<number, string[]>;
}

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
    // SAMPLE ONLY — replace with real availability.
    availability: {
      1: ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "4:30 PM"], // Mon
      3: ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM"], // Wed
      5: ["11:00 AM", "1:00 PM", "2:30 PM", "4:00 PM"], // Fri
      6: ["9:30 AM", "11:00 AM", "12:30 PM"], // Sat
    },
  },
  {
    id: "sunup-medical",
    name: "SunUp Medical Centre",
    address: "11322 132 Ave NW, Edmonton, Alberta T5E 1A1",
    type: "Medical Centre",
    icon: Stethoscope,
    mapUrl: directions("11322 132 Ave NW, Edmonton, Alberta T5E 1A1"),
    // SAMPLE ONLY — replace with real availability.
    availability: {
      2: ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM"], // Tue
      4: ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "3:30 PM"], // Thu
      6: ["10:00 AM", "11:30 AM", "1:00 PM"], // Sat
    },
  },
  {
    id: "ritchie-dental",
    name: "Ritchie Dental",
    address: "9601 82 Ave NW, Edmonton, Alberta T6C 0Z9",
    type: "Dental Location",
    icon: Smile,
    mapUrl: directions("9601 82 Ave NW, Edmonton, Alberta T6C 0Z9"),
    // SAMPLE ONLY — replace with real availability.
    availability: {
      1: ["9:30 AM", "11:00 AM", "1:30 PM", "3:30 PM"], // Mon
      2: ["9:30 AM", "11:00 AM", "1:30 PM", "3:30 PM", "5:00 PM"], // Tue
      4: ["11:00 AM", "1:30 PM", "3:30 PM"], // Thu
      5: ["9:30 AM", "11:00 AM", "1:30 PM"], // Fri
    },
  },
];

export const getLocation = (id: string | undefined) =>
  locations.find((l) => l.id === id);
