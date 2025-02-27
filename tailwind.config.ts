import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/sharedComponents/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        md: "768px",
      },
    },
    extend: {
      boxShadow: {
        'custom-xl': '0px 4px 15px rgba(0, 0, 0, 0.2)', 
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter as a custom font
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        heading: "#222222",
        darkText:"#333333",
        secondary: "#001122",
        secondary10: "#FFFAF5",
        secondary20: "#FFE6CC",
        secondary30: "#FFCC99",
        secondary70: "#CC6600",
        tertiary10: "#F9F9F9",
        tertiary20: "#F0F1F0",
        tertiary30: "#444846",
        tertiary40: "#C4C7C6",
        tertiary50: "#A8ACAB",
        tertiary60: "#8D9290",
        tertiary70: "#5B5F5E",
        lightText:"#666666",
        textColor:"#888888",
        tertiary80: "#2E3130",
        tertiary90: "#1A1C1B",
        tertiary100: "#f5f6fa",
        white: "#fff",
        primary: {
          DEFAULT: "#1F8B00",
          foreground: "white",
          "10": "#EBF8E8",
          "80": "#135300",
          "20": "#D2E8CC",
          "50": "#4CA233",
          "70": "#196F00",
          "100": "#061C00",
        },
      },
    },
  },
  plugins: [],
};
export default config;
