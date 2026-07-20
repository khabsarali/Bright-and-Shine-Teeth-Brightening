import Image from "next/image";
import { Button } from "./Button";

export function ContactSupportCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-card border border-champagne/20 bg-ivory shadow-soft">
      <div className="relative h-56 w-full">
        <Image
          src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80"
          alt="Friendly Bright & Shine clinic professional"
          fill
          sizes="(max-width: 1024px) 100vw, 320px"
          className="object-cover object-top"
        />
      </div>
      <div className="p-7 text-center">
        <p className="font-serif text-2xl font-medium leading-snug text-black-pure">
          Still have questions?
          <br />
          We&apos;re here to help!
        </p>
        <Button href="/contact" variant="primary" className="mt-6">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
