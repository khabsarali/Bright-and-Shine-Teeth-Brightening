import { BookingButton } from "@/components/ui/BookingButton";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="bg-ivory pb-16 pt-4 lg:pb-20">
      <div className="container-lux">
        <Reveal className="relative overflow-hidden rounded-card-lg bg-black-pure px-8 py-16 text-center lg:px-14 lg:py-20">
          {/* Subtle champagne glow accents */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-champagne/15 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-champagne/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-serif text-4xl font-medium leading-[1.05] text-white md:text-5xl">
              Ready for a Whiter Smile?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
              Book your appointment today and experience professional teeth
              whitening in Edmonton.
            </p>
            <BookingButton variant="accent" size="lg" className="mt-8">
              Book Appointment
            </BookingButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
