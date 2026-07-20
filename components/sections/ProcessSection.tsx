import { processSteps } from "@/data/process";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-black-pure section-pad">
      {/* Subtle radial texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(181,160,136,0.12),transparent_55%)]"
      />

      <div className="container-lux relative">
        <Reveal className="text-center">
          <p className="eyebrow-dark">Our Whitening Process</p>
          <h2 className="mt-4 font-serif text-4xl font-medium text-white md:text-5xl">
            Simple. Safe. Stunning.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent lg:block"
          />

          <ol className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal
                  as="li"
                  key={step.step}
                  delay={i * 0.1}
                  className="relative flex flex-col items-center text-center lg:items-center"
                >
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-champagne/40 bg-black-charcoal text-champagne-light">
                    <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="mt-5 font-sans text-xs uppercase tracking-[0.25em] text-champagne">
                    Step {step.step}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
