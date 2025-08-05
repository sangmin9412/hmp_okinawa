import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontSize: {
      "2xs": "1rem",
      xs: "1rem",
      sm: "1.2rem",
      md: "1.4rem",
      base: "1.6rem",
      lg: "1.8rem"
    },
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1120px",
      xl: "1120px",
      "2xl": "1920px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        xs: "2rem",
        sm: "2rem",
        md: "2rem",
        lg: "0rem",
        xl: "0rem",
        "2xl": "0rem"
      },
      screens: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "1120px",
        xl: "1120px",
        "2xl": "1120px"
      }
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff"
        },
        foreground: {
          DEFAULT: "#0a0a0a"
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0a0a0a"
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0a0a0a"
        },
        primary: {
          DEFAULT: "#0793ea",
          foreground: "#fafafa"
        },
        secondary: {
          DEFAULT: "#002c5f",
          foreground: "#fafafa"
        },
        tertiary: {
          DEFAULT: "#1c6bba",
          foreground: "#fafafa"
        },
        navy: {
          DEFAULT: "#0F4C88",
          foreground: "#fafafa"
        },
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#737373"
        },
        accent: {
          DEFAULT: "#f5f5f5",
          foreground: "#171717"
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#fafafa"
        },
        black: "#000000",
        border: "#e5e5e5",
        input: "#e5e5e5",
        ring: "#0a0a0a",
        chart: {
          "1": "#e85d45",
          "2": "#2b8c84",
          "3": "#1f3339",
          "4": "#d4b048",
          "5": "#e66b33"
        }
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)"
      }
    }
  },
  plugins: [animate]
} satisfies Config;
