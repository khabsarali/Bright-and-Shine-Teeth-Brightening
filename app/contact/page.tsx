import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { contactInfo } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bright & Shine Teeth Whitening. Call, email, or send us a message and we'll respond within one business day.",
};

const details = [
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: contactInfo.phoneHref },
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: MapPin, label: "Address", value: contactInfo.address },
  { icon: Clock, label: "Hours", value: contactInfo.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk Smiles"
        description="Have a question or ready to book? We'd love to hear from you."
      />

      <section className="bg-ivory section-pad">
        <div className="container-lux grid gap-12 lg:grid-cols-[0.9fr_1.5fr] lg:gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium text-black-pure">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-medium-gray">
              Our team is here to answer your questions and help you plan your
              brighter smile.
            </p>

            <ul className="mt-8 flex flex-col gap-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-soft-gray bg-white text-champagne">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-medium-gray">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="btn-focus mt-1 block rounded font-sans text-sm text-black-pure hover:text-champagne"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="mt-1 block font-sans text-sm text-black-pure">
                        {value}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
