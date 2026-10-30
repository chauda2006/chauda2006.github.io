import { defineConfig } from 'vite';

export default defineConfig({
  // Sử dụng đường dẫn tương đối để chạy hoàn hảo trên cả root domain và subpath của GitHub Pages
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
