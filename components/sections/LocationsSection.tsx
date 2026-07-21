import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { BookingButton } from "@/components/ui/BookingButton";

export function LocationsSection() {
  return (
    <section id="locations" className="bg-ivory section-pad">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Visit Us</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-black-pure md:text-5xl">
            Our Locations
          </h2>
          <p className="mt-5 text-base leading-relaxed text-medium-gray">
            Professional teeth whitening across Edmonton. Choose the location
            that&apos;s most convenient for you.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {locations.map((loc, i) => {
            const Icon = loc.icon;
            return (
              <Reveal
                as="li"
                key={loc.id}
                delay={i * 0.08}
                className="flex h-full flex-col overflow-hidden rounded-card border border-soft-gray bg-white shadow-soft transition-all duration-300 ease-lux hover:-translate-y-1.5 hover:shadow-soft-lg"
              >
                {/* Icon header band */}
                <div className="flex items-center gap-4 bg-black-pure px-7 py-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/40 text-champagne-light">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    {loc.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-2xl font-medium text-black-pure">
                    {loc.name}
                  </h3>
                  <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-medium-gray">
                    <MapPin
                      size={16}
                      className="mt-0.5 shrink-0 text-champagne"
                      aria-hidden="true"
                    />
                    {loc.address}
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <BookingButton
                      variant="accent"
                      size="sm"
                      locationId={loc.id}
                      className="flex-1"
                    >
                      Book This Location
                    </BookingButton>
                    <Button
                      href={loc.mapUrl}
                      variant="outline-dark"
                      size="sm"
                      className="flex-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Map
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
