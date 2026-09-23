import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two entries, two real HTML files: "/" (Swedish, default) and "/en/"
// (English). Keeps GitHub Pages happy without a router.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        en: 'en/index.html',
      },
    },
  },
})
