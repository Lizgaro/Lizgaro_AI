import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D0C",
        surface: "#111412",
        "surface-2": "#171A18",
        text: "#F4F6F0",
        muted: "#9EA7A0",
        lime: "#B9FF3D",
        mint: "#63FF88"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Consolas", "monospace"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(185, 255, 61, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
