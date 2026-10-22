import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "./src") } },
  build:
    mode === "lib"
      ? {
          copyPublicDir: false,
          lib: { entry: "src/orbling/index.ts", formats: ["es"], fileName: "orbling", cssFileName: "orbling" },
          rollupOptions: { external: ["react", "react-dom", "react/jsx-runtime", "@paper-design/shaders-react"] },
        }
      : { outDir: "site" },
}));
