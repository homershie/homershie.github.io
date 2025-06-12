import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePluginRadar } from 'vite-plugin-radar'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueDevTools(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-8YSG21XKMM',
      },
    }),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
        // 排除大圖片檔案
        globPatterns: ['**/*.{js,css,html,ico}', '**/imgs/**/*.{png,jpg,jpeg,svg,webp}'],
        globIgnores: [
          '**/imgs/works/work_*.{jpg,png}', // 排除作品大圖
          '**/imgs/blog/**/*.png', // 排除部落格大圖
        ],
        ignoreURLParametersMatching: [/.*/],
        runtimeCaching: [
          {
            // 所有圖片都用執行時快取
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 50, // 減少快取數量
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7天
              },
            },
          },
        ],
      },
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
        manualChunks: undefined,
        format: 'es',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
