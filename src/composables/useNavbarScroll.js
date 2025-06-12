import { ref, computed, watchEffect, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'

export function useNavbarScroll() {
  const { y } = useWindowScroll()

  // 監聽滾動位置，當超過 300px 時添加 nav-scroll 類別
  const isScrolled = computed(() => y.value > 300)

  // 自動更新 navbar 的 CSS 類別
  onMounted(() => {
    const navbar = document.querySelector('.navbar-chang')
    if (!navbar) return

    // 使用 watchEffect 自動監聽滾動狀態變化
    const stopWatcher = watchEffect(() => {
      if (isScrolled.value) {
        navbar.classList.add('nav-scroll')
      } else {
        navbar.classList.remove('nav-scroll')
      }
    })

    // 組件卸載時清理
    onUnmounted(stopWatcher)
  })

  return {
    scrollY: y,
    isScrolled,
  }
}
