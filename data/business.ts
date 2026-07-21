/**
 * Central business contact configuration.
 *
 * The values below are PLACEHOLDERS. No phone number, email, hours, or social
 * links have been invented — replace each "ADD_…" placeholder (and empty
 * social URLs) with the real details, and they will automatically appear in
 * the header, footer, and contact page. Until then, `isProvided` hides those
 * fields from the published page.
 */
export const business = {
  phone: "ADD_BUSINESS_PHONE",
  email: "ADD_BUSINESS_EMAIL",
  businessHours: "ADD_BUSINESS_HOURS",
  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    google: "",
  } as Record<string, string>,
};

/** True only when a config value is a real, usable detail (not a placeholder). */
export function isProvided(value: string | undefined | null): value is string {
  return Boolean(value && value.trim() && !value.startsWith("ADD_"));
}

/** Build a tel: href from the configured phone, or undefined if unset. */
export const phoneHref = () =>
  isProvided(business.phone)
    ? `tel:${business.phone.replace(/[^\d+]/g, "")}`
    : undefined;

/** Build a mailto: href from the configured email, or undefined if unset. */
export const emailHref = () =>
  isProvided(business.email) ? `mailto:${business.email}` : undefined;
