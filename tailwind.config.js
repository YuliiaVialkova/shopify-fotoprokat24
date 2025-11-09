/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./layout/**/*.{liquid,json}",
    "./templates/**/*.{liquid,json}",
    "./sections/**/*.{liquid,json}",
    "./snippets/**/*.{liquid,json}",
    "./assets/**/*.{liquid,json,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
