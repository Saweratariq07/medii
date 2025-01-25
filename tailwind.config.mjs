/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],  // Content paths to include for Tailwind to purge unused CSS

  theme: {
    extend: {
      fontFamily: {
        destine: ['Destine', 'sans-serif'],  // Added custom font family
      },
    },
  },

  plugins: [],
};
