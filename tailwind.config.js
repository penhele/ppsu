/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          ppsu: {
            DEFAULT: "#f97316",
            dark: "#ea580c",
            soft: "#fff7ed",
          },
        },
        borderRadius: {
          xl: "0.75rem",
        },
        boxShadow: {
          card: "0 10px 16px -4px rgb(0 0 0 / 0.08)",
        },
      },
    },
    plugins: [],
  };
  