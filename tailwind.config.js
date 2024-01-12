/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39469B",
        secondary: "#F4E6D7",
      },
      fontFamily: {
        serif: ["Fromage, serif"],
        sans: ["Montserrat, sans-serif"],
      },
      fontSize: {
        home: "14vw",
      },
      maxWidth: {
        900: "900px",
      },
      borderRadius: {
        blob: "40% 56% 72% 28% / 42% 42% 56% 48%",
      },
      keyframes: {
        morph: {
          "100%": { borderRadius: "42% 56% 72% 28% / 42% 42% 56% 48%" },
          "33%": { borderRadius: "72% 28% 48% 48% / 28% 28% 72% 72%" },
          "66%": { borderRadius: "100% 56% 56% 100% / 100% 100% 56% 56%" },
        },
      },
      screens: {
        "md-750": "750px",
        "md-900": "900px",
        "xl-1400": "1400px",
      },
    },
  },
  plugins: [],
};
