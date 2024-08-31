/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "iris-purple": "#677cf3",
        "iris-blue": "#5ce1e6",
        "iris-grey": "#92a4c6",
        "iris-dark-grey": "#535c6d",
      },
    },
  },
  plugins: [],
};
