import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Deployed to GitHub Pages at https://<user>.github.io/portfolio/,
// so assets and routes are served from the "/portfolio/" sub-path.
const base = '/portfolio/'

// GitHub Pages has no server-side routing. For a single-page app this means a
// hard refresh on a deep link (e.g. /portfolio/projects/foo) would 404. Pages
// serves 404.html for any unknown path, so we ship a copy of index.html as
// 404.html — the app boots and React Router renders the right route.
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const out = resolve(__dirname, 'dist')
      copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), spaFallback()],
})
