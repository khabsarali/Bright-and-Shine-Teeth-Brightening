import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BeforeAfterCard } from "@/components/ui/BeforeAfterSlider";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { results } from "@/data/results";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See real before-and-after transformations from Bright & Shine patients. Drag each slider to reveal the difference.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Real Results"
        title="See the Difference"
        description="Drag each slider to reveal the dramatic, long-lasting results our treatments deliver."
      />

      <section className="bg-white section-pad">
        <div className="container-lux grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...results, ...results].map((result, i) => (
            <Reveal key={`${result.name}-${i}`} delay={(i % 3) * 0.06}>
              <BeforeAfterCard result={result} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
