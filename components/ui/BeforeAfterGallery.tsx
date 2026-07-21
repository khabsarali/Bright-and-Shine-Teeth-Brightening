"use client";

import { useCallback, useEffect, useState } from "react";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { beforeAfterResults, type BeforeAfter } from "@/data/beforeAfter";

/**
 * Responsive before/after gallery. Each source file is a single combined
 * image (before on top, after below), shown cover-fit in a uniform card and
 * opened complete/uncropped in a lightbox.
 */
export function BeforeAfterGallery({
  items = beforeAfterResults,
}: {
  items?: BeforeAfter[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback(
    (dir: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + dir + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, show]);

  const active = openIndex === null ? null : items[openIndex];

  return (
    <>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View result ${i + 1} full size`}
              className="group relative block w-full overflow-hidden rounded-card border border-soft-gray bg-white shadow-soft transition-all duration-300 ease-lux hover:-translate-y-1 hover:shadow-soft-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-lux group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/60 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white">
                  Before
                </span>
                <span className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-white/85 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-black-pure">
                  After
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-black-pure opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100"
                >
                  <Expand size={16} />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black-pure/85 p-4 backdrop-blur-sm animate-fade-up"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
          >
            <X size={20} />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  show(-1);
                }}
                aria-label="Previous result"
                className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  show(1);
                }}
                aria-label="Next result"
                className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:top-4 sm:bottom-auto"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={active.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[86vh] w-auto max-w-full rounded-card object-contain shadow-soft-lg"
          />
        </div>
      )}
    </>
  );
}
