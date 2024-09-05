import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

const resolveAlias = (p) => resolve(__dirname, p);
const alias = {
  "@": resolveAlias("./src"),
  "@assets": resolveAlias("./src/assets"),
  "@shared": resolveAlias("./src/shared"),
  "@features": resolveAlias("./src/features"),
  "@core": resolveAlias("./src/core"),
  "@hooks": resolveAlias("./src/hooks"),
  "~": resolveAlias("./"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    target: "esnext",
  },
  resolve: {
    alias,
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
