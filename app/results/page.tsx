import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BeforeAfterCarousel } from "@/components/ui/BeforeAfterCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See real before-and-after transformations from Bright & Shine clients. Tap any image to view it full size.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Real Results"
        title="Before & After"
        description="Real client results from our professional whitening treatments. Tap any image to view it full size."
      />

      <section className="bg-white section-pad">
        <div className="container-lux">
          <Reveal>
            <BeforeAfterCarousel />
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
