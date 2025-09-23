import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
    '@': '/src',
    '@assets': '/src/assets',
    '@components': '/src/components',
    '@hooks': '/src/hooks',
    '@utils': '/src/utils',
    '@typeData': '/src/types',
    '@data': '/src/data',
    '@contexts': '/src/contexts',
  }
  }
});
