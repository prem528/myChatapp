/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem', // Custom height class h-128
        '144': '36rem', // Custom height class h-144
      },
      maxHeight: {
        '128': '32rem', // Custom max-height class max-h-128
        '144': '36rem', // Custom max-height class max-h-144
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
