import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const defaultColors = {
  primary: {
    50: '#FDF2FF',
    100: '#FAE6FF',
    200: '#F5CCFF',
    300: '#F0B3FF',
    400: '#EB99FF',
    500: '#EE00CC',
    600: '#D600B8',
    700: '#BF00A3',
    800: '#A7008F',
    900: '#8F007A',
  },
  secondary: {
    50: '#E6FBFF',
    100: '#CCF7FE',
    200: '#99EEFD',
    300: '#66E6FC',
    400: '#33DDFB',
    500: '#00D5FA',
    600: '#00A9C8',
    700: '#007D96',
    800: '#005264',
    900: '#002632',
  },
  accent: {
    50: '#FFF5F5',
    100: '#FFE0E0',
    200: '#FFC7C7',
    300: '#FFA8A8',
    400: '#FF8989',
    500: '#FF6B6B',
    600: '#FF4D4D',
    700: '#FF2E2E',
    800: '#FF1010',
    900: '#F20000',
  },
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              ...defaultColors.primary,
              DEFAULT: "#53fe34",
            },
            // You can add overrides for other color schemes here
          },
        },
        dark: {
          colors: {
            background: "#11181C",
            foreground: "#ECEDEE",
            primary: {
              ...defaultColors.primary,
              DEFAULT: "#53fe34",
            },
            // You can add dark mode color overrides here
            

          },
        },
        // You can add more custom themes here
      },
    }),
  ],
};

export default config;