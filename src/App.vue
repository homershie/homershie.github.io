<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import PreLoader from '@/components/PreLoader.vue'
import { useCustomCursor } from '@/composables/useCustomCursor'
import { useHoverAnimation } from '@/composables/useHoverAnimation'
import { useImageCache } from '@/composables/useImageCache'

const showLoader = ref(true)
const { handleCursorHover } = useCustomCursor()
const { handleHoverAnimation } = useHoverAnimation()
const { startCacheCleanup, stopCacheCleanup } = useImageCache()

onMounted(() => {
  // 初始化游標懸停效果
  const cursorElements = document.querySelectorAll('a, .cursor-pointer')
  handleCursorHover(cursorElements)

  // 初始化滑鼠移動動畫效果
  const hoverElements = document.querySelectorAll('.hover-this')
  handleHoverAnimation(hoverElements)

  // 初始化快取清理
  startCacheCleanup()
})

onUnmounted(() => {
  stopCacheCleanup()
})
</script>

<template>
  <div id="app">
    <!-- 全局 Loading -->
    <PreLoader @loaded="showLoader = false" />

    <!-- Navigation -->
    <AppNavbar />

    <!-- Main Content -->
    <main>
      <RouterView />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* Global styles will be imported from main.js */
#app {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

/* 確保 body 沒有預設的 margin/padding 影響 navbar */
body {
  margin: 0;
  padding: 0;
  /* 移除 padding-top，讓 navbar 完全固定在最上方 */
}
</style>
