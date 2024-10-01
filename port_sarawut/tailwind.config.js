/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f5122e",
          "secondary": "#f5122e",
          "accent": "#f5122e",
          "neutral": "#0e0e0e",
          "base-100": "#0e0e0e",
        },
      },
    ],
  },
}

