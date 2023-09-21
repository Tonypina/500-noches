/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "1.75rem",
        md: "2rem",
        lg: "2.365",
        xlg: "3.625",
      },
      colors: {
        white: "#F6F7F4",
        main: "#0C4457",
        gold: "#AB9753",
      },
    },
  },
  variants: {},
  plugins: [],
};
