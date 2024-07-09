/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-green-500',
    'bg-yellow-500',
    'bg-gray-500',
    'w-20'
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
};
