/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilregular: ["Gilroy-Regular", "sans-serif"],
        gilmedium: ["Gilroy-Medium", "sans-serif"],  
        gilextra: ["Gilroy-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
