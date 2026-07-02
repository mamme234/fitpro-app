module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f8ff",
          100: "#e6f1ff",
          500: "#2563eb",
          700: "#1e40af"
        },
        accent: {
          500: "#06b6d4"
        }
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  plugins: []
};
