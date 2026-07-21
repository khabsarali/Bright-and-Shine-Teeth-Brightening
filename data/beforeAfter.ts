export interface BeforeAfter {
  /** Public path (spaces URL-encoded) to a combined before/after image. */
  src: string;
  alt: string;
}

/**
 * Real client before/after results. Each file is a single combined image with
 * the "before" smile on top and the "after" smile below. Filenames live in
 * `public/Teeths after/` and are kept verbatim (note the "befor" spelling and
 * the spaces, which are URL-encoded here).
 */
export const beforeAfterResults: BeforeAfter[] = [
  {
    src: "/Teeths%20after/before%20and%20after%201.webp",
    alt: "Client teeth before whitening (top) and noticeably brighter after treatment (bottom)",
  },
  {
    src: "/Teeths%20after/befor%20and%20after%202.jpg",
    alt: "Close-up of teeth before whitening (top) and brighter after treatment (bottom)",
  },
  {
    src: "/Teeths%20after/before%20and%20after%203.jpg",
    alt: "Client smile before whitening (top) and after a brighter result (bottom)",
  },
  {
    src: "/Teeths%20after/before%20and%20after%204.jpg",
    alt: "Teeth shade before whitening (top) and lighter shade after treatment (bottom)",
  },
  {
    src: "/Teeths%20after/before%20and%20after%205.jpg",
    alt: "Client teeth before whitening (top) and whiter after treatment (bottom)",
  },
  {
    src: "/Teeths%20after/before%20and%20after%206.jpg",
    alt: "Smile before whitening (top) and brighter, whiter smile after treatment (bottom)",
  },
];
