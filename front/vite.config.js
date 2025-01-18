import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // URL do backend
        changeOrigin: true, // Altera a origem para evitar problemas de CORS
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove o prefixo /api
      },
    },
  },
});
