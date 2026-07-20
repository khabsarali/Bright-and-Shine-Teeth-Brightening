"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface BookingContextValue {
  isOpen: boolean;
  openBooking: (treatment?: string) => void;
  closeBooking: () => void;
  selectedTreatment?: string;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>();

  const openBooking = useCallback((treatment?: string) => {
    setSelectedTreatment(treatment);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openBooking, closeBooking, selectedTreatment }),
    [isOpen, openBooking, closeBooking, selectedTreatment],
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
