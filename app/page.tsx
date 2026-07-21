import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TreatmentsSection } from "@/components/sections/TreatmentsSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GoogleReviewsSection } from "@/components/sections/GoogleReviewsSection";
import { VideoReviewsSection } from "@/components/sections/VideoReviewsSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <TreatmentsSection />
      <BeforeAfterSection />
      <ProcessSection />
      <GoogleReviewsSection />
      <VideoReviewsSection />
      <LocationsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
