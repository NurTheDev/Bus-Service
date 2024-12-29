/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontSize: {
      sm: "var(--font-sm)",
      base: "var(--font-base)",
      md: "var(--font-md)",
      lg: "var(--font-lg)",
      xl: "var(--heading)",
      "2xl": "var(--heading-2xl)",
      "3xl": "var(--heading-3xl)",
      "4xl": "var(--heading-4xl)",
      "5xl": "var(--heading-5xl)",
    },
    fontFamily: {
      Railway: "var(--font-railway)",
      Inter: "var(--font-inter)",
    },
    extend: {
      backgroundImage: {
        heroBanner: "url(src/images/banner.png)",
      },
      colors: {
        primaryColor: "var(--color-primary)",
        secondaryColor: "var(--color-secondary)",
        secondaryColor60: "var(--color-secondary-60)",
        secondaryColor80: "var(--color-secondary-80)",
        secondaryColor30: "var(--color-secondary-30)",
        secondaryColor10: "var(--color-secondary-10)",
        accentColor: "var(--color-accent)",
        primaryColorOpacity10: "var(--color-primary-opacity-10)",
        primaryColorOpacity40: "var(--color-primary-opacity-40)",
        whiteColor: "var(--white)",
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
