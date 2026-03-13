import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-green':       '#2D6A4F',
        'brand-dark':        '#1A2E1A',
        'brand-light-green': '#74C69D',
        'brand-cream':       '#F4F1E8',
        'brand-slate':       '#2C3E50',
        'brand-water':       '#1B4F72',
      },
    },
  },
  plugins: [],
};
export default config;
