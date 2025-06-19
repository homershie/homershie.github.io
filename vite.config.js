import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePluginRadar } from 'vite-plugin-radar'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-8YSG21XKMM',
      },
    }),
    // 圖片優化插件
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 85 },
      pngquant: { quality: [0.65, 0.8] },
      webp: { quality: 85 },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', '@vueuse/core'],
          components: [
            './src/components/ReadingProgress.vue',
            './src/components/BackToTop.vue',
            './src/components/PortfolioList.vue',
          ],
          views: [
            './src/views/AboutView.vue',
            './src/views/PortfolioView.vue',
            './src/views/BlogsView.vue',
            './src/views/ContactView.vue',
          ],
        },
        format: 'es',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  publicDir: 'public',
  preview: {
    port: 4173,
    strictPort: true,
    host: true,
  },
})
