<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import PreLoader from '@/components/PreLoader.vue'
import { useNavbarScroll } from '@/composables/useNavbarScroll.js'
import { useCursor } from '@/composables/useCursor.js'
import { useScriptsMigration } from '@/composables/useScriptsMigration.js'

const showLoader = ref(true)

// 使用 VueUse 優化後的滾動監聽
useNavbarScroll()

// 使用 VueUse 優化後的游標追蹤
useCursor()

// 使用統一的腳本遷移 composable
const { initializeAllFeatures } = useScriptsMigration()

onMounted(() => {
  // 初始化所有功能
  initializeAllFeatures()
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
