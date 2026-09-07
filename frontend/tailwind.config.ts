import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0F172A", // azul principal
        accent: "#3D62F5", // cyan principal
        azul: "#0F172A",
        azul2: "#1E293B",
        "cyan-d": "#2448E0",
        naranja: "#F59E0B",
        "naranja-d": "#D97706",
        "cobre-soft": "#EEF2FF",
        verde: "#10B981",
        rojo: "#EF4444",
        gris: "#64748B",
        bg: "#F1F5F9",
        card: "#FFFFFF",
        linea: "#E2E8F0",
        txt: "#0F172A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
