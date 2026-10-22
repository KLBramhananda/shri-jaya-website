import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#EFE7DC", paper: "#F6F0E6", brown: "#402E1A", bronze: "#7A4F1E",
        gold: "#B8863B", gold2: "#D9B26A", ink: "#1A120A",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Noto Serif Kannada", "serif"],
        body: ["Inter", "Noto Sans Kannada", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
