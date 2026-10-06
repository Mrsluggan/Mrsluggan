import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// One real HTML file per page: "/", "/projekt/", "/integritetspolicy/",
// plus a template that prerender copies to /projekt/<slug>/ per project.
// Keeps GitHub Pages happy without a router.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        projekt: 'projekt/index.html',
        privacy: 'integritetspolicy/index.html',
        case: 'projekt/_mall/index.html',
      },
    },
  },
})
