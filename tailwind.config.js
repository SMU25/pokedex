/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#deebff",
          primary: "#2684ff",
        },
        gray: {
          hard: "#333",
        },
      },
      maxWidth: {
        40: "160px",
      },
      boxShadow: {
        "light-bottom-fog": "2px 4px 8px rgba(0, 0, 0, 0.1);",
      },
      screens: {
        default: "0px",
        xs: "450px",
        sm: "720px",
        md: "900px",
        lg: "1076px",
        gl: "1300px",
        xl: "1614px",
      },
    },
  },
  plugins: [],
};
