/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        /* Neutral Colors */
        gray: {
          50: "#F7F8F8",
          900: "#030712",
        },
        black: "#000000",
        white: "#FFFFFF",

        /* Primary Colors */
        green: {
          primary: "#1DD100",
        },
        blue: {
          primary: "#4285F4",
        },
        red: {
          primary: "#EA4335",
        },
        yellow: {
          primary: "#FFBC04",
        },
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        /* Custom Gradients */
        "gradient-light": ["#030712 50%", "#000000 0%"],
        "gradient-accent": ["#1DD100 40%", "#1DD100 15%", "#1DD100 10%"],
      }),
    },
  },
  plugins: [require("daisyui")],
};
