export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ashley P.",
    role: "Verified Patient",
    quote:
      "Amazing results! My smile has never looked better. The staff is so professional and kind.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Michael S.",
    role: "Verified Patient",
    quote:
      "I saw a difference after just one visit. Bright & Shine truly lives up to their name.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Jessica L.",
    role: "Verified Patient",
    quote:
      "The best whitening experience I've ever had. Comfortable, easy, and worth every penny.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Priya R.",
    role: "Verified Patient",
    quote:
      "Elegant clinic, painless treatment, and a smile that turns heads. I recommend it to everyone.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];
