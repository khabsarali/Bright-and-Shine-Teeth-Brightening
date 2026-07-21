"use client";

import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/navigation";
import { business, isProvided, phoneHref } from "@/data/business";
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

  // The homepage hero is a light cream design, so the header uses dark text
  // there. Interior pages keep the dark PageHero, so the header stays light-on-
  // dark on those routes.
  const light = pathname === "/";

  const headerBg = scrolled
    ? light
      ? "border-b border-soft-gray bg-[rgba(243,237,227,0.94)] backdrop-blur-[14px]"
      : "border-b border-champagne/15 bg-[rgba(8,8,8,0.94)] backdrop-blur-[14px]"
    : "border-b border-transparent bg-transparent";

  const navText = light ? "text-charcoal" : "text-white/85";
  const navActive = light ? "text-champagne" : "text-champagne-light";
  const navHover = light ? "hover:text-champagne" : "hover:text-champagne-light";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux ${headerBg}`}
      >
        <div className="container-lux flex h-24 items-center justify-between">
          <Link
            href="/"
            aria-label="Bright and Shine Teeth Whitening — home"
            className="btn-focus inline-flex rounded-2xl"
          >
            {/* White container keeps the black logo readable on any header state */}
            <span className="flex items-center rounded-2xl bg-white px-5 py-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/white-logo.png"
                alt="Bright and Shine Teeth Whitening"
                className="header-logo"
              />
            </span>
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
                      className={`btn-focus rounded font-sans text-sm tracking-wide transition-colors duration-200 ${navHover} ${
                        active ? navActive : navText
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
            {isProvided(business.phone) && (
              <a
                href={phoneHref()}
                className={`btn-focus hidden items-center gap-2 rounded-full text-sm transition-colors xl:flex ${navText} ${navHover}`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                    light ? "border-black/15" : "border-white/25"
                  }`}
                >
                  <Phone size={15} aria-hidden="true" />
                </span>
                {business.phone}
              </a>
            )}

            <div className="hidden sm:block">
              <BookingButton variant={light ? "accent" : "primary"} size="sm">
                Book Appointment
              </BookingButton>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className={`btn-focus flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
                light
                  ? "text-charcoal hover:bg-black/5"
                  : "text-white hover:bg-white/10"
              }`}
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
