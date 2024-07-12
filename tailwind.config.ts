import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBlack: "#151515",
        themeRed: "#A91D3A",
        themePink: "#C73659",
        themeGrey: "#EEEEEE"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-light": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 4px 8px rgba(0, 0, 0, 0.3)",
        "custom-heavy": "0 10px 15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
};
export default config;
