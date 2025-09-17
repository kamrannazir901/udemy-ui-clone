import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/", // make sure assets resolve correctly
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
});
