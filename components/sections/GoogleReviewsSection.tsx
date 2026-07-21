"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import { reviews } from "@/data/reviews";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Reveal } from "@/components/ui/Reveal";

export function GoogleReviewsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Pause autoplay while the carousel has keyboard focus (hover pause is
  // handled by Swiper's pauseOnMouseEnter).
  const pause = () => swiperRef.current?.autoplay?.stop();
  const resume = () => swiperRef.current?.autoplay?.start();

  return (
    <section id="google-reviews" className="bg-black-rich section-pad">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-dark">Google Reviews</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-white md:text-5xl">
            Loved by Our Clients
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            Real, verified reviews from our clients on Google.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 min-w-0">
          <div
            onFocusCapture={pause}
            onBlurCapture={resume}
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(s) => (swiperRef.current = s)}
              spaceBetween={24}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-2"
            >
              {reviews.map((review, i) => (
                <SwiperSlide key={`${review.name}-${i}`} className="h-auto self-stretch">
                  <div className="h-full pb-1">
                    <ReviewCard review={review} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Accessible controls */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => swiperRef.current?.slidePrev()}
              className="btn-focus flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-champagne hover:text-champagne-light"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => swiperRef.current?.slideNext()}
              className="btn-focus flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-champagne hover:text-champagne-light"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
