import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — Bright & Shine
        black: {
          DEFAULT: "#050505",
          pure: "#050505",
          rich: "#0B0B0B",
          charcoal: "#171717",
        },
        ivory: "#F8F6F2",
        cream: "#F1EEE8",
        "soft-gray": "#E6E3DE",
        "medium-gray": "#8F8F8F",
        champagne: {
          DEFAULT: "#B5A088",
          light: "#C9B79E",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      borderRadius: {
        card: "1.75rem",
        "card-lg": "2rem",
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(5,5,5,0.18)",
        "soft-lg": "0 30px 80px -40px rgba(5,5,5,0.28)",
        glow: "0 0 60px -20px rgba(181,160,136,0.35)",
      },
      transitionTimingFunction: {
        lux: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "slow-zoom": "slow-zoom 6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
