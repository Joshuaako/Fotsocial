import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // allows imports like "@/components/..."
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // ensures Vite uses index.html as entry
    },
  },
});

