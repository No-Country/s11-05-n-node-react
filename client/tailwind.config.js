/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"']
      },

      colors: {
        login: "#F1F3FF",
        background: "#C5CBDE",
        links: "#4A9DFF",
        buttons: "#79747E"
      }
    }
  },
  plugins: []
};
