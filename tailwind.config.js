// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Ensure this is set
  ],
  theme: {
    extend: {
      // Add custom colors to replicate your existing "medics-red" and "care-blue"
      colors: {
        'medics-red': '#E74C3C', // A bright, distinct red
        'care-blue': '#3498DB',  // A distinct blue (like your existing design)
        'primary-blue': '#2C3E50', // A dark, sophisticated blue (used in your original style.css variables)
        'secondary-gray': '#6c757d',
      },
      fontFamily: {
        // Use your original fonts (you'll need to link them in index.html)
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}