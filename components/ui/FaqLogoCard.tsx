/**
 * Premium logo panel used in the FAQ areas (homepage section + /faq page) in
 * place of a stock photo. Shows the brand lockup on a soft light card with a
 * subtle champagne glow. The source PNG is black artwork on a transparent
 * background, so on this light card it's shown without any whitening filter.
 */
export function FaqLogoCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-card border border-soft-gray bg-gradient-to-br from-cream to-ivory p-10 shadow-soft lg:min-h-[360px] ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-champagne/15 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-8 h-52 w-52 rounded-full bg-champagne/10 blur-3xl"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/white-logo.png"
        alt="Bright and Shine Teeth Whitening"
        className="relative z-10 w-full max-w-[260px] object-contain"
      />
    </div>
  );
}
