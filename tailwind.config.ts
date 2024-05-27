import type { Config } from "tailwindcss";

// tailwind.config.js


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "lightbonusred": "#EE2F4F",
        "bonusred": "#C8102E",
        "darkbonusred": "#970C23",
        "lightgrey": "#F5F5F5",
        "bonusgreen": "#2EC810",
        "darkbonusgreen": "#23970C",
        "bonusgold": "#FFD700",
        "paragraphgray": "#71717a",
        "stoneblack": "#1F1F1F",
      },
    },
  },
  plugins: [],
};
export default config;
