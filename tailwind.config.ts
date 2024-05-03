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
        "lightgrey": "#D9D9D9",
        "bonusgreen": "#2EC810",
        "paragraphgray": "#71717a",
      },
    },
  },
  plugins: [],
};
export default config;
