"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { navLinks, contactInfo } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { BookingButton } from "@/components/ui/BookingButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.nav
            aria-label="Mobile"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-black-rich px-7 py-6"
          >
            <div className="flex items-center justify-between">
              <Logo variant="light" showWordmark={false} />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="btn-focus flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-10 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="btn-focus block rounded-lg py-3 font-serif text-2xl text-white/90 transition-colors hover:text-champagne-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto border-t border-white/10 pt-6">
              <a
                href={contactInfo.phoneHref}
                className="btn-focus block font-sans text-sm text-white/70"
              >
                {contactInfo.phone}
              </a>
              <BookingButton className="mt-4 w-full" size="lg">
                Book Appointment
              </BookingButton>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
