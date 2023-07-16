/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "160%"],
      sm: ["14px", "24px"],
      base1: ["20px", "160%"],
      lg: ["24px", "140%"],
      xl: ["32px", "140%"],
      "2xl": ["40px", "140%"],
    },
    extend: {
      fontFamily: {
        poppins: ["var(--poppins-font)", ...fontFamily.serif],
        roboto: ["var( --roboto-font)"],
      },
      lineHeight: {
        "160%": "160%",
        "140%": "140%",
      },
      colors: {
        light: {
          100: "#FFFFFF",
          200: "#FFFAF1",
          300: "#E1E1E6",
          400: "#C4C4CC",
          500: "#7C7C8A",
          600: "#76797B",
          700: "#4D585E",
        },
        dark: {
          100: "#000405",
          200: "#00070A",
          300: "#000204",
          400: "#000A0F",
          500: "#000C12",
          600: "#00111A",
          700: "#001119",
          800: "#0D161B",
          900: "#0D1D25",
          1000: "#192227",
        },
        tomato: {
          100: "#750310",
          200: "#92000E",
          300: "#AB222E",
          400: "#AB4D55",
        },
        carrot: {
          100: "#FBA94C",
        },
        mint: {
          100: "#04D361",
        },
        cake: {
          100: "#065E7C",
          200: "#82F3FF",
        },
      },
      backgroundImage: {
        "gradient-100":
          "linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%)",
        "gradient-200": "linear-gradient(180deg, #091E26 0%, #00131C 100%)",
      },
    },
  },
  plugins: [],
};
