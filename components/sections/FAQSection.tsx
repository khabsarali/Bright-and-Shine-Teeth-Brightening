import { faqs } from "@/data/faqs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ContactSupportCard } from "@/components/ui/ContactSupportCard";
import { Reveal } from "@/components/ui/Reveal";

export function FAQSection() {
  return (
    <section id="faq" className="bg-ivory section-pad">
      <div className="container-lux grid gap-10 lg:grid-cols-[0.85fr_1.5fr_0.9fr] lg:gap-10">
        {/* Left copy */}
        <Reveal>
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-black-pure md:text-[2.75rem]">
            We&apos;re Here to Help You Smile
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-medium-gray">
            Find answers to common questions about our whitening treatments.
          </p>
        </Reveal>

        {/* Center — accordion */}
        <Reveal delay={0.08} className="min-w-0">
          <FAQAccordion faqs={faqs} />
        </Reveal>

        {/* Right — support card */}
        <Reveal delay={0.16}>
          <ContactSupportCard />
        </Reveal>
      </div>
    </section>
  );
}
