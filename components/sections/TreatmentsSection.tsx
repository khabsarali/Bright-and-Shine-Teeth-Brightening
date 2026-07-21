import { treatments } from "@/data/treatments";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";

/**
 * "Professional Whitening" — three sessions distinguished by treatment time.
 * No prices are shown here; pricing (where available) is surfaced in the
 * location-aware booking flow via the single "Check Availability" CTA.
 */
export function TreatmentsSection() {
  return (
    <section id="treatments" className="bg-cream section-pad">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Professional Whitening</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-black-pure md:text-5xl">
            Choose Your Session
          </h2>
          <p className="mt-5 text-base leading-relaxed text-medium-gray">
            Simple, professional whitening sessions tailored to the time you
            have. Select a location during booking to see availability.
          </p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {treatments.map((treatment, i) => {
            const Icon = treatment.icon;
            return (
              <Reveal
                as="li"
                key={treatment.slug}
                delay={i * 0.08}
                className="flex h-full flex-col items-center rounded-card border border-soft-gray bg-white p-8 text-center shadow-soft transition-all duration-300 ease-lux hover:-translate-y-1.5 hover:shadow-soft-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-charcoal">
                  <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-medium text-black-pure">
                  {treatment.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-champagne">
                  {treatment.duration}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-medium-gray">
                  {treatment.description}
                </p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.1} className="mt-12 text-center">
          <BookingButton variant="accent" size="lg">
            Check Availability
          </BookingButton>
        </Reveal>
      </div>
    </section>
  );
}
