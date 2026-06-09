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
        negro: "#1A1A1A",
        dorado: "#C9A84C",
        crema: "#F5EDD6",
        vino: "#8B1A1A",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
