import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': dirname(new URL(import.meta.url).pathname),
    },
  },
})
