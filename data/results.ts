export interface BeforeAfterResult {
  name: string;
  rating: number;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

/**
 * Placeholder before/after imagery. The "before" frame uses a warmer/duller
 * smile and the "after" a brighter one. Replace with the client's real
 * patient results (with consent) before launch.
 */
export const results: BeforeAfterResult[] = [
  {
    name: "Sarah M.",
    rating: 5,
    beforeImage:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=700&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
    beforeAlt: "Sarah's smile before whitening treatment",
    afterAlt: "Sarah's brighter smile after whitening treatment",
  },
  {
    name: "James T.",
    rating: 5,
    beforeImage:
      "https://images.unsplash.com/photo-1595003500447-88f8f8b1bac8?auto=format&fit=crop&w=700&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1601298386366-c26cf5b02f60?auto=format&fit=crop&w=700&q=80",
    beforeAlt: "James's smile before whitening treatment",
    afterAlt: "James's brighter smile after whitening treatment",
  },
  {
    name: "Melissa R.",
    rating: 5,
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
    beforeAlt: "Melissa's smile before whitening treatment",
    afterAlt: "Melissa's brighter smile after whitening treatment",
  },
  {
    name: "Tyler G.",
    rating: 5,
    beforeImage:
      "https://images.unsplash.com/photo-1581590212047-c5f5c1a6cbde?auto=format&fit=crop&w=700&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=700&q=80",
    beforeAlt: "Tyler's smile before whitening treatment",
    afterAlt: "Tyler's brighter smile after whitening treatment",
  },
];
