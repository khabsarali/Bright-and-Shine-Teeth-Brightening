import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bright & Shine Teeth Whitening collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-ivory section-pad">
        <div className="container-lux max-w-3xl space-y-6 text-sm leading-relaxed text-medium-gray">
          <p>
            This is placeholder privacy content. Replace it with your finalized
            policy before launch. We respect your privacy and are committed to
            protecting any personal information you share with us.
          </p>
          <p>
            We collect only the information necessary to schedule appointments and
            respond to inquiries. We never sell your data to third parties.
          </p>
          <p>
            For questions about this policy, please contact us using the details
            on our contact page.
          </p>
        </div>
      </section>
    </>
  );
}
