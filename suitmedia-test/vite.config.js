import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/local-api': {
        target: 'https://suitmedia-backend.suitdev.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/local-api/, '/api'),
      },
    },
  }
})
