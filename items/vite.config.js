import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

const resolveAlias = (p) => resolve(__dirname, p);
const alias = {
  "@": resolveAlias("./src"),
  "~": resolveAlias("./"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
