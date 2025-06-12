<template>
  <div class="reading-progress">
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)

const progress = computed(() => {
  const scrollTop = y.value
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
})
</script>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 9999;
}

.progress-bar {
  height: 100%;
  background: var(--maincolor);
  transition: width 0.2s ease;
}
</style>
