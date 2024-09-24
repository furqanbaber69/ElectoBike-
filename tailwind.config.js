/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        error: "#F53F3F",
        errorlight: "#FFECE8",
        warning: "#F7BA1E",
        warninglight: "#FEFFE8",
        successfull: "#00B42A",
        successlight: "#E8FFEA",
        info: "#3491FA",
        infolight: "#E8F7FF",
        primaryextradark: "#00424D",
        primarydark: "#E8FFFB",
        primary: "#14C9C9",
        primarylight: "#B7F4EC",
        primaryextralight: "#E8FFFB",
        neutral: "23272f",
        primarydark: "#07828B",
        neutral800: "#23272F",
        neutral700: "#667085",
        neutral400: "#98A2B3",
        neutral200: "#EAECF0",
        neutral50: "#F9FAFB",
      },
      fontFamily: {},
      poppins: ["var(--poppins)", "sans serif"],
      lexendDeca: ["var(--lexend_Deca"],
    },
  },
  plugins: [],
};
