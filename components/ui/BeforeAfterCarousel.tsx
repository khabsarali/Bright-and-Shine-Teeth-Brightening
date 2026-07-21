"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import { beforeAfterResults, type BeforeAfter } from "@/data/beforeAfter";

/**
 * Responsive before/after carousel (built on the project's existing Swiper).
 * Each source file is a single combined image (before on top, after below),
 * shown as one card. Square source images fill a square frame with
 * object-cover, so nothing is cropped or distorted.
 */
export function BeforeAfterCarousel({
  items = beforeAfterResults,
}: {
  items?: BeforeAfter[];
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const pause = () => swiperRef.current?.autoplay?.stop();
  const resume = () => swiperRef.current?.autoplay?.start();

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      {/* Prev arrow */}
      <button
        type="button"
        aria-label="View previous result"
        onClick={() => swiperRef.current?.slidePrev()}
        className="btn-focus absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black-pure text-white shadow-soft transition-transform duration-300 ease-lux hover:scale-110 sm:-left-3 lg:-left-5"
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>

      {/* Next arrow */}
      <button
        type="button"
        aria-label="View next result"
        onClick={() => swiperRef.current?.slideNext()}
        className="btn-focus absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black-pure text-white shadow-soft transition-transform duration-300 ease-lux hover:scale-110 sm:-right-3 lg:-right-5"
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>

      <Swiper
        modules={[Keyboard, Autoplay, A11y]}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        loop
        spaceBetween={24}
        slidesPerView={1}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        a11y={{
          prevSlideMessage: "Previous result",
          nextSlideMessage: "Next result",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!px-1 !py-1"
      >
        {items.map((item, i) => (
          <SwiperSlide key={item.src} className="h-auto">
            <figure className="overflow-hidden rounded-card border border-soft-gray bg-white shadow-soft">
              <div className="relative aspect-square w-full overflow-hidden bg-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/60 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white">
                  Before
                </span>
                <span className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-white/85 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-black-pure">
                  After
                </span>
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots */}
      <div
        className="mt-8 flex items-center justify-center gap-2.5"
        aria-label="Select result slide"
      >
        {items.map((item, i) => {
          const active = i === activeIndex;
          return (
            <button
              type="button"
              key={item.src}
              aria-label={`View result ${i + 1}`}
              aria-current={active ? "true" : undefined}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={`btn-focus h-2.5 rounded-full transition-all duration-300 ${
                active
                  ? "w-6 bg-champagne"
                  : "w-2.5 bg-soft-gray hover:bg-champagne/60"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
