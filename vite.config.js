import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/ielts-writing-guide/',
  plugins: [react()],
  test: { environment: 'jsdom', globals: true, setupFiles: ['./tests/setup.js'] },
})
