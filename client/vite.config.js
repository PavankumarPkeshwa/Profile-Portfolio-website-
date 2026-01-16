import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // 🔥 REQUIRED for Codespaces
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000', // ✅ safer than localhost
        changeOrigin: true,
        secure: false
      }
    }
  }
})

