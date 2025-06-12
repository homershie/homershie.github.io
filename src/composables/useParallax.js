import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowScroll, useRafFn, useElementVisibility } from '@vueuse/core'

/**
 * Parallax Effect Composable
 * 使用 VueUse 的 useWindowScroll 替換手動滾動事件監聽器
 * 提供高性能的視差滾動效果
 */
export function useParallax() {
  const { y: scrollY } = useWindowScroll()
  const parallaxElements = ref([])
  const isEnabled = ref(true)

  /**
   * 註冊視差元素
   * @param {HTMLElement|Ref} element - 視差元素
   * @param {Object} options - 視差配置
   */
  const registerElement = (element, options = {}) => {
    const {
      speed = 0.8,
      direction = 'up', // 'up', 'down', 'left', 'right'
      range = null, // [startY, endY] 限制視差範圍
      offset = 0,
      transform3d = true,
      backgroundSize = 'cover',
    } = options

    const elementData = {
      element,
      speed,
      direction,
      range,
      offset,
      transform3d,
      backgroundSize,
      id: Date.now() + Math.random(),
    }

    parallaxElements.value.push(elementData)

    // 返回移除函數
    return () => {
      const index = parallaxElements.value.findIndex(item => item.id === elementData.id)
      if (index > -1) {
        parallaxElements.value.splice(index, 1)
      }
    }
  }

  /**
   * 計算視差變換
   * @param {Object} elementData - 元素數據
   * @param {number} scrollPosition - 滾動位置
   */
  const calculateTransform = (elementData, scrollPosition) => {
    const { speed, direction, range, offset, transform3d } = elementData

    // 如果設置了範圍限制，檢查是否在範圍內
    if (range && (scrollPosition < range[0] || scrollPosition > range[1])) {
      return null
    }

    const adjustedScroll = scrollPosition + offset
    const movement = adjustedScroll * speed

    let transform = ''

    switch (direction) {
      case 'up':
        transform = transform3d ? `translate3d(0, ${-movement}px, 0)` : `translateY(${-movement}px)`
        break
      case 'down':
        transform = transform3d ? `translate3d(0, ${movement}px, 0)` : `translateY(${movement}px)`
        break
      case 'left':
        transform = transform3d ? `translate3d(${-movement}px, 0, 0)` : `translateX(${-movement}px)`
        break
      case 'right':
        transform = transform3d ? `translate3d(${movement}px, 0, 0)` : `translateX(${movement}px)`
        break
    }

    return transform
  }

  /**
   * 更新所有視差元素
   */
  const updateParallax = () => {
    if (!isEnabled.value || parallaxElements.value.length === 0) {
      return
    }

    parallaxElements.value.forEach(elementData => {
      const element = elementData.element
      if (!element) return

      const transform = calculateTransform(elementData, scrollY.value)

      if (transform) {
        element.style.transform = transform
        if (elementData.backgroundSize) {
          element.style.backgroundSize = elementData.backgroundSize
        }
      }
    })
  }

  // 使用 RAF 優化性能
  const { pause: pauseRaf, resume: resumeRaf } = useRafFn(updateParallax, { immediate: false })

  /**
   * 啟用視差效果
   */
  const enable = () => {
    isEnabled.value = true
    resumeRaf()
  }

  /**
   * 禁用視差效果
   */
  const disable = () => {
    isEnabled.value = false
    pauseRaf()
  }

  /**
   * 清除所有視差元素
   */
  const clearAll = () => {
    parallaxElements.value.forEach(elementData => {
      if (elementData.element) {
        elementData.element.style.transform = ''
      }
    })
    parallaxElements.value = []
  }

  /**
   * 自動設置頁面中的視差元素
   * @param {string} selector - CSS 選擇器
   * @param {Object} defaultOptions - 預設選項
   */
  const autoSetup = (selector = '.parallaxie', defaultOptions = {}) => {
    onMounted(() => {
      const elements = document.querySelectorAll(selector)
      elements.forEach(element => {
        // 從 data 屬性讀取配置
        const speed = parseFloat(element.dataset.parallaxSpeed) || defaultOptions.speed || 0.8
        const direction = element.dataset.parallaxDirection || defaultOptions.direction || 'up'
        const offset = parseInt(element.dataset.parallaxOffset) || defaultOptions.offset || 0

        registerElement(element, {
          ...defaultOptions,
          speed,
          direction,
          offset,
        })
      })
    })

    onUnmounted(() => {
      clearAll()
      disable()
    })
  }

  /**
   * 創建高級視差效果
   * @param {HTMLElement} element - 目標元素
   * @param {Object} options - 高級選項
   */
  const createAdvancedParallax = (element, options = {}) => {
    const { speedX = 0, speedY = 0.8, rotate = 0, scale = 0, opacity = 0, blur = 0 } = options

    const elementVisibility = useElementVisibility(element)

    return computed(() => {
      if (!elementVisibility.value) return {}

      const scroll = scrollY.value
      const translateX = scroll * speedX
      const translateY = -scroll * speedY
      const rotateZ = scroll * rotate
      const scaleValue = 1 + (scroll * scale) / 1000
      const opacityValue = Math.max(0, Math.min(1, 1 - (scroll * opacity) / 1000))
      const blurValue = (scroll * blur) / 100

      return {
        transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotateZ}deg) scale(${scaleValue})`,
        opacity: opacityValue,
        filter: blur > 0 ? `blur(${blurValue}px)` : 'none',
      }
    })
  }

  // 自動啟動
  onMounted(() => {
    enable()
  })

  onUnmounted(() => {
    disable()
    clearAll()
  })

  return {
    registerElement,
    enable,
    disable,
    clearAll,
    autoSetup,
    createAdvancedParallax,
    isEnabled,
    parallaxElements: parallaxElements.value,
    scrollY,
  }
}
