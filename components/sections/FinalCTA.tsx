import Image from "next/image";
import { BookingButton } from "@/components/ui/BookingButton";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="bg-ivory pb-16 pt-4 lg:pb-20">
      <div className="container-lux">
        <Reveal className="relative overflow-hidden rounded-card-lg bg-black-pure">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left copy */}
            <div className="relative z-10 px-8 py-14 lg:px-14 lg:py-20">
              <h2 className="font-serif text-4xl font-medium leading-[1.05] text-white md:text-5xl">
                Ready for Your Brighter Smile?
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
                Book your appointment today and take the first step toward a more
                confident you.
              </p>
              <BookingButton size="lg" className="mt-8">
                Book Appointment
              </BookingButton>
            </div>

            {/* Right image */}
            <div className="relative h-64 w-full lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=80"
                alt="Close-up of a bright, confident smile"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black-pure via-black-pure/60 to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
