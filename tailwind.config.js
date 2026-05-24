/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#081028",
        royal: "#1565FF",
        soft: "#F5F7FB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        premium:
          "0 20px 60px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};