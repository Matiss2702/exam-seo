import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "500px",
      },
      fontFamily: {
        pally: ["var(--font-pally)"],
        neco: ["var(--font-neco)"],
      },
      colors: {
        primary: {
          50: "#f6faf3",
          100: "#e9f5e3",
          200: "#d3eac8",
          300: "#afd89d",
          400: "#82bd69",
          500: "#61a146",
          600: "#4c8435",
          700: "#3d692c",
          800: "#345427",
          900: "#2b4522",
          950: "#13250e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
