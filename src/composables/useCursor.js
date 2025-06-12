import { watchEffect, onMounted, onUnmounted } from 'vue'
import { useMouse } from '@vueuse/core'

export function useCursor() {
  const { x, y } = useMouse()

  onMounted(() => {
    const cursor = document.querySelector('.cursor')
    if (!cursor) return

    // 更新游標位置
    const updateCursor = () => {
      cursor.style.left = `${x.value}px`
      cursor.style.top = `${y.value}px`
    }

    // 使用 watchEffect 自動監聽滑鼠位置變化
    const stopWatcher = watchEffect(updateCursor)

    // 設置游標懸停效果
    const cursorElements = document.querySelectorAll('a, .cursor-pointer')

    const handleMouseEnter = () => {
      cursor.classList.add('cursor-active')
    }

    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-active')
    }

    cursorElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    // 清理函數
    onUnmounted(() => {
      stopWatcher()
      cursorElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    })
  })

  return { x, y }
}
