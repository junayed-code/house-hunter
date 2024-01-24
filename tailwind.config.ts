import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        md: "760px",
        lg: "990px",
        xl: "1125px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
};
export default config;
