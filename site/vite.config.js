import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps the build relocatable: it runs from any static host,
// any subpath, or a simple local server — no absolute-path assumptions.
export default defineConfig({
  base: './',
  plugins: [react()],
})
