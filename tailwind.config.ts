import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       fontFamily: {
        italianno: ["var(--font-italianno-sans)", "cursive"],
        manrope: ["var(--font-manrope-sans)", "sans-serif"],
        roboto: ["var(--font-roboto-sans)", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
