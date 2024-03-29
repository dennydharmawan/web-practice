import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), generouted()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
