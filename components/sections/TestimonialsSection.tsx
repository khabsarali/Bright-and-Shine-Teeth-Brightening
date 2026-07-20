"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import { testimonials } from "@/data/testimonials";
import { StarRating } from "@/components/ui/StarRating";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Reveal } from "@/components/ui/Reveal";

export function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="reviews" className="bg-black-rich section-pad">
      <div className="container-lux grid gap-12 lg:grid-cols-[0.85fr_2fr] lg:items-center lg:gap-16">
        {/* Left copy */}
        <Reveal>
          <p className="eyebrow-dark">Patient Love</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] text-white md:text-5xl">
            Trusted by Thousands
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-white/65">
            Real stories from real patients who love their brighter smiles.
          </p>

          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
            <span className="font-serif text-4xl font-medium text-white">
              4.9/5
            </span>
            <span className="h-10 w-px bg-white/15" />
            <span>
              <StarRating rating={5} />
              <span className="mt-1 block text-xs text-white/55">
                Based on 1,200+ reviews
              </span>
            </span>
          </div>

          {/* Carousel controls */}
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => swiperRef.current?.slidePrev()}
              className="btn-focus flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-champagne hover:text-champagne-light"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => swiperRef.current?.slideNext()}
              className="btn-focus flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-champagne hover:text-champagne-light"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </Reveal>

        {/* Right — carousel */}
        <Reveal delay={0.1} className="min-w-0">
          <Swiper
            modules={[Navigation]}
            onSwiper={(s) => (swiperRef.current = s)}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="h-auto self-stretch">
                <div className="h-full pb-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
