import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": '#0A0A0A',
        "off-white": '#C7C7C7',
        "primary": '#D3E97A',
      },
    },
  },
  plugins: [],
} satisfies Config;
