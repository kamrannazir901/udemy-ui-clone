import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  base: "/udemy-ui-clone/",
  plugins: [react(), tailwindcss(), ghPages()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
});
