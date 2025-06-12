import { ref, nextTick, onUnmounted } from 'vue'
import { useMouse, useEventListener } from '@vueuse/core'

/**
 * Tooltip System Composable
 * 使用 VueUse 的 useMouse 和 useEventListener 替換手動事件監聽器
 * 提供響應式的工具提示系統
 */
export function useTooltip() {
  const { x: mouseX, y: mouseY } = useMouse()
  const activeTooltips = ref(new Map())
  const tooltipConfig = ref({
    offset: { x: 10, y: -30 },
    delay: 300,
    hideDelay: 100,
    className: 'vue-tooltip',
    zIndex: 9999,
    maxWidth: 300,
    animation: true,
  })

  /**
   * 創建工具提示元素
   * @param {string} content - 工具提示內容
   * @param {Object} options - 配置選項
   */
  const createTooltipElement = (content, options = {}) => {
    const tooltip = document.createElement('div')
    tooltip.className = options.className || tooltipConfig.value.className
    tooltip.textContent = content

    // 設置基本樣式
    Object.assign(tooltip.style, {
      position: 'absolute',
      background: options.background || '#333',
      color: options.color || 'white',
      padding: options.padding || '5px 10px',
      borderRadius: options.borderRadius || '4px',
      fontSize: options.fontSize || '12px',
      zIndex: options.zIndex || tooltipConfig.value.zIndex,
      pointerEvents: 'none',
      maxWidth: `${options.maxWidth || tooltipConfig.value.maxWidth}px`,
      wordWrap: 'break-word',
      opacity: '0',
      transition: tooltipConfig.value.animation ? 'opacity 0.3s ease' : 'none',
      ...options.style,
    })

    return tooltip
  }

  /**
   * 定位工具提示
   * @param {HTMLElement} tooltip - 工具提示元素
   * @param {Object} position - 位置信息
   * @param {Object} options - 定位選項
   */
  const positionTooltip = (tooltip, position, options = {}) => {
    const offset = { ...tooltipConfig.value.offset, ...options.offset }
    const { placement = 'auto' } = options

    let x = position.x + offset.x
    let y = position.y + offset.y // 自動調整位置避免超出視窗
    if (placement === 'auto') {
      const rect = tooltip.getBoundingClientRect()
      const viewportWidth = window.innerWidth

      // 水平位置調整
      if (x + rect.width > viewportWidth) {
        x = position.x - rect.width - Math.abs(offset.x)
      }

      // 垂直位置調整
      if (y < 0) {
        y = position.y + Math.abs(offset.y) + 20
      }
    }

    tooltip.style.left = `${x}px`
    tooltip.style.top = `${y}px`
  }

  /**
   * 顯示工具提示
   * @param {HTMLElement} element - 觸發元素
   * @param {string|Object} content - 工具提示內容或配置
   * @param {Object} options - 配置選項
   */
  const showTooltip = async (element, content, options = {}) => {
    const tooltipId = element.dataset.tooltipId || `tooltip-${Date.now()}`
    element.dataset.tooltipId = tooltipId

    // 如果已經存在工具提示，先移除
    if (activeTooltips.value.has(tooltipId)) {
      hideTooltip(element)
    }

    // 創建工具提示
    const tooltipContent = typeof content === 'string' ? content : content.text
    const tooltip = createTooltipElement(tooltipContent, options)

    document.body.appendChild(tooltip)

    await nextTick()

    // 初始位置（基於元素位置）
    const elementRect = element.getBoundingClientRect()
    positionTooltip(
      tooltip,
      {
        x: elementRect.left,
        y: elementRect.top - tooltip.offsetHeight - 5,
      },
      options
    )

    // 顯示動畫
    setTimeout(() => {
      tooltip.style.opacity = '1'
    }, 10)

    // 存儲工具提示信息
    activeTooltips.value.set(tooltipId, {
      element: tooltip,
      target: element,
      options,
    })

    return tooltip
  }

  /**
   * 隱藏工具提示
   * @param {HTMLElement} element - 觸發元素
   */
  const hideTooltip = element => {
    const tooltipId = element.dataset.tooltipId
    if (!tooltipId || !activeTooltips.value.has(tooltipId)) {
      return
    }

    const tooltipData = activeTooltips.value.get(tooltipId)
    const tooltip = tooltipData.element

    if (tooltip && tooltip.parentNode) {
      tooltip.style.opacity = '0'
      setTimeout(
        () => {
          if (tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip)
          }
        },
        tooltipConfig.value.animation ? 300 : 0
      )
    }

    activeTooltips.value.delete(tooltipId)
  }

  /**
   * 更新工具提示位置（跟隨滑鼠）
   * @param {HTMLElement} element - 觸發元素
   * @param {boolean} followMouse - 是否跟隨滑鼠
   */
  const updateTooltipPosition = (element, followMouse = false) => {
    const tooltipId = element.dataset.tooltipId
    if (!tooltipId || !activeTooltips.value.has(tooltipId)) {
      return
    }

    const tooltipData = activeTooltips.value.get(tooltipId)
    const tooltip = tooltipData.element

    if (followMouse) {
      positionTooltip(
        tooltip,
        {
          x: mouseX.value,
          y: mouseY.value,
        },
        tooltipData.options
      )
    }
  }

  /**
   * 設置元素的工具提示
   * @param {HTMLElement|string} target - 目標元素或選擇器
   * @param {string|Object} content - 工具提示內容
   * @param {Object} options - 配置選項
   */
  const setupTooltip = (target, content, options = {}) => {
    const elements = typeof target === 'string' ? document.querySelectorAll(target) : [target]
    const cleanupFunctions = []

    elements.forEach(element => {
      let showTimer = null
      let hideTimer = null
      const { delay = tooltipConfig.value.delay, hideDelay = tooltipConfig.value.hideDelay } =
        options

      // 滑鼠進入事件
      const handleMouseEnter = () => {
        if (hideTimer) {
          clearTimeout(hideTimer)
          hideTimer = null
        }

        showTimer = setTimeout(() => {
          showTooltip(element, content, options)
        }, delay)
      }

      // 滑鼠離開事件
      const handleMouseLeave = () => {
        if (showTimer) {
          clearTimeout(showTimer)
          showTimer = null
        }

        hideTimer = setTimeout(() => {
          hideTooltip(element)
        }, hideDelay)
      }

      // 滑鼠移動事件（如果需要跟隨滑鼠）
      const handleMouseMove = () => {
        if (options.followMouse) {
          updateTooltipPosition(element, true)
        }
      }

      // 註冊事件監聽器
      const cleanupMouseEnter = useEventListener(element, 'mouseenter', handleMouseEnter)
      const cleanupMouseLeave = useEventListener(element, 'mouseleave', handleMouseLeave)
      const cleanupMouseMove = options.followMouse
        ? useEventListener(element, 'mousemove', handleMouseMove)
        : () => {}

      // 收集清理函數
      cleanupFunctions.push(() => {
        if (showTimer) clearTimeout(showTimer)
        if (hideTimer) clearTimeout(hideTimer)
        hideTooltip(element)
        cleanupMouseEnter()
        cleanupMouseLeave()
        cleanupMouseMove()
      })
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }

  /**
   * 自動設置頁面中的工具提示
   */
  const autoSetupTooltips = () => {
    const cleanupFunctions = []

    // 設置主要工具提示
    const mainTooltipElements = document.querySelectorAll('[data-tooltip-tit]')
    mainTooltipElements.forEach(element => {
      const content = element.getAttribute('data-tooltip-tit')
      const cleanup = setupTooltip(element, content, {
        followMouse: true,
        offset: { x: 10, y: -30 },
      })
      cleanupFunctions.push(cleanup)
    })

    // 設置子工具提示
    const subTooltipElements = document.querySelectorAll('[data-tooltip-sub]')
    subTooltipElements.forEach(element => {
      const content = element.getAttribute('data-tooltip-sub')
      const cleanup = setupTooltip(element, content, {
        followMouse: true,
        offset: { x: 30, y: -15 },
      })
      cleanupFunctions.push(cleanup)
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }
  /**
   * 清理所有工具提示
   */
  const clearAllTooltips = () => {
    activeTooltips.value.forEach(tooltipData => {
      hideTooltip(tooltipData.target)
    })
    activeTooltips.value.clear()
  }

  /**
   * 更新配置
   * @param {Object} newConfig - 新配置
   */
  const updateConfig = newConfig => {
    Object.assign(tooltipConfig.value, newConfig)
  }

  // 頁面清理
  onUnmounted(() => {
    clearAllTooltips()
  })

  return {
    showTooltip,
    hideTooltip,
    setupTooltip,
    autoSetupTooltips,
    clearAllTooltips,
    updateConfig,
    activeTooltips: activeTooltips.value,
    config: tooltipConfig.value,
  }
}
