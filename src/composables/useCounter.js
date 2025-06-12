import { ref, computed } from 'vue'
import { useIntersectionObserver, useRafFn } from '@vueuse/core'

/**
 * Counter Animation Composable
 * 使用 VueUse 的 useIntersectionObserver 和 useRafFn 替換手動事件監聽器
 * 提供高性能的計數器動畫效果
 */
export function useCounter() {
  const animatedCounters = ref(new Set())
  const activeAnimations = ref(new Map())

  /**
   * 數字格式化函數
   * @param {number} value - 數值
   * @param {Object} options - 格式化選項
   */
  const formatNumber = (value, options = {}) => {
    const { decimals = 0, separator = ',', prefix = '', suffix = '' } = options

    const rounded = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
    const formatted = decimals > 0 ? rounded.toFixed(decimals) : Math.floor(rounded).toString()

    // 添加千位分隔符
    const withSeparator =
      separator && rounded >= 1000
        ? formatted.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
        : formatted

    return `${prefix}${withSeparator}${suffix}`
  }

  /**
   * 緩動函數
   */
  const easingFunctions = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    easeInCubic: t => t * t * t,
    easeOutCubic: t => --t * t * t + 1,
    easeInOutCubic: t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
  }

  /**
   * 動畫化單個計數器
   * @param {HTMLElement} element - 計數器元素
   * @param {Object} options - 動畫選項
   */
  const animateCounter = (element, options = {}) => {
    const elementId = element.id || `counter-${Date.now()}-${Math.random()}`

    // 避免重複動畫
    if (animatedCounters.value.has(elementId)) {
      return Promise.resolve()
    }

    const {
      startValue = 0,
      endValue = parseInt(element.textContent) || 0,
      duration = 2000,
      easing = 'easeOutCubic',
      decimals = 0,
      separator = '',
      prefix = '',
      suffix = '',
      onUpdate = null,
      onComplete = null,
    } = options

    return new Promise(resolve => {
      animatedCounters.value.add(elementId)

      const startTime = performance.now()
      const easingFunction = easingFunctions[easing] || easingFunctions.easeOutCubic

      const animate = currentTime => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easingFunction(progress)

        const currentValue = startValue + (endValue - startValue) * easedProgress
        const formattedValue = formatNumber(currentValue, {
          decimals,
          separator,
          prefix,
          suffix,
        })

        element.textContent = formattedValue

        // 回調函數
        if (onUpdate) {
          onUpdate(currentValue, formattedValue, progress)
        }

        if (progress < 1) {
          const rafId = requestAnimationFrame(animate)
          activeAnimations.value.set(elementId, rafId)
        } else {
          // 動畫完成
          activeAnimations.value.delete(elementId)
          if (onComplete) {
            onComplete(endValue, formatNumber(endValue, options))
          }
          resolve()
        }
      }

      requestAnimationFrame(animate)
    })
  }

  /**
   * 設置計數器觀察器
   * @param {HTMLElement|Ref} target - 目標元素
   * @param {Object} options - 配置選項
   */
  const setupCounter = (target, options = {}) => {
    const { threshold = 0.5, rootMargin = '0px', once = true, ...animationOptions } = options

    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting, target: element }]) => {
        if (isIntersecting && element) {
          // 查找計數器元素
          const counters = element.classList.contains('count')
            ? [element]
            : element.querySelectorAll('.count')

          counters.forEach(counter => {
            animateCounter(counter, animationOptions)
          })

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
   * 設置數字區塊的計數器
   * @param {string} selector - 選擇器
   * @param {Object} options - 配置選項
   */
  const setupNumberSection = (selector = '.number-sec', options = {}) => {
    const element = document.querySelector(selector)
    if (!element) {
      return { stop: () => {} }
    }

    return setupCounter(element, {
      threshold: 0.5,
      duration: 2000,
      easing: 'easeOutCubic',
      separator: ',',
      ...options,
    })
  }

  /**
   * 批量設置計數器
   * @param {Array|NodeList} elements - 元素列表
   * @param {Object} options - 配置選項
   */
  const setupMultipleCounters = (elements, options = {}) => {
    const stops = []

    elements.forEach((element, index) => {
      const elementOptions = {
        ...options,
        delay: (options.stagger || 0) * index,
      }

      const { stop } = setupCounter(element, elementOptions)
      stops.push(stop)
    })

    return {
      stopAll: () => stops.forEach(stop => stop()),
    }
  }

  /**
   * 手動觸發計數器動畫
   * @param {HTMLElement|string} target - 目標元素或選擇器
   * @param {Object} options - 動畫選項
   */
  const triggerCounter = (target, options = {}) => {
    const element = typeof target === 'string' ? document.querySelector(target) : target
    if (!element) return Promise.resolve()

    const counters = element.classList.contains('count')
      ? [element]
      : element.querySelectorAll('.count')

    const animations = Array.from(counters).map(counter => animateCounter(counter, options))

    return Promise.all(animations)
  }

  /**
   * 停止計數器動畫
   * @param {HTMLElement} element - 計數器元素
   */
  const stopCounter = element => {
    const elementId = element.id || `counter-${Date.now()}-${Math.random()}`

    if (activeAnimations.value.has(elementId)) {
      cancelAnimationFrame(activeAnimations.value.get(elementId))
      activeAnimations.value.delete(elementId)
    }

    animatedCounters.value.delete(elementId)
  }

  /**
   * 重置計數器
   * @param {HTMLElement} element - 計數器元素
   * @param {number} value - 重置值
   */
  const resetCounter = (element, value = 0) => {
    stopCounter(element)
    element.textContent = value.toString()
  }

  /**
   * 創建響應式計數器
   * @param {Object} options - 計數器選項
   */
  const createReactiveCounter = (options = {}) => {
    const { initialValue = 0, target = 100, duration = 2000, autoStart = false } = options

    const currentValue = ref(initialValue)
    const isAnimating = ref(false)
    const progress = ref(0)

    const formattedValue = computed(() => formatNumber(currentValue.value, options))

    const startAnimation = () => {
      if (isAnimating.value) return

      isAnimating.value = true
      const startTime = performance.now()
      const startValue = currentValue.value
      const endValue = target

      const { pause, resume } = useRafFn(
        () => {
          const elapsed = performance.now() - startTime
          const progressValue = Math.min(elapsed / duration, 1)

          progress.value = progressValue
          currentValue.value = startValue + (endValue - startValue) * progressValue

          if (progressValue >= 1) {
            isAnimating.value = false
            pause()
          }
        },
        { immediate: false }
      )

      resume()

      return { pause, resume }
    }

    if (autoStart) {
      startAnimation()
    }

    return {
      currentValue,
      formattedValue,
      isAnimating,
      progress,
      startAnimation,
      reset: () => {
        currentValue.value = initialValue
        isAnimating.value = false
        progress.value = 0
      },
    }
  }

  /**
   * 清理所有動畫
   */
  const clearAllAnimations = () => {
    activeAnimations.value.forEach(rafId => {
      cancelAnimationFrame(rafId)
    })
    activeAnimations.value.clear()
    animatedCounters.value.clear()
  }

  return {
    setupCounter,
    setupNumberSection,
    setupMultipleCounters,
    triggerCounter,
    stopCounter,
    resetCounter,
    createReactiveCounter,
    clearAllAnimations,
    animateCounter,
    formatNumber,
    animatedCounters: animatedCounters.value,
  }
}
