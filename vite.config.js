import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/SalaaTTimeline/'   // IMPORTANT: replace with your repo name
})
