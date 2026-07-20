import Link from "next/link";
import { Instagram, Facebook, Music2, Chrome, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { navLinks, contactInfo } from "@/data/navigation";
import { treatments } from "@/data/treatments";

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "TikTok", href: "#", icon: Music2 },
  { label: "Google", href: "#", icon: Chrome },
];

export function Footer() {
  return (
    <footer className="bg-black-pure text-white/70">
      <div className="container-lux py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Luxury whitening treatments for a brighter, more confident you.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="btn-focus flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-champagne hover:text-champagne-light"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
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
            </ul>
          </nav>

          {/* Treatments */}
          <nav aria-label="Treatments">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Treatments
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link
                    href="/treatments"
                    className="btn-focus rounded transition-colors hover:text-champagne-light"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/treatments"
                  className="btn-focus rounded transition-colors hover:text-champagne-light"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h2>
            <ul className="mt-5 flex flex-col gap-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                <a href={contactInfo.phoneHref} className="btn-focus rounded hover:text-champagne-light">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="btn-focus rounded hover:text-champagne-light">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
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
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
