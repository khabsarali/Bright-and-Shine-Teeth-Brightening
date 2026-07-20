export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  phone: "(888) 246-2024",
  phoneHref: "tel:+18882462024",
  email: "hello@brightandshine.com",
  address: "123 Smile Street, Suite 101, Beverly Hills, CA 90210",
  hours: "Mon – Fri: 9AM – 6PM",
};
