import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use "/" during dev for simpler local URLs, keep
// "/new-portfolio/" in production for GitHub Pages.
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
    base: isProduction ? '/new-portfolio/' : '/',
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
      host: true,
      open: true,
    },
    preview: {
      open: true,
    },
  };
});
