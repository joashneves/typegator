import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Carrega variáveis de ambiente
const API_URL = process.env.VITE_API_URL || "http://localhost:3000";

// Configuração do Vite
export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: true, // Configuração para SSR
    proxy: {
      "/api": {
        target: API_URL, // URL do backend
        changeOrigin: true, // Altera a origem para evitar problemas de CORS
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove o prefixo /api
      },
    },
  },
});
