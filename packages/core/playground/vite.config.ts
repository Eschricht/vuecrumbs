import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'crumby-vue': fileURLToPath(new URL('../src', import.meta.url)),
      'crumby-vue/routeMeta': fileURLToPath(new URL('../routeMeta.d.ts', import.meta.url)),
    },
  },
})
