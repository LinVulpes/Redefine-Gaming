import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Redefine-Gaming/',
  server: {
    watch: {
      usePolling: true, // Enable polling for file changes
    },
  },
})
