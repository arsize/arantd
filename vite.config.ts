import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "lib",
    lib: {
      entry: resolve(__dirname, "./packages/index.ts"),
      name: "Arantd",
      fileName: "arantd",
    },
  },
})
