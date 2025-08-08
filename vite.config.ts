import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/new-portfolio/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100, // ms (you can increase to 200–300 if CPU usage is high)
    },
    host: true, // Needed in WSL/Docker
  },
});
