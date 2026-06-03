import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Основной фон — пастельная лаванда */
        lavender: "#E6E6FA",
        "lavender-light": "#F0F0FC",
        "lavender-soft": "#F5F5FD",
        /** Акцент с абонемента (пыльная сирень) */
        "lavender-deep": "#D4C4D4",
        "lavender-petal": "#D8D4EC",
        ink: "#1A1918",
        stone: "#5C5560",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.25rem, 5.5vw, 3.75rem)",
          { lineHeight: "1.1", letterSpacing: "0.02em" },
        ],
        "display-lg": [
          "clamp(1.75rem, 4vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "0.04em" },
        ],
      },
      maxWidth: {
        prose: "34rem",
        editorial: "42rem",
        page: "72rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
