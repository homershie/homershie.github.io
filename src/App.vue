<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import PreLoader from '@/components/PreLoader.vue'
import { useCustomCursor } from '@/composables/useCustomCursor'
import { useHoverAnimation } from '@/composables/useHoverAnimation'

const showLoader = ref(true)
const { handleCursorHover } = useCustomCursor()
const { handleHoverAnimation } = useHoverAnimation()

onMounted(() => {
  // 初始化游標懸停效果
  const cursorElements = document.querySelectorAll('a, .cursor-pointer')
  handleCursorHover(cursorElements)

  // 初始化滑鼠移動動畫效果
  const hoverElements = document.querySelectorAll('.hover-this')
  handleHoverAnimation(hoverElements)
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
  height: 100vh;
  width: 100%;
}
</style>
