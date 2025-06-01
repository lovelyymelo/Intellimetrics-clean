import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./client/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        muted: "#F3F4F6",
        background: "#FFFFFF"
      }
    }
  },
  plugins: []
};
export default config;
