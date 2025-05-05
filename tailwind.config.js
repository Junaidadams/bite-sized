/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#130C02",
        mainGray: "#50514F",
        mainWhite: "#F1F2F6",
        mainBlue: "#92C9C9",
        mainOrange: "#FF8600",
      },
    },
  },
  plugins: [],
};
