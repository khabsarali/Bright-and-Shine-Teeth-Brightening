"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { BadgeCheck, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BookingButton } from "@/components/ui/BookingButton";
import type { ReviewVideo } from "@/lib/videos";

/**
 * Premium video testimonial carousel. Videos are read dynamically from
 * public/videos (see lib/videos.ts) and passed in, so nothing is hardcoded.
 * Shows 4 cards on desktop / 2 on tablet / 1 on mobile, with arrow navigation
 * and touch swipe. Each card is a lightweight thumbnail; the full video only
 * loads in a modal when opened, so at most one video plays at a time.
 */
export function VideoReviewsSection({ videos }: { videos: ReviewVideo[] }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState<ReviewVideo | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActive(null), []);

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

  if (!videos.length) return null;

  return (
    <section id="video-reviews" className="bg-cream section-pad">
      <div className="container-lux">
        <SectionHeading
          align="center"
          eyebrow="Real Client Experiences"
          title="Smiles That Speak for Themselves"
          description="Watch real clients share their Bright and Shine teeth-brightening experience and results."
          className="mb-12 md:mb-16"
        />

        <Reveal className="relative">
          {/* Prev arrow */}
          <button
            type="button"
            aria-label="View previous reviews"
            onClick={() => swiperRef.current?.slidePrev()}
            className="btn-focus absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black-pure text-white shadow-soft transition-transform duration-300 ease-lux hover:scale-110 sm:-left-3 lg:-left-5"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            aria-label="View more reviews"
            onClick={() => swiperRef.current?.slideNext()}
            className="btn-focus absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black-pure text-white shadow-soft transition-transform duration-300 ease-lux hover:scale-110 sm:-right-3 lg:-right-5"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>

          <Swiper
            modules={[Keyboard, A11y]}
            onSwiper={(s) => (swiperRef.current = s)}
            loop={videos.length > 4}
            spaceBetween={24}
            slidesPerView={1}
            keyboard={{ enabled: true }}
            a11y={{
              prevSlideMessage: "Previous reviews",
              nextSlideMessage: "More reviews",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="!px-1 !py-1"
          >
            {videos.map((video, i) => (
              <SwiperSlide key={video.src} className="h-auto">
                <button
                  type="button"
                  onClick={() => setActive(video)}
                  aria-label={`Play ${video.title}`}
                  className="group relative block w-full overflow-hidden rounded-[20px] border border-soft-gray bg-black-pure shadow-soft transition-all duration-300 ease-lux hover:-translate-y-1 hover:border-champagne hover:shadow-soft-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                >
                  {/* Lightweight thumbnail: first frame via #t=0.1 */}
                  <video
                    className="aspect-[4/5] w-full object-cover"
                    preload="metadata"
                    muted
                    playsInline
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <source src={`${video.src}#t=0.1`} type={video.type} />
                  </video>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black-pure/55 via-black-pure/5 to-transparent"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black-pure shadow-soft transition-transform duration-300 ease-lux group-hover:scale-110"
                  >
                    <Play className="ml-0.5 h-6 w-6 fill-current" />
                  </span>

                  <span className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 p-4 text-left">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-champagne-light" />
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-white">
                      Client Review
                    </span>
                  </span>
                  {/* keep index referenced for a stable, unique aria order */}
                  <span className="sr-only">{`Review ${i + 1}`}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

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
