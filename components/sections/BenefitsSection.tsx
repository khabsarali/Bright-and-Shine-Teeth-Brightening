import { benefits } from "@/data/benefits";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "Why Choose Us" — a single premium near-black block that overlaps the
 * bottom of the hero (see `.features-section` in globals.css). All five
 * feature items live inside one unified card with hairline dividers; the
 * grid gap adapts the separators to 5 / 2 / 1 columns automatically.
 */
export function BenefitsSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        {benefits.map((benefit, i) => {
          const Icon = benefit.icon;
          return (
            <Reveal
              as="div"
              key={benefit.title}
              delay={i * 0.08}
              className="feature-item"
            >
              <span className="icon-wrapper" aria-hidden="true">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <h3 className="feature-title">{benefit.title}</h3>
              <p className="feature-desc">{benefit.description}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
