import { MessageSquareText } from "lucide-react";

/**
 * Mobile-only sticky "TEXT US" bar fixed to the bottom of the screen. Shown at
 * ≤768px and hidden on tablet/desktop (see `.mobile-text-bar` in globals.css).
 * Opens the phone's messaging app to the business number.
 */
export function MobileTextBar() {
  return (
    <a
      href="sms:+17806160398"
      aria-label="Text us at +1 780 616 0398"
      className="mobile-text-bar btn-focus fixed inset-x-0 bottom-0 z-[70] items-center justify-center gap-2.5 bg-[#DC2626] px-6 pt-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_-6px_20px_rgba(0,0,0,0.18)] transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.99]"
      style={{ paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom))" }}
    >
      <MessageSquareText size={18} aria-hidden="true" />
      Text Us
    </a>
  );
}
