/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      colors: {
        bg: "#0B0F14",
        panel: "#0F172A",
        brand: "#6366F1",
        cyanx: "#06B6D4",
        greenx: "#22C55E",
        amberx: "#F59E0B"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99,102,241,.3), 0 20px 60px rgba(99,102,241,.18)",
        glowCyan: "0 0 0 1px rgba(6,182,212,.3), 0 20px 60px rgba(6,182,212,.15)"
      }
    }
  },
  plugins: []
};