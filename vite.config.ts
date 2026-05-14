import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: https://widineii.github.io/Portifolioo/
export default defineConfig({
  plugins: [react()],
  base: "/Portifolioo/",
});
