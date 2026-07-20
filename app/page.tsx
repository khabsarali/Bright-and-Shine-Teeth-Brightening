import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TreatmentsSection } from "@/components/sections/TreatmentsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <BeforeAfterSection />
      <ProcessSection />
      <TreatmentsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
