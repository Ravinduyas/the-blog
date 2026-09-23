import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // GitHub Pages serves a project site from /<repo>/, so the deploy script
    // sets BASE_PATH. Locally and on a custom domain it stays at the root.
    base: process.env.BASE_PATH || '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      // Articles are served by the backend on :4000. Proxying keeps them
      // same-origin in development, so no CORS round trip while working locally.
      proxy: {
        '/api': {
          target: process.env.VITE_API_PROXY || 'http://localhost:4000',
          changeOrigin: true,
        },
      },
    },
  };
});
