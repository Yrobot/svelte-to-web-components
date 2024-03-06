/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,svelte,ts}", "index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
