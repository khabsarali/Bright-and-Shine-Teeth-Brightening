interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Compact dark hero used at the top of interior pages. */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black-pure pb-16 pt-36 lg:pb-20 lg:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(181,160,136,0.14),transparent_55%)]"
      />
      <div className="container-lux relative text-center">
        <p className="eyebrow-dark">{eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-5xl font-medium leading-[1.05] text-white md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
