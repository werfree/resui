import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgb(79, 70, 229)", // Equivalent to Tailwind's indigo-600
        secondary: "rgb(234, 88, 12)", // Equivalent to Tailwind's orange-600
        info: "rgb(37, 99, 235)",
      },
      animation: {
        tilt: "tilt 3s linear infinite",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1.5deg)" },
          "75%": { transform: "rotate(-1.5deg)" },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
} satisfies Config;
