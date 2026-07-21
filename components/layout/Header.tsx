"use client";

import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, contactInfo } from "@/data/navigation";
import { BookingButton } from "@/components/ui/BookingButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux ${
          scrolled
            ? "border-b border-champagne/15 bg-[rgba(8,8,8,0.94)] backdrop-blur-[14px]"
            : "border-b border-transparent bg-gradient-to-b from-black-pure/45 to-transparent"
        }`}
      >
        <div className="container-lux flex h-[74px] items-center justify-between md:h-[84px] lg:h-[92px]">
          <Link
            href="/"
            aria-label="Bright and Shine Teeth Brightening — home"
            className="btn-focus inline-flex rounded-md"
          >
            <img
              src="/images/white-logo.png"
              alt="Bright and Shine Teeth Brightening"
              className="header-logo"
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`btn-focus rounded font-sans text-sm tracking-wide transition-colors duration-200 hover:text-champagne-light ${
                        active ? "text-champagne-light" : "text-white/85"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={contactInfo.phoneHref}
              className="btn-focus hidden items-center gap-2 rounded-full text-sm text-white/85 transition-colors hover:text-champagne-light xl:flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25">
                <Phone size={15} aria-hidden="true" />
              </span>
              {contactInfo.phone}
            </a>

            <div className="hidden sm:block">
              <BookingButton size="sm">Book Appointment</BookingButton>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="btn-focus flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
