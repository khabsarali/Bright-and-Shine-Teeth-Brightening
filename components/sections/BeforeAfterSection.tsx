import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfterCarousel } from "@/components/ui/BeforeAfterCarousel";
import { BookingButton } from "@/components/ui/BookingButton";

export function BeforeAfterSection() {
  return (
    <section id="results" className="bg-white section-pad">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Real Results</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-black-pure md:text-5xl">
            Before &amp; After
          </h2>
          <p className="mt-5 text-base leading-relaxed text-medium-gray">
            Real client results from our professional whitening treatments. Tap
            any image to view it full size.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-14">
          <BeforeAfterCarousel />
        </Reveal>

        <Reveal delay={0.12} className="mt-12 text-center">
          <BookingButton variant="accent" size="lg">
            Book Your Appointment
          </BookingButton>
        </Reveal>
      </div>
    </section>
  );
}
