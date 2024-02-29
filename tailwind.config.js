/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#3FAF84",
        customBlack: {
          4: "#444444",
          3: "#333333",
          2: "#222222",
          1: "#111111",
        },
        customTransparent: {
          2: "rgba(0,0,0,.2)",
          5: "rgba(0,0,0,.5)",
        },
      },
    },
  },
  plugins: [],
};
