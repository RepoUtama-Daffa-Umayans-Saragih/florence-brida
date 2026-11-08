/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'zone-green': '#2E7D32',
        'zone-yellow': '#F9A825',
        'zone-red': '#C62828',
      },
    },
  },
  plugins: [],
};
