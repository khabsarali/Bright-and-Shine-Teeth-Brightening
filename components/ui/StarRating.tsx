import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  className?: string;
  size?: number;
}

export function StarRating({ rating, className = "", size = 16 }: StarRatingProps) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? "fill-champagne text-champagne" : "text-soft-gray"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
