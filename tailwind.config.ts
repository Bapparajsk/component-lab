import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const flattenColorPalette = (colors: Record<string, any>): Record<string, any> => Object.assign({}, ...Object.entries(colors !== null && colors !== void 0 ? colors : {}).flatMap(([color, values]) => typeof values == "object" ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
  [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex
})) : [
  {
    [`${color}`]: values
  }
]));

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite DE Grund", "cursive"],
        fredoka: ["Fredoka", "sans-serif"],
        rubik: ["Rubik","sans-serif"],
        "Work-Sans": ["Work Sans", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        gradient: "gradient 8s linear infinite",
        'fade-up': 'fade-up 1000ms var(--animation-delay, 0ms) ease forwards',
        'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
      },
      keyframes: {
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'none' }
        },
        'image-glow': {
          '0%': {
            opacity: '0',
            'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)'
          },
          '10%': {
            opacity: '0.7',
            'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)'
          },
          '100%': {
            opacity: '0.4'
          }
        },
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      screens: {
        "3xl": "1800px",
      },
      backgroundImage: {
        "new": "linear-gradient(180deg, rgba(250,0,6,0) 0%, rgba(250,0,6,0) 66%, rgba(250,0,6,0.1741071428571429) 75%, rgba(250,0,6,0.37298669467787116) 85%, rgba(250,0,6,0.6923144257703081) 94%, rgba(250,0,6,1) 98%, rgba(255,81,0,1) 100%)"
      }
    },
  },
  darkMode: "class",
  plugins: [ nextui(), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}



export default config;
