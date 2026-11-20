// OLD hand-made Astro demos → dist-astro/<theme>/ (no longer published; see README "Old hand-made demos").
import { execSync } from "node:child_process";
const themes = (process.argv[2] || "organic").split(",");
for (const t of themes) {
  console.log(`\n▶ ${t}`);
  execSync("npx astro build", { stdio: "inherit", env: { ...process.env, DEMO_THEME: t } });
}
