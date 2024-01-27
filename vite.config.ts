import path from 'path';
import { defineConfig } from 'vite';

import generouted from '@generouted/react-router/plugin';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), generouted(), TanStackRouterVite()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
