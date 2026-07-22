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
  // WhatsApp number in international format, digits only.
  // The floating WhatsApp button appears once this is set.
  whatsapp: "17806160398",
  socials: {
    instagram:
      "https://www.instagram.com/bright_n_shine_teeth_whitening?igsh=MXR5NHB3bTE1bWxzeg%3D%3D&utm_source=qr",
    tiktok: "https://www.tiktok.com/@bnsteethwhitening?_r=1&_t=ZS-98CXfA4ZKjo",
    facebook:
      "https://www.facebook.com/profile.php?id=100088371202847&mibextid=wwXIfr&rdid=O1tUUsAceOebtPro&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Bdg6KdPwL%2F%3Fmibextid%3DwwXIfr",
    pinterest: "https://pin.it/1sA75Ytet",
    google: "https://share.google/jM8xeusrhNpDLCzVQ",
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

/** Build a wa.me href from the configured WhatsApp number, or undefined. */
export const whatsappHref = () =>
  isProvided(business.whatsapp)
    ? `https://wa.me/${business.whatsapp.replace(/[^\d]/g, "")}`
    : undefined;
