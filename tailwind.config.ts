import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0E14",
        graphite: "#141522",
        primary: "#F5F4F8",
        title: "#F0EFF5",
        body: "#C8C6D1",
        muted: "#9A97A6",
        subtle: "#9A97A6",
        footer: "#8B8896",
        line: "#24242A",
        accent: "#B7A4FF",
        violet: {
          soft: "#B9A7FF",
          DEFAULT: "#7F68D8",
          deep: "#4D3E9C"
        }
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "SUIT",
          "Noto Sans KR",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-24px, 10px, 0)" }
        },
        trace: {
          "0%": { strokeDashoffset: "520" },
          "100%": { strokeDashoffset: "0" }
        }
      },
      animation: {
        drift: "drift 12s ease-in-out infinite",
        trace: "trace 10s linear infinite"
      },
      boxShadow: {
        violet: "0 10px 24px rgba(7, 8, 15, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
