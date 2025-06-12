import { ref, computed } from 'vue'
import { useEventListener } from '@vueuse/core'

/**
 * Accordion Composable
 * 使用 Vue 3 響應式系統替換手動 DOM 操作
 * 提供完整的手風琴組件管理功能
 */
export function useAccordion(options = {}) {
  const {
    allowMultiple = false,
    defaultOpen = [],
    animationDuration = 300,
    onToggle = null,
    onOpen = null,
    onClose = null,
  } = options

  const items = ref([])
  const openItems = ref(
    new Set(Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen].filter(Boolean))
  )
  const isAnimating = ref(new Set())

  /**
   * 註冊手風琴項目
   * @param {string} id - 項目 ID
   * @param {Object} config - 項目配置
   */
  const registerItem = (id, config = {}) => {
    const { title = id, content = '', disabled = false, visible = true, data = null } = config

    const existingIndex = items.value.findIndex(item => item.id === id)
    const itemData = {
      id,
      title,
      content,
      disabled,
      visible,
      data,
    }

    if (existingIndex >= 0) {
      items.value[existingIndex] = itemData
    } else {
      items.value.push(itemData)
    }
  }

  /**
   * 移除手風琴項目
   * @param {string} id - 項目 ID
   */
  const unregisterItem = id => {
    const index = items.value.findIndex(item => item.id === id)
    if (index >= 0) {
      items.value.splice(index, 1)
      openItems.value.delete(id)
      isAnimating.value.delete(id)
    }
  }

  /**
   * 切換項目開關狀態
   * @param {string} id - 項目 ID
   * @param {boolean} force - 強制狀態（true=打開，false=關閉）
   */
  const toggle = async (id, force = null) => {
    const item = items.value.find(i => i.id === id)

    if (!item || item.disabled || !item.visible || isAnimating.value.has(id)) {
      return false
    }

    const isCurrentlyOpen = openItems.value.has(id)
    const shouldOpen = force !== null ? force : !isCurrentlyOpen

    // 如果不允許多個打開，先關閉其他項目
    if (shouldOpen && !allowMultiple) {
      await closeAll(id)
    }

    isAnimating.value.add(id)

    try {
      if (shouldOpen) {
        await openItem(id)
      } else {
        await closeItem(id)
      }

      // 回調函數
      if (onToggle) {
        onToggle(id, shouldOpen, item)
      }

      return true
    } finally {
      isAnimating.value.delete(id)
    }
  }

  /**
   * 打開指定項目
   * @param {string} id - 項目 ID
   */
  const openItem = async id => {
    if (openItems.value.has(id)) return

    openItems.value.add(id)

    // 執行打開動畫
    await performOpenAnimation(id)

    const item = items.value.find(i => i.id === id)
    if (onOpen && item) {
      onOpen(id, item)
    }
  }

  /**
   * 關閉指定項目
   * @param {string} id - 項目 ID
   */
  const closeItem = async id => {
    if (!openItems.value.has(id)) return

    // 執行關閉動畫
    await performCloseAnimation(id)

    openItems.value.delete(id)

    const item = items.value.find(i => i.id === id)
    if (onClose && item) {
      onClose(id, item)
    }
  }

  /**
   * 執行打開動畫
   * @param {string} id - 項目 ID
   */
  const performOpenAnimation = async id => {
    const content = document.querySelector(
      `.accordion-info[data-id="${id}"], #${id} .accordion-info`
    )
    if (!content) return

    return new Promise(resolve => {
      // 設置初始狀態
      content.style.display = 'block'
      content.style.height = '0px'
      content.style.opacity = '0'
      content.style.overflow = 'hidden'
      content.style.transition = `all ${animationDuration}ms ease`

      // 獲取目標高度
      requestAnimationFrame(() => {
        const targetHeight = content.scrollHeight

        // 執行動畫
        content.style.height = `${targetHeight}px`
        content.style.opacity = '1'

        // 動畫完成後清理
        setTimeout(() => {
          content.style.height = 'auto'
          content.style.overflow = 'visible'
          resolve()
        }, animationDuration)
      })
    })
  }

  /**
   * 執行關閉動畫
   * @param {string} id - 項目 ID
   */
  const performCloseAnimation = async id => {
    const content = document.querySelector(
      `.accordion-info[data-id="${id}"], #${id} .accordion-info`
    )
    if (!content) return

    return new Promise(resolve => {
      // 設置當前高度
      const currentHeight = content.offsetHeight
      content.style.height = `${currentHeight}px`
      content.style.overflow = 'hidden'
      content.style.transition = `all ${animationDuration}ms ease`

      // 執行關閉動畫
      requestAnimationFrame(() => {
        content.style.height = '0px'
        content.style.opacity = '0'

        setTimeout(() => {
          content.style.display = 'none'
          resolve()
        }, animationDuration)
      })
    })
  }

  /**
   * 關閉所有項目
   * @param {string} except - 排除的項目 ID
   */
  const closeAll = async (except = null) => {
    const itemsToClose = Array.from(openItems.value).filter(id => id !== except)

    const closePromises = itemsToClose.map(id => closeItem(id))
    await Promise.all(closePromises)
  }

  /**
   * 打開所有項目（僅在允許多個打開時）
   */
  const openAll = async () => {
    if (!allowMultiple) return

    const availableItems = items.value.filter(item => !item.disabled && item.visible)
    const openPromises = availableItems.map(item => openItem(item.id))
    await Promise.all(openPromises)
  }

  /**
   * 設置項目狀態
   * @param {string} id - 項目 ID
   * @param {Object} state - 新狀態
   */
  const setItemState = (id, state) => {
    const item = items.value.find(i => i.id === id)
    if (item) {
      Object.assign(item, state)

      // 如果項目被禁用或隱藏，關閉它
      if ((item.disabled || !item.visible) && openItems.value.has(id)) {
        closeItem(id)
      }
    }
  }

  /**
   * 設置項目數據
   * @param {string} id - 項目 ID
   * @param {any} data - 數據
   */
  const setItemData = (id, data) => {
    const item = items.value.find(i => i.id === id)
    if (item) {
      item.data = data
    }
  }

  /**
   * 自動設置 DOM 手風琴
   * @param {Object} selectors - 選擇器配置
   */
  const setupDOMAccordion = (selectors = {}) => {
    const {
      container = '.accordion',
      titleSelector = '.title',
      contentSelector = '.accordion-info',
      itemSelector = '.item',
    } = selectors

    const containers = document.querySelectorAll(container)
    const cleanupFunctions = []

    containers.forEach(accordionContainer => {
      const accordionItems = accordionContainer.querySelectorAll(itemSelector)

      accordionItems.forEach(item => {
        const title = item.querySelector(titleSelector)
        const content = item.querySelector(contentSelector)

        if (title && content) {
          const id = item.id || `accordion-${Date.now()}-${Math.random()}`
          item.id = id
          content.setAttribute('data-id', id)

          // 註冊項目
          registerItem(id, {
            title: title.textContent,
            element: item,
            titleElement: title,
            contentElement: content,
          })

          // 設置點擊事件
          const cleanup = useEventListener(title, 'click', () => {
            toggle(id)
          })
          cleanupFunctions.push(cleanup)

          // 設置項目點擊事件（用於 active 狀態）
          const itemCleanup = useEventListener(item, 'click', () => {
            // 移除所有項目的 active 類
            accordionItems.forEach(otherItem => {
              otherItem.classList.remove('active')
            })
            // 添加當前項目的 active 類
            item.classList.add('active')
          })
          cleanupFunctions.push(itemCleanup)
        }
      })
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }

  /**
   * 設置鍵盤導航
   */
  const setupKeyboardNavigation = () => {
    return useEventListener(document, 'keydown', e => {
      const activeElement = document.activeElement
      const isInAccordion = activeElement?.closest('.accordion')

      if (!isInAccordion) return

      const accordionItem = activeElement.closest('.item')
      if (!accordionItem) return

      const itemId = accordionItem.id
      const currentIndex = items.value.findIndex(item => item.id === itemId)

      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault()
          toggle(itemId)
          break
        case 'ArrowDown':
          e.preventDefault()
          focusNextItem(currentIndex)
          break
        case 'ArrowUp':
          e.preventDefault()
          focusPreviousItem(currentIndex)
          break
        case 'Home':
          e.preventDefault()
          focusFirstItem()
          break
        case 'End':
          e.preventDefault()
          focusLastItem()
          break
      }
    })
  }

  /**
   * 聚焦下一個項目
   * @param {number} currentIndex - 當前索引
   */
  const focusNextItem = currentIndex => {
    const availableItems = items.value.filter(item => !item.disabled && item.visible)
    const nextIndex = (currentIndex + 1) % availableItems.length
    const nextItem = availableItems[nextIndex]

    if (nextItem) {
      const element = document.getElementById(nextItem.id)
      const titleElement = element?.querySelector('.title')
      if (titleElement) {
        titleElement.focus()
      }
    }
  }

  /**
   * 聚焦上一個項目
   * @param {number} currentIndex - 當前索引
   */
  const focusPreviousItem = currentIndex => {
    const availableItems = items.value.filter(item => !item.disabled && item.visible)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : availableItems.length - 1
    const prevItem = availableItems[prevIndex]

    if (prevItem) {
      const element = document.getElementById(prevItem.id)
      const titleElement = element?.querySelector('.title')
      if (titleElement) {
        titleElement.focus()
      }
    }
  }

  /**
   * 聚焦第一個項目
   */
  const focusFirstItem = () => {
    const firstItem = items.value.find(item => !item.disabled && item.visible)
    if (firstItem) {
      const element = document.getElementById(firstItem.id)
      const titleElement = element?.querySelector('.title')
      if (titleElement) {
        titleElement.focus()
      }
    }
  }

  /**
   * 聚焦最後一個項目
   */
  const focusLastItem = () => {
    const availableItems = items.value.filter(item => !item.disabled && item.visible)
    const lastItem = availableItems[availableItems.length - 1]

    if (lastItem) {
      const element = document.getElementById(lastItem.id)
      const titleElement = element?.querySelector('.title')
      if (titleElement) {
        titleElement.focus()
      }
    }
  }

  // 計算屬性
  const availableItems = computed(() => items.value.filter(item => !item.disabled && item.visible))

  const openItemsArray = computed(() => Array.from(openItems.value))

  const hasOpenItems = computed(() => openItems.value.size > 0)

  const isItemOpen = id => openItems.value.has(id)

  const isItemAnimating = id => isAnimating.value.has(id)

  return {
    // 狀態
    items,
    openItems: openItems.value,
    isAnimating: isAnimating.value,

    // 計算屬性
    availableItems,
    openItemsArray,
    hasOpenItems,

    // 方法
    registerItem,
    unregisterItem,
    toggle,
    openItem,
    closeItem,
    closeAll,
    openAll,
    setItemState,
    setItemData,
    setupDOMAccordion,
    setupKeyboardNavigation,

    // 工具方法
    isItemOpen,
    isItemAnimating,
  }
}
