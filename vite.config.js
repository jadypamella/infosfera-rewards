import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
// Absolute base: every page is prerendered into its own folder (/vencedores/index.html),
// so asset paths must not depend on the page's depth.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    !isSsrBuild && legacy({ targets: ['defaults', 'not IE 11'] }),
  ],
  base: '/',
  server: { allowedHosts: true },
}))
