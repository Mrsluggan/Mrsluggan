import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two entries, two real HTML files: "/" and "/photos/". Keeps GitHub Pages
// happy without a router, and leaves public/404.html alone.
// Paths are relative to the project root.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        photos: 'photos/index.html',
      },
    },
  },
})
