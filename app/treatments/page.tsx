import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { treatments } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore our premium whitening solutions — in-office, laser, LED, and at-home touch-up kits designed for stunning, long-lasting results.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Popular Treatments"
        title="Premium Whitening Solutions"
        description="Professional-grade treatments tailored to your smile, delivered in a calm, luxurious setting."
      />

      <section className="bg-ivory section-pad">
        <div className="container-lux grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, i) => (
            <Reveal key={treatment.slug} delay={i * 0.08}>
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </div>

        <div className="container-lux mt-16 grid gap-6 md:grid-cols-2">
          {treatments.map((treatment, i) => (
            <Reveal
              key={treatment.slug}
              delay={i * 0.05}
              as="article"
              className="rounded-card border border-soft-gray bg-white p-8 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl font-medium text-black-pure">
                  {treatment.name}
                </h2>
                <span className="font-serif text-2xl font-medium text-champagne">
                  {treatment.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-medium-gray">
                {treatment.detail}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-medium-gray">
                Duration · {treatment.duration}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
