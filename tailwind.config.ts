import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#C9A24D",
          goldLight: "#E8C97A",
          goldDark: "#9A782D",
          dark: "#0B1220",
          darker: "#060A12",
          navy: "#0E182A",
          glass: "rgba(11, 18, 32, 0.7)",
          glassLight: "rgba(255, 255, 255, 0.05)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        accent: ["var(--font-accent)", "Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E8C97A 0%, #C9A24D 50%, #9A782D 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent 0%, rgba(232, 201, 122, 0.25) 50%, transparent 100%)",
        "dark-radial": "radial-gradient(circle at 50% 0%, rgba(201, 162, 77, 0.12) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 35px -5px rgba(201, 162, 77, 0.3)",
        "gold-glow-lg": "0 0 50px -5px rgba(201, 162, 77, 0.45)",
        "glass-card": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};
export default config;
