"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface OpenBookingOptions {
  treatment?: string;
  locationId?: string;
}

interface BookingContextValue {
  isOpen: boolean;
  openBooking: (options?: OpenBookingOptions) => void;
  closeBooking: () => void;
  selectedTreatment?: string;
  selectedLocationId?: string;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>();
  const [selectedLocationId, setSelectedLocationId] = useState<string>();

  const openBooking = useCallback((options?: OpenBookingOptions) => {
    setSelectedTreatment(options?.treatment);
    setSelectedLocationId(options?.locationId);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      isOpen,
      openBooking,
      closeBooking,
      selectedTreatment,
      selectedLocationId,
    }),
    [isOpen, openBooking, closeBooking, selectedTreatment, selectedLocationId],
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within a BookingProvider");
  return ctx;
}
