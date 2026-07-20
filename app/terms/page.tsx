import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of Bright & Shine Teeth Whitening services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="bg-ivory section-pad">
        <div className="container-lux max-w-3xl space-y-6 text-sm leading-relaxed text-medium-gray">
          <p>
            This is placeholder terms content. Replace it with your finalized
            terms before launch. By using our website and services, you agree to
            the terms outlined here.
          </p>
          <p>
            Appointments are subject to availability and confirmation. Pricing is
            subject to change. Please review your treatment plan with our
            specialists prior to your visit.
          </p>
          <p>
            For questions about these terms, please contact us using the details
            on our contact page.
          </p>
        </div>
      </section>
    </>
  );
}
