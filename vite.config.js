import { resolve } from "node:path"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  root: "src/html",
  publicDir: "../../public",
  resolve: {
    alias: { "/src": `${import.meta.dirname}/src` },
  },
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        home: resolve(import.meta.dirname, "src/html/index.html"),
        projects: resolve(import.meta.dirname, "src/html/projects.html"),
      },
    },
  },
  plugins: [
    tailwindcss()
  ],
})
