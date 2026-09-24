import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two entries, two real HTML files: "/" and "/projekt/". Keeps GitHub Pages
// happy without a router.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        projekt: 'projekt/index.html',
      },
    },
  },
})
