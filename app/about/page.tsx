import type { Metadata } from "next";
import { Sparkles, ShieldCheck, UserRound, MapPin, Star, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bright & Shine Teeth Whitening offers professional, comfortable teeth whitening across three Edmonton locations.",
};

const whyChoose = [
  "Professional, non-invasive whitening treatments",
  "Comfortable and relaxing experience",
  "Suitable for most healthy teeth and smiles",
  "Personalized treatment plans",
  "Three convenient Edmonton locations",
  "Friendly and knowledgeable care from start to finish",
];

const whyClients = [
  "Comfortable and relaxing experience",
  "Professional whitening technology",
  "Convenient appointment options",
  "Friendly, personalized service",
  "Ideal before weddings, graduations, and special events",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Helping You Smile with Confidence"
        description="Professional teeth whitening with a warm, personal approach across Edmonton."
      />

      {/* About copy + logo panel */}
      <section className="bg-ivory section-pad">
        <div className="container-lux grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="max-w-xl space-y-4 text-base leading-relaxed text-medium-gray">
              <p>
                At Bright &amp; Shine Teeth Whitening, we believe every smile
                deserves to shine. Our professional teeth whitening treatments
                are designed to lift years of stains caused by coffee, tea,
                wine, smoking, and everyday life, helping reveal a brighter and
                more confident smile in as little as one visit.
              </p>
              <p>
                We combine professional-grade whitening technology with a
                personal approach. Every treatment is adapted to your current
                tooth shade, whitening goals, and comfort.
              </p>
              <p>
                Whether you are preparing for a wedding, graduation, job
                interview, special event, or simply doing something for
                yourself, we are here to help you achieve noticeable results you
                can feel good about.
              </p>
            </div>

            <h2 className="mt-9 font-serif text-2xl font-medium text-black-pure">
              Why Choose Bright &amp; Shine?
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                  <Check size={18} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-medium-gray">
              Your smile is one of the first things people notice. Let us help
              you make it your brightest.
            </p>

            <BookingButton variant="accent" size="lg" className="mt-8">
              Book Your Appointment
            </BookingButton>
          </Reveal>

          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-card-lg border border-champagne/15 shadow-soft">
              <div className="relative aspect-[4/3] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Clinic.jpg.jpeg"
                  alt="Inside a Bright & Shine Teeth Whitening treatment room, with a whitening chair, LED lamp, and branded décor"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service highlights */}
      <section className="bg-cream section-pad">
        <div className="container-lux">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What We Offer</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-black-pure md:text-5xl">
              Service Highlights
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <HighlightCard
              icon={Sparkles}
              title="Professional Whitening"
              body="Use advanced LED technology and professional-grade whitening gels to help lift stains caused by coffee, tea, wine, smoking, and everyday habits."
            />
            <HighlightCard
              icon={ShieldCheck}
              title="Safe and Enamel-Friendly"
              body="Our whitening treatments are designed to be gentle on healthy enamel while helping produce brighter, natural-looking results."
            />
            <HighlightCard
              icon={UserRound}
              title="Personalized Care"
              body="Every smile is different. We personalize each whitening session based on your goals, starting shade, and comfort."
            />
            <div className="flex h-full flex-col rounded-card border border-soft-gray bg-white p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-charcoal">
                <MapPin size={22} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-medium text-black-pure">
                Three Convenient Locations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-medium-gray">
                Choose the location that works best for you:
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {locations.map((loc) => (
                  <li key={loc.id}>
                    <BookingButton
                      variant="ghost"
                      size="sm"
                      locationId={loc.id}
                      className="!px-0 !tracking-normal normal-case"
                    >
                      {loc.name}
                    </BookingButton>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why clients choose us */}
      <section className="bg-ivory section-pad">
        <div className="container-lux">
          <Reveal className="mx-auto max-w-3xl rounded-card-lg border border-soft-gray bg-white p-8 shadow-soft lg:p-12">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-champagne">
                <Star size={20} aria-hidden="true" />
              </span>
              <h2 className="font-serif text-2xl font-medium text-black-pure md:text-3xl">
                Why Clients Choose Us
              </h2>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {whyClients.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                  <Check size={18} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ProcessSection />
      <FinalCTA />
    </>
  );
}

function HighlightCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Sparkles;
  title: string;
  body: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-card border border-soft-gray bg-white p-7 shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-charcoal">
        <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-serif text-xl font-medium text-black-pure">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-medium-gray">{body}</p>
    </div>
  );
}
