/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        aregular: ["amiriRegular", "sans-serif"],
        aitalic: ["amiriItalic", "sans-serif"],
        abold: ["amiriBold", "sans-serif"],
        aboldItalic: ["amiriBoldItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
