import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePluginRadar } from 'vite-plugin-radar'
import { VitePWA } from 'vite-plugin-pwa'
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
    VitePWA({
      devOptions: {
        enabled: true,
      },
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
        // 只快取核心檔案，完全不預快取圖片
        globPatterns: ['**/*.{js,css,html,ico,svg}'],
        ignoreURLParametersMatching: [/.*/],
        runtimeCaching: [
          {
            // 作品集圖片 - 完全忽略快取
            urlPattern: /\/assets\/imgs\/works\/.*\.(png|jpg|jpeg|webp)$/,
            handler: 'NetworkOnly',
          },
          {
            // 其他圖片資源
            urlPattern: /\.(?:png|jpg|jpeg|webp)$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'images',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 3, // 3天
              },
            },
          },
          {
            // SVG 圖示可以預快取
            urlPattern: /\.svg$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'icons',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
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
        manualChunks: undefined,
        format: 'es',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  publicDir: 'public',
})
