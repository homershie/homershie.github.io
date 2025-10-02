import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE_URL || '/'
  const isProduction = mode === 'production'

  const plugins = [
    vue(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-8YSG21XKMM',
      },
    }),
  ]

  // 只在開發環境中添加開發工具插件
  if (!isProduction) {
    plugins.push(vueDevTools())
  }

  return {
    base,
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: !isProduction,
      minify: isProduction ? 'terser' : false,
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
        },
      },
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
  }
})
