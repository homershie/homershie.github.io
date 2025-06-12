import { useLocalStorage } from '@vueuse/core'

export function useUserPreferences() {
  // 主題設定
  const theme = useLocalStorage('portfolio-theme', 'dark')

  // 語言設定
  const language = useLocalStorage('portfolio-language', 'zh-TW')

  // 是否已看過歡迎訊息
  const hasSeenWelcome = useLocalStorage('portfolio-has-seen-welcome', false)

  // 圖片品質偏好
  const imageQuality = useLocalStorage('portfolio-image-quality', 'auto')

  // 動畫偏好
  const prefersReducedMotion = useLocalStorage('portfolio-reduced-motion', false)

  // 上次造訪時間
  const lastVisit = useLocalStorage('portfolio-last-visit', new Date().toISOString())

  // 造訪次數
  const visitCount = useLocalStorage('portfolio-visit-count', 0)

  // 更新造訪統計
  const updateVisitStats = () => {
    visitCount.value += 1
    lastVisit.value = new Date().toISOString()
  }

  // 重置所有偏好設定
  const resetPreferences = () => {
    theme.value = 'dark'
    language.value = 'zh-TW'
    hasSeenWelcome.value = false
    imageQuality.value = 'auto'
    prefersReducedMotion.value = false
    visitCount.value = 0
    lastVisit.value = new Date().toISOString()
  }

  return {
    theme,
    language,
    hasSeenWelcome,
    imageQuality,
    prefersReducedMotion,
    lastVisit,
    visitCount,
    updateVisitStats,
    resetPreferences,
  }
}
