/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3E50",
        bgLightGrey: "#F5F5F5",
        letters: "#1E1E1E",
        bgGrey: "#E8E8E8"
      },
      boxShadow: {
        'pronounced': '100px 10px 2px rgba(0, 0, 0, 1) ', // Increased opacity and blur radius
      },
    },
  },
  plugins: [],
}

