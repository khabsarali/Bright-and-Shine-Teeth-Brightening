"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import type { BeforeAfterResult } from "@/data/results";
import { StarRating } from "./StarRating";

/**
 * Functional before/after comparison card with a draggable handle.
 * Supports pointer + touch drag and keyboard (arrow keys) for accessibility.
 */
export function BeforeAfterCard({ result }: { result: BeforeAfterResult }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <figure className="group overflow-hidden rounded-card border border-soft-gray bg-white shadow-soft transition-shadow duration-300 hover:shadow-soft-lg">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* After image (base layer) */}
        <Image
          src={result.afterImage}
          alt={result.afterAlt}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 22vw"
          className="object-cover"
        />

        {/* Before image (clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={result.beforeImage}
            alt={result.beforeAlt}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 22vw"
            className="object-cover"
            style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
          />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white">
          Before
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-white/80 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-black-pure">
          After
        </span>

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90"
          style={{ left: `${position}%` }}
        >
          <button
            type="button"
            role="slider"
            aria-label={`Reveal ${result.name}'s before and after — currently ${Math.round(position)}%`}
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKeyDown}
            className="btn-focus pointer-events-auto absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne/60 bg-white text-black-pure shadow-soft"
          >
            <MoveHorizontal size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <figcaption className="flex items-center justify-between px-4 py-3.5">
        <span className="font-sans text-sm font-medium text-black-pure">
          {result.name}
        </span>
        <StarRating rating={result.rating} size={14} />
      </figcaption>
    </figure>
  );
}
