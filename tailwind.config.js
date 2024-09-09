/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mdBg': "url('/laptop_bg.svg')",
        'smBg': "url('/mobile_bg.svg')",
      }
    },
  },
  plugins: [],
}

