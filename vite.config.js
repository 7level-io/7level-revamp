import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "create-404",
      closeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        const indexFile = path.join(distDir, "index.html");
        const notFoundFile = path.join(distDir, "404.html");

        if (fs.existsSync(indexFile)) {
          fs.copyFileSync(indexFile, notFoundFile);
          console.log("✅ 404.html created in dist/");
        } else {
          console.warn("⚠️ index.html not found in dist/");
        }
      },
    },
  ],
  base: "/",
  build: {
    target: "es2022",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/gsap")) {
            return "gsap-vendor";
          }
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/react-router") ||
            id.includes("node_modules/react-router-dom/")
          ) {
            return "react-vendor";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "lucide-icons";
          }
        },
      },
    },
  },
});
