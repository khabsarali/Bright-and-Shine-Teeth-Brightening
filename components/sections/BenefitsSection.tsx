import { benefits } from "@/data/benefits";
import { Reveal } from "@/components/ui/Reveal";

export function BenefitsSection() {
  return (
    <section className="bg-ivory">
      <div className="container-lux py-14 lg:py-16">
        <ul className="grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal
                as="li"
                key={benefit.title}
                delay={i * 0.08}
                className="flex flex-col items-center px-4 text-center lg:border-r lg:border-soft-gray lg:last:border-r-0"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-soft-gray bg-white text-charcoal">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-black-pure">
                  {benefit.title}
                </h3>
                <p className="mt-2 max-w-[14rem] text-xs leading-relaxed text-medium-gray">
                  {benefit.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
