import type { Treatment } from "@/data/treatments";
import { BookingButton } from "./BookingButton";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const Icon = treatment.icon;
  return (
    <article className="group flex h-full flex-col rounded-card border border-soft-gray bg-white p-7 shadow-soft transition-all duration-300 ease-lux hover:-translate-y-1.5 hover:shadow-soft-lg">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-charcoal transition-colors duration-300 group-hover:bg-champagne group-hover:text-white">
        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
      </span>

      <h3 className="mt-6 font-serif text-2xl font-medium text-black-pure">
        {treatment.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-medium-gray">
        {treatment.description}
      </p>

      <BookingButton
        treatment={treatment.name}
        size="sm"
        className="mt-6 w-full"
      >
        Book Now
      </BookingButton>
    </article>
  );
}
