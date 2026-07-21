import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Real, verified Google reviews from Bright & Shine Teeth Whitening clients.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Google Reviews"
        title="Loved by Our Clients"
        description="Real, verified reviews from our clients on Google."
      />

      <section className="bg-ivory section-pad">
        <div className="container-lux">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={`${review.name}-${i}`} delay={(i % 3) * 0.06}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
