import type { Config } from "tailwindcss";

export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#ffffff",
          info: "#93c5fd",
          success: "#6ee7b7",
          warning: "#fef3c7",
          error: "#fb7185",
          app: "#707070",
        },
      },
    ],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} satisfies Config;
