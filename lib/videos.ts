import fs from "node:fs";
import path from "node:path";

export interface ReviewVideo {
  /** Public URL (filename URL-encoded so spaces resolve). */
  src: string;
  /** MIME type derived from the file extension. */
  type: string;
  title: string;
}

const VIDEO_TYPES: Record<string, string> = {
  ".mp4": "video/mp4",
  ".m4v": "video/mp4",
  ".mov": "video/quicktime",
  ".webm": "video/webm",
  ".ogg": "video/ogg",
  ".ogv": "video/ogg",
};

/**
 * Reads every video file from public/videos at build time. Nothing is
 * hardcoded — dropping a new video into the folder adds it to the carousel.
 * Sorted with natural numeric ordering (so "video review 2" precedes
 * "video review 10").
 */
export function getReviewVideos(): ReviewVideo[] {
  const dir = path.join(process.cwd(), "public", "videos");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((f) => VIDEO_TYPES[path.extname(f).toLowerCase()])
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
    )
    .map((file, i) => ({
      src: `/videos/${encodeURIComponent(file)}`,
      type: VIDEO_TYPES[path.extname(file).toLowerCase()],
      title: `Client Review ${String(i + 1).padStart(2, "0")}`,
    }));
}
