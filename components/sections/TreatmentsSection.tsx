import { treatments } from "@/data/treatments";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TreatmentCard } from "@/components/ui/TreatmentCard";

export function TreatmentsSection() {
  return (
    <section id="treatments" className="bg-cream section-pad">
      <div className="container-lux">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow">Popular Treatments</p>
            <h2 className="mt-4 font-serif text-4xl font-medium text-black-pure md:text-5xl">
              Premium Whitening Solutions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/treatments" variant="outline-dark">
              View All Treatments
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, i) => (
            <Reveal key={treatment.slug} delay={i * 0.08}>
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
