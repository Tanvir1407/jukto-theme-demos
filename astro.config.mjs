import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// One demo shop per build: DEMO_THEME=organic → dist/organic (served at demo-organic.jukto.bd).
const theme = process.env.DEMO_THEME || "organic";

export default defineConfig({
  outDir: `./dist-astro/${theme}`, // old hand-made demos; dist/ holds the snapshots of the real themes
  trailingSlash: "always",
  build: { format: "directory" },
  vite: {
    plugins: [tailwindcss()],
    define: { "import.meta.env.DEMO_THEME": JSON.stringify(theme) },
  },
});
