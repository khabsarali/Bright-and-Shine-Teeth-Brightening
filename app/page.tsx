import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TreatmentsSection } from "@/components/sections/TreatmentsSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { VideoReviewsSection } from "@/components/sections/VideoReviewsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GoogleReviewsSection } from "@/components/sections/GoogleReviewsSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getReviewVideos } from "@/lib/videos";

export default function HomePage() {
  const videos = getReviewVideos();

  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <TreatmentsSection />
      <BeforeAfterSection />
      <VideoReviewsSection videos={videos} />
      <ProcessSection />
      <GoogleReviewsSection />
      <LocationsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
