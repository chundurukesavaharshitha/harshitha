import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // You can change the port number if needed
    open: true,  // Opens the app in the browser when the server starts
  },
  resolve: {
    alias: {
      '@': '/src',  // Makes it easier to import files
    },
  },
});
