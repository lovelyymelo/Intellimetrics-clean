import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src")
    }
  },
  server: {
    port: 5000
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  },
  plugins: [react()]
});