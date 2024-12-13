import tailwindcssFilters from "tailwindcss-filters";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_gray: "#6b7280",
        custom_black: "#111827",
        custom_blue: "#2563EB",
        custom_green: "#3B8520",
        primary100: "#EEE3FF",
        secondary600: "#63D838",
      },
      fontFamily: {
        greycliff: ['"Greycliff CF"', "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssFilters],
};
