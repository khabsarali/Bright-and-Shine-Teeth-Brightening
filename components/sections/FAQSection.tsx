import { faqs } from "@/data/faqs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FaqLogoCard } from "@/components/ui/FaqLogoCard";
import { Reveal } from "@/components/ui/Reveal";

export function FAQSection() {
  return (
    <section id="faq" className="bg-ivory section-pad">
      <div className="container-lux grid items-start gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        {/* Visual — brand logo on a soft premium card. On mobile it sits above
            the questions; on desktop it balances the accordion column. */}
        <Reveal className="lg:sticky lg:top-28">
          <FaqLogoCard />
        </Reveal>

        {/* Content — heading + accordion */}
        <div>
          <Reveal>
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-black-pure md:text-[2.75rem]">
              We&apos;re Here to Help You Smile
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-medium-gray">
              Find answers to common questions about our whitening treatments.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8 min-w-0">
            <FAQAccordion faqs={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
