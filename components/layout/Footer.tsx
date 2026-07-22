import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { BookingButton } from "@/components/ui/BookingButton";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { navLinks } from "@/data/navigation";
import { locations } from "@/data/locations";
import { business, isProvided, phoneHref, emailHref } from "@/data/business";

const SOCIAL_LABELS: Record<string, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  facebook: "Facebook",
  pinterest: "Pinterest",
  google: "Google",
};

export function Footer() {
  const socials = Object.entries(business.socials).filter(([, href]) =>
    isProvided(href),
  );
  const hasContact =
    isProvided(business.phone) ||
    isProvided(business.email) ||
    isProvided(business.businessHours);

  return (
    <footer className="bg-black-pure text-white/70">
      <div className="container-lux py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Bright and Shine Teeth Whitening — home"
              className="btn-focus inline-flex rounded-2xl"
            >
              {/* White card keeps the black logo readable on the dark footer */}
              <span className="inline-flex items-center rounded-2xl bg-white px-5 py-3 shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/white-logo.png"
                  alt="Bright and Shine Teeth Whitening"
                  className="h-14 w-auto object-contain"
                />
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Professional teeth whitening for a brighter, more confident smile
              — across Edmonton.
            </p>

            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap items-center gap-3">
                {socials.map(([key, href]) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={SOCIAL_LABELS[key] ?? key}
                      className="btn-focus flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-champagne hover:text-champagne-light"
                    >
                      <SocialIcon name={key} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <BookingButton className="mt-7" size="sm">
              Book Appointment
            </BookingButton>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Explore
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {navLinks
                .filter((l) => l.href !== "/")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="btn-focus rounded transition-colors hover:text-champagne-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/#faq"
                  className="btn-focus rounded transition-colors hover:text-champagne-light"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          {/* Locations */}
          <nav aria-label="Locations">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Locations
            </h2>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-focus group flex items-start gap-2.5 rounded"
                  >
                    <MapPin
                      size={15}
                      className="mt-0.5 shrink-0 text-champagne"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block font-medium text-white/85 group-hover:text-champagne-light">
                        {loc.name}
                      </span>
                      <span className="block text-xs leading-relaxed text-white/50">
                        {loc.address}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + newsletter */}
          <div>
            {hasContact && (
              <>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Contact
                </h2>
                <ul className="mt-5 flex flex-col gap-3.5 text-sm">
                  {isProvided(business.phone) && (
                    <li className="flex items-start gap-3">
                      <Phone size={16} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                      <a href={phoneHref()} className="btn-focus rounded hover:text-champagne-light">
                        {business.phone}
                      </a>
                    </li>
                  )}
                  {isProvided(business.email) && (
                    <li className="flex items-start gap-3">
                      <Mail size={16} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                      <a href={emailHref()} className="btn-focus rounded hover:text-champagne-light">
                        {business.email}
                      </a>
                    </li>
                  )}
                  {isProvided(business.businessHours) && (
                    <li className="flex items-start gap-3">
                      <Clock size={16} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                      <span>{business.businessHours}</span>
                    </li>
                  )}
                </ul>
              </>
            )}

            <h2 className={`font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white ${hasContact ? "mt-8" : ""}`}>
              Newsletter
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              Stay updated with special offers and smile tips.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Bright &amp; Shine Teeth Whitening. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="btn-focus rounded hover:text-champagne-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="btn-focus rounded hover:text-champagne-light">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
