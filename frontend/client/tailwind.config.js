/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        important: "#FF0000D6",
        primary: {
          DEFAULT: "#eee3d7",
        },
        secondary: {
          DEFAULT: "#b57a5a",
        },
        tertiary: {
          DEFAULT: "#DCDDDF",
        },
        fourth: {
          DEFAULT: "#7B7167",
        },
        fifth: {
          DEFAULT: "#D7B39C",
        },
        sixth: {
          DEFAULT: "#49454F",
        },
      },
      fontFamily: {
        ADLaMDisplay: ["ADLaM DisplaY", "sans-serif"],
        Lusitana: ["Lusitana", "serif"],
        ArchivoBlack: ["Archivo Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
