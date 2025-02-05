/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: {"max": "640px"}, // Ajoute xs comme taille d'écran personnalisée
      },
      fontFamily: {
        abhaya: ['"Abhaya Libre"', "serif"],
      },
      fontSize: {
        "dynamic-xs": "var(--text-xs)",
        "dynamic-sm": "var(--text-sm)",
        "dynamic-base": "var(--text-base)",
        "dynamic-lg": "var(--text-lg)",
        "dynamic-xl": "var(--text-xl)",
        "dynamic-2xl": "var(--text-2xl)",
        "dynamic-3xl": "var(--text-3xl)",
        "dynamic-4xl": "var(--text-4xl)",
        "dynamic-5xl": "var(--text-5xl)",
        "dynamic-6xl": "var(--text-6xl)",
        "dynamic-7xl": "var(--text-7xl)",
        "dynamic-8xl": "var(--text-8xl)",
        "dynamic-9xl": "var(--text-9xl)",
      },
    },
  },
  plugins: [],
};
