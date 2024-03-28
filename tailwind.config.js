const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "1rem",
        sm: "1.2rem",
        md: "1.7rem",
        lg: "2rem",
        xlg: "2.5rem",
      },

      fontFamily: {
        adam: ['var(--font-adam)'],
        black_burger: ['var(--font-black-burger)'],
        black_coffee: ['var(--font-black-coffee)'],
        georgia: ['var(--font-georgia)'],
        montserrat: ['var(--font-montserrat)'],
        news_goth: ['var(--font-news-goth)'],
        raleway: ['var(--font-raleway)'],
        roboto: ['var(--font-roboto)'],
        bridge: ['var(--font-bridge)'],
      },

      colors: {
        white: "#F6F7F4",
        main: "#0C4457",
        second: "#4E687D",
        gold: "#AB9753",
        red: "#830002",
        coffee: "#48271A",
      },
      contianer: {
        "8rem": "8rem",
      },
      backgroundImage: {
        heroRestaurant:
          "http://localhost:3000/restaurantes/500Noches/espacio500Noches.png",
        "footer-texture": "http://localhost:3000/azul-concreto.png",
        "textura-prueba": "http://localhost:3000/galeria/texturas/306.jpg",
      },
    },
  },
  
  variants: {},
  darkmode: "class",
  plugins: [nextui()],
});
