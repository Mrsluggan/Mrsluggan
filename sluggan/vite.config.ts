import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Three entries, three real HTML files: "/", "/projekt/" and
// "/integritetspolicy/". Keeps GitHub Pages happy without a router.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        projekt: 'projekt/index.html',
        privacy: 'integritetspolicy/index.html',
      },
    },
  },
})
