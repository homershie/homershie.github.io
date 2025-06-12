import { ref, nextTick } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

/**
 * Progress Bar Animation Composable
 * 使用 VueUse 的 useIntersectionObserver 替換手動滾動事件監聽器
 * 當元素進入視窗時觸發進度條動畫
 */
export function useProgressBar() {
  const animatedElements = ref(new Set())

  /**
   * 設置進度條動畫
   * @param {HTMLElement|Ref} target - 目標元素或 ref
   * @param {Object} options - 配置選項
   */
  const setupProgressBar = (target, options = {}) => {
    const {
      threshold = 0.3,
      rootMargin = '0px',
      once = true,
      animationDuration = 1200,
      animationEasing = 'cubic-bezier(0.77, 0, 0.175, 1)',
    } = options

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting, target: element }]) => {
        if (isIntersecting && element) {
          animateProgressBars(element, { animationDuration, animationEasing })

          if (once) {
            stop()
          }
        }
      },
      { threshold, rootMargin }
    )

    return { stop }
  }

  /**
   * 動畫化進度條
   * @param {HTMLElement} container - 包含進度條的容器
   * @param {Object} options - 動畫選項
   */
  const animateProgressBars = (container, options = {}) => {
    const { animationDuration, animationEasing } = options
    const progressBars = container.querySelectorAll('.skill-progress .progres, .progres')

    progressBars.forEach(progress => {
      const elementId = progress.id || `progress-${Date.now()}-${Math.random()}`

      // 避免重複動畫
      if (animatedElements.value.has(elementId)) {
        return
      }

      const percentage = progress.getAttribute('data-value')
      if (percentage) {
        animatedElements.value.add(elementId)
        progress.classList.add('animated')

        // 設置 CSS 自定義屬性進行動畫
        progress.style.setProperty('--animation-duration', `${animationDuration}ms`)
        progress.style.setProperty('--animation-easing', animationEasing)
        progress.style.width = percentage

        // 添加動畫完成事件監聽器
        const handleAnimationEnd = () => {
          progress.removeEventListener('transitionend', handleAnimationEnd)
          // 可以在這裡添加動畫完成後的回調
        }

        progress.addEventListener('transitionend', handleAnimationEnd)
      }
    })
  }

  /**
   * 設置多個進度條容器
   * @param {Array} targets - 目標元素數組
   * @param {Object} options - 配置選項
   */
  const setupMultipleProgressBars = (targets, options = {}) => {
    const stops = []

    targets.forEach(target => {
      const { stop } = setupProgressBar(target, options)
      stops.push(stop)
    })

    return {
      stopAll: () => stops.forEach(stop => stop()),
    }
  }

  /**
   * 重置進度條動畫
   * @param {HTMLElement} container - 容器元素
   */
  const resetProgressBars = container => {
    const progressBars = container.querySelectorAll('.skill-progress .progres, .progres')

    progressBars.forEach(progress => {
      progress.classList.remove('animated')
      progress.style.width = '0%'

      const elementId = progress.id || `progress-${Date.now()}-${Math.random()}`
      animatedElements.value.delete(elementId)
    })
  }

  /**
   * 手動觸發進度條動畫
   * @param {HTMLElement} container - 容器元素
   * @param {Object} options - 動畫選項
   */
  const triggerProgressAnimation = (container, options = {}) => {
    nextTick(() => {
      animateProgressBars(container, options)
    })
  }

  return {
    setupProgressBar,
    setupMultipleProgressBars,
    resetProgressBars,
    triggerProgressAnimation,
    animatedElements: animatedElements.value,
  }
}
