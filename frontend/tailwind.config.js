/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        industrial: {
          bg: "#0A1226",
          surface: "#0f1a30",
          "surface-2": "#142038",
          accent: "#4D7FFF",
          border: "rgba(255,255,255,0.1)",
          text: "#F0F2F8",
          "text-dim": "#8A95B0",
          "text-muted": "#5A6480",
          positive: "#22C55E",
          warning: "#F59E0B",
        },
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
      },
      fontFamily: {
        authority: ["Georgia", "Times New Roman", "serif"],
        data: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "screen-2xl": "1536px",
      },
    },
  },
  plugins: [],
};
