export interface BeforeAfter {
  /** Public path (folder space URL-encoded) to a combined before/after image. */
  src: string;
  alt: string;
}

/**
 * Real client before/after results. Each file is a single combined image with
 * the "before" smile on top and the brighter "after" smile below. Files live
 * in `public/Teeths after/` (the folder space is URL-encoded here).
 */
export const beforeAfterResults: BeforeAfter[] = [
  {
    src: "/Teeths%20after/after1.jpeg",
    alt: "Client teeth before whitening (top) and noticeably brighter after treatment (bottom)",
  },
  {
    src: "/Teeths%20after/after3.jpeg",
    alt: "Client smile before whitening (top) and a brighter result after treatment (bottom)",
  },
  {
    src: "/Teeths%20after/after4.jpeg",
    alt: "Teeth shade before whitening (top) and a lighter shade after treatment (bottom)",
  },
  {
    src: "/Teeths%20after/after5.jpeg",
    alt: "Client teeth before whitening (top) and whiter after treatment (bottom)",
  },
  {
    src: "/Teeths%20after/after6.jpeg",
    alt: "Smile before whitening (top) and a brighter, whiter smile after treatment (bottom)",
  },
];
