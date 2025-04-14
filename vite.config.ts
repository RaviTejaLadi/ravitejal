import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }, server: {
    port: 2345,
    open: true,
    watch: {
      usePolling: true,
      interval: 50,
    },
  },
});
