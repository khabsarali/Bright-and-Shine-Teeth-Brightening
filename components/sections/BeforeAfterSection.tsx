import { results } from "@/data/results";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfterCard } from "@/components/ui/BeforeAfterSlider";

export function BeforeAfterSection() {
  return (
    <section id="results" className="bg-white section-pad">
      <div className="container-lux grid gap-12 lg:grid-cols-[0.9fr_2.1fr] lg:items-start lg:gap-16">
        {/* Left copy */}
        <Reveal className="lg:sticky lg:top-28">
          <p className="eyebrow">Real Results</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-black-pure md:text-5xl">
            See the Difference
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-medium-gray">
            Our professional whitening treatments deliver dramatic, long-lasting
            results you can see and feel.
          </p>
          <Button href="/results" variant="primary" className="mt-8">
            View More Results
          </Button>
        </Reveal>

        {/* Right — result cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {results.map((result, i) => (
            <Reveal key={result.name} delay={i * 0.06}>
              <BeforeAfterCard result={result} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
