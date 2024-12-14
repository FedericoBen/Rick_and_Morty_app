import tailwindcssFilters from "tailwindcss-filters";
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_gray: "#6B7280",
        custom_gray_dark: "#F3F4F6",
        custom_black: "#111827",
        custom_blue: "#2563EB",
        custom_green: "#3B8520",
        primary100: "#EEE3FF",
        primary600: "#8054C7",
        primary700: "#5A3696",
        secondary600: "#63D838",
      },
      spacing: {
        ...defaultTheme.spacing,
        1: "1px",
        4: "4px",
        8: "8px",
        9: "9px",
        12: "12px",
        13: "13px",
        14: "14px",
        "15-36": "15.36px",
        17: "17px",
        18: "18px",
        20: "20px",
        24: "24px",
        32: "32px",
        34: "34px",
        38: "38px",
        40: "40px",
        42: "42px",
        44: "44px",
        45: "45px",
        52: "52px",
        56: "56px",
        64: "64px",
        74: "74px",
        "88-5": "88.5px",
        100: "100px",
        175: "175px",
        278: "278px",
        343: "343px",
        375: "375px",

        "110%": "0%",
      },
      fontFamily: {
        greycliff: ['"Greycliff CF"', "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssFilters],
};
