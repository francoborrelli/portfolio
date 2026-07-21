import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    // antd emits CSS that lightningcss (Vite 8 default) fails to minify
    cssMinify: 'esbuild',
  },
});
