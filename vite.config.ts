import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/acacia-bloom/',

  plugins: [
    react(),
    tsconfigPaths(),
    tanstackRouter(),
    tailwindcss(),
  ],
})