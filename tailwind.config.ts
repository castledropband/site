import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a7727d",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        unifraktur: ["var(--font-unifraktur)"],
      },
    },
  },
  plugins: [],
};

export default config;
