export interface NavLink {
  label: string;
  href: string;
}

/**
 * Primary header navigation. Results, Reviews, and FAQ intentionally do NOT
 * appear here — those sections still live on the homepage, they're just not
 * top-level menu items.
 */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Locations", href: "/#locations" },
  { label: "Contact", href: "/contact" },
];
