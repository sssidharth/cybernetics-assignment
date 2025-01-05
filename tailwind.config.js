/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React files
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato"]
      },
      colors: {
        "black-bg": "#232323",
        "black-font": "#232323",
        "container-bg": "#F5F7FA",
        "white-font": "#FFFFFF",
        "disabled_font": "#B1B1B1",
        "light-gray-font": "#718EBF",
        "black-font-light": "#343C6A",
        "border_color": "#E6EFF5",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
      },
    },
  },
  plugins: [],
};