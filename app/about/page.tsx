import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bright & Shine is a luxury teeth-whitening studio delivering safe, professional, and stunning results for over 15 years.",
};

const values = [
  { value: "5,000+", label: "Happy Patients" },
  { value: "4.9 ★", label: "Google Rating" },
  { value: "15+", label: "Years of Excellence" },
  { value: "100%", label: "Enamel-Safe" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Studio Built Around Your Smile"
        description="For over 15 years we've combined advanced technology with refined, personal care."
      />

      <section className="bg-ivory section-pad">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-card-lg border border-champagne/20 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
              alt="Elegant Bright & Shine treatment studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-black-pure md:text-5xl">
              Luxury Care, Radiant Results
            </h2>
            <p className="mt-5 text-base leading-relaxed text-medium-gray">
              Bright &amp; Shine was founded on a simple belief: a brighter smile
              should feel effortless, comfortable, and truly luxurious. Our
              trained specialists use state-of-the-art, enamel-safe technology to
              deliver dramatic results in a calm, welcoming environment.
            </p>
            <p className="mt-4 text-base leading-relaxed text-medium-gray">
              From your first consultation to your final reveal, every detail is
              designed around you — because confidence starts with a smile you
              love.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-soft-gray pt-8">
              {values.map((item) => (
                <div key={item.label}>
                  <dt className="font-serif text-3xl font-medium text-black-pure">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-medium-gray">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <BenefitsSection />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
