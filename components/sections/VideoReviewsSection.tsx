"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BadgeCheck, Play, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";

type VideoReview = {
  id: number;
  /** Public URL — spaces are pre-encoded so the path resolves correctly. */
  src: string;
  /** MIME type of the source file. */
  type: string;
  title: string;
};

/**
 * Real client filenames in /public/videos (kept verbatim, spaces encoded):
 *   Review1.MP4, "Review 2.MOV", "Review 3.MP4", "Review 4.MP4".
 * Requested display order: Review1, Review2, Review4, Review3.
 */
const videoReviews: VideoReview[] = [
  { id: 1, src: "/videos/Review1.MP4", type: "video/mp4", title: "Client Review 01" },
  { id: 2, src: "/videos/Review%202.MOV", type: "video/quicktime", title: "Client Review 02" },
  { id: 3, src: "/videos/Review%204.MP4", type: "video/mp4", title: "Client Review 03" },
  { id: 4, src: "/videos/Review%203.MP4", type: "video/mp4", title: "Client Review 04" },
];

export function VideoReviewsSection() {
  const [active, setActive] = useState<VideoReview | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActive(null), []);

  // Lock background scroll, close on Escape, and focus the close button
  // while the modal is open. The modal's <video> only mounts when `active`
  // is set, so at most one video ever loads or plays at a time.
  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <section id="video-reviews" className="bg-cream section-pad">
      <div className="container-lux mx-auto max-w-[1280px]">
        <SectionHeading
          align="center"
          eyebrow="Real Client Experiences"
          title="Smiles That Speak for Themselves"
          description="Watch real clients share their Bright and Shine teeth-brightening experience and results."
          className="mb-12 md:mb-16"
        />

        {/* Video grid: 4-up on desktop, 2-up on tablet, 1-up on mobile */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videoReviews.map((review, i) => (
            <Reveal as="li" key={review.id} delay={i * 0.06}>
              <button
                type="button"
                onClick={() => setActive(review)}
                aria-label={`Play ${review.title}`}
                className="group relative block w-full overflow-hidden rounded-[20px] border border-soft-gray bg-black-pure shadow-soft transition-all duration-300 ease-lux hover:-translate-y-1 hover:border-champagne hover:shadow-soft-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
              >
                {/* Thumbnail: first frame via #t=0.1, cover-fit for a uniform
                    grid. The full, uncropped video plays in the modal. */}
                <video
                  className="aspect-[4/5] w-full object-cover"
                  preload="metadata"
                  muted
                  playsInline
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <source src={`${review.src}#t=0.1`} type={review.type} />
                </video>

                {/* Readability scrim */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black-pure/55 via-black-pure/5 to-transparent"
                />

                {/* Centred play button */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black-pure shadow-soft transition-transform duration-300 ease-lux group-hover:scale-110"
                >
                  <Play className="ml-0.5 h-6 w-6 fill-current" />
                </span>

                {/* Label + verified badge */}
                <span className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 p-4 text-left">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-champagne-light" />
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-white">
                    Client Review
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>

        {/* Bottom booking prompt */}
        <Reveal className="mt-14 flex flex-col items-center gap-5 text-center md:mt-16">
          <p className="font-serif text-2xl font-medium text-black-pure md:text-3xl">
            Ready to feel more confident about your smile?
          </p>
          <BookingButton variant="accent" size="lg">
            Book Your Brightening Session
          </BookingButton>
        </Reveal>
      </div>

      {/* Video modal — mounted only while a review is active */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black-pure/80 p-4 backdrop-blur-sm animate-fade-up"
        >
          <div
            className="relative w-full max-w-[440px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
            >
              <X className="h-5 w-5" />
            </button>

            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label={active.title}
              className="max-h-[80vh] w-full rounded-[20px] bg-black object-contain shadow-soft-lg"
            >
              <source src={active.src} type={active.type} />
              Your browser does not support the video element.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
