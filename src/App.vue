<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import PreLoader from '@/components/PreLoader.vue'

const showLoader = ref(true)
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
