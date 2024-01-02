import { defineConfig } from 'vite';
import ViteReact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [ViteReact()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },    
  },
});