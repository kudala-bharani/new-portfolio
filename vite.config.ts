import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: "/new-portfolio/". Use base: "/" for a root custom domain.
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
