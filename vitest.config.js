import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    testTimeout: 10000, // 增加測試超時時間到 10 秒
    hookTimeout: 10000, // 增加 hook 超時時間
    // CI 環境優化
    pool: 'threads',
    poolOptions: {
      threads: {
        singleThread: true, // 在 CI 中使用單線程避免競爭條件
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
