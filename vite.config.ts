import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The site is published at https://kaurmoni0013.github.io/Portfolio/, so the
// base path is not optional: with client-side routes such as /Portfolio/about,
// a relative './assets/...' would resolve to /Portfolio/about/assets/... and
// 404. public/404.html hands unknown paths back to the app.
const base = '/Portfolio/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    assetsInlineLimit: 2048,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // Split the two large, rarely-changing vendors so the app chunk
        // stays small and cacheable.
        manualChunks(id: string) {
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')) {
            return 'motion'
          }
          if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) {
            return 'react'
          }
          return undefined
        },
      },
    },
  },
})
