import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";
import { StarRating } from "./StarRating";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="glass-card flex h-full flex-col rounded-card p-7 shadow-glow">
      <StarRating rating={testimonial.rating} />
      <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-white/90">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
        <Image
          src={testimonial.image}
          alt={`${testimonial.name} profile photo`}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="font-sans text-sm font-medium text-white">
            {testimonial.name}
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-champagne-light">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}
