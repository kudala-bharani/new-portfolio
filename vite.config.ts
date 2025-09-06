import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use "/" for custom domain deployment
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
    base: '/',
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
