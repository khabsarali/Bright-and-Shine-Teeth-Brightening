import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StarRating } from "@/components/ui/StarRating";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Real stories from real patients who love their brighter smiles. Rated 4.9/5 across 1,200+ reviews.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Love"
        title="Trusted by Thousands"
        description="Real stories from real patients who love their brighter smiles."
      />

      <section className="bg-black-rich section-pad">
        <div className="container-lux">
          <Reveal className="mx-auto mb-12 flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
            <span className="font-serif text-4xl font-medium text-white">4.9/5</span>
            <span className="h-10 w-px bg-white/15" />
            <span>
              <StarRating rating={5} />
              <span className="mt-1 block text-xs text-white/55">
                Based on 1,200+ reviews
              </span>
            </span>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <Reveal key={`${testimonial.name}-${i}`} delay={(i % 3) * 0.06}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
