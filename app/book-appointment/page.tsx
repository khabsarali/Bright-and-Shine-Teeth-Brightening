import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { InlineBookingForm } from "@/components/ui/InlineBookingForm";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Reserve your Bright & Shine whitening appointment. Share your details and our team will confirm your visit.",
};

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Appointment"
        title="Reserve Your Visit"
        description="Share your details below and our team will be in touch to confirm your appointment."
      />

      <section className="bg-ivory section-pad">
        <div className="container-lux max-w-2xl">
          <InlineBookingForm />
        </div>
      </section>
    </>
  );
}
