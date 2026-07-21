import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FaqLogoCard } from "@/components/ui/FaqLogoCard";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about our luxury teeth-whitening treatments — safety, results, sensitivity, and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="We're Here to Help You Smile"
        description="Find answers to common questions about our whitening treatments."
      />

      <section className="bg-ivory section-pad">
        <div className="container-lux grid gap-10 lg:grid-cols-[1.6fr_0.9fr]">
          <Reveal className="min-w-0">
            <FAQAccordion faqs={faqs} />
          </Reveal>
          <Reveal delay={0.1}>
            <FaqLogoCard />
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
