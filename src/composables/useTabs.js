import { ref, computed, watch, nextTick } from 'vue'
import { useEventListener } from '@vueuse/core'

/**
 * Tabs System Composable
 * 使用 Vue 3 響應式系統替換手動 DOM 操作
 * 提供完整的標籤頁管理功能
 */
export function useTabs(options = {}) {
  const {
    defaultTab = null,
    fade = false,
    fadeDelay = 300,
    history = false,
    onTabChange = null,
    onTabReady = null,
  } = options

  const activeTab = ref(defaultTab)
  const tabs = ref([])
  const isTransitioning = ref(false)

  /**
   * 註冊標籤頁
   * @param {string} id - 標籤頁 ID
   * @param {Object} config - 標籤頁配置
   */
  const registerTab = (id, config = {}) => {
    const { title = id, disabled = false, visible = true, data = null } = config

    const existingIndex = tabs.value.findIndex(tab => tab.id === id)
    const tabData = {
      id,
      title,
      disabled,
      visible,
      data,
    }

    if (existingIndex >= 0) {
      tabs.value[existingIndex] = tabData
    } else {
      tabs.value.push(tabData)
    }

    // 如果是第一個標籤頁且沒有設置預設標籤頁，則設為活動標籤頁
    if (!activeTab.value && tabs.value.length === 1) {
      activeTab.value = id
    }
  }

  /**
   * 移除標籤頁
   * @param {string} id - 標籤頁 ID
   */
  const unregisterTab = id => {
    const index = tabs.value.findIndex(tab => tab.id === id)
    if (index >= 0) {
      tabs.value.splice(index, 1)

      // 如果移除的是活動標籤頁，切換到第一個可用的標籤頁
      if (activeTab.value === id && tabs.value.length > 0) {
        const nextTab = tabs.value.find(tab => !tab.disabled && tab.visible)
        activeTab.value = nextTab ? nextTab.id : null
      }
    }
  }

  /**
   * 切換到指定標籤頁
   * @param {string} tabId - 標籤頁 ID
   * @param {boolean} force - 強制切換（忽略禁用狀態）
   */
  const switchTab = async (tabId, force = false) => {
    const tab = tabs.value.find(t => t.id === tabId)

    if (!tab || (!force && (tab.disabled || !tab.visible))) {
      return false
    }

    if (activeTab.value === tabId || isTransitioning.value) {
      return false
    }

    const previousTab = activeTab.value

    // 開始切換過程
    isTransitioning.value = true

    try {
      // 淡入淡出效果
      if (fade) {
        await performFadeTransition(tabId)
      } else {
        activeTab.value = tabId
      }

      // 回調函數
      if (onTabChange) {
        onTabChange(tabId, previousTab, tab)
      }

      // 歷史記錄
      if (history && window.history) {
        const url = new URL(window.location)
        url.searchParams.set('tab', tabId)
        window.history.pushState({ tab: tabId }, '', url.toString())
      }

      return true
    } finally {
      isTransitioning.value = false
    }
  }

  /**
   * 執行淡入淡出過渡
   * @param {string} newTabId - 新標籤頁 ID
   */
  const performFadeTransition = async newTabId => {
    return new Promise(resolve => {
      // 淡出當前內容
      const currentContent = document.querySelector(`#${activeTab.value}`)
      if (currentContent) {
        currentContent.style.opacity = '0'
        setTimeout(() => {
          currentContent.style.display = 'none'
        }, fadeDelay)
      }

      // 等待淡出完成，然後切換並淡入新內容
      setTimeout(async () => {
        activeTab.value = newTabId
        await nextTick()

        const newContent = document.querySelector(`#${newTabId}`)
        if (newContent) {
          newContent.style.display = 'block'
          setTimeout(() => {
            newContent.style.opacity = '1'
          }, 10)
        }

        resolve()
      }, fadeDelay)
    })
  }

  /**
   * 獲取下一個可用標籤頁
   * @param {string} currentId - 當前標籤頁 ID
   */
  const getNextTab = currentId => {
    const currentIndex = tabs.value.findIndex(tab => tab.id === currentId)
    for (let i = currentIndex + 1; i < tabs.value.length; i++) {
      const tab = tabs.value[i]
      if (!tab.disabled && tab.visible) {
        return tab.id
      }
    }
    return null
  }

  /**
   * 獲取上一個可用標籤頁
   * @param {string} currentId - 當前標籤頁 ID
   */
  const getPreviousTab = currentId => {
    const currentIndex = tabs.value.findIndex(tab => tab.id === currentId)
    for (let i = currentIndex - 1; i >= 0; i--) {
      const tab = tabs.value[i]
      if (!tab.disabled && tab.visible) {
        return tab.id
      }
    }
    return null
  }

  /**
   * 切換到下一個標籤頁
   */
  const nextTab = () => {
    if (!activeTab.value) return false
    const next = getNextTab(activeTab.value)
    return next ? switchTab(next) : false
  }

  /**
   * 切換到上一個標籤頁
   */
  const previousTab = () => {
    if (!activeTab.value) return false
    const previous = getPreviousTab(activeTab.value)
    return previous ? switchTab(previous) : false
  }

  /**
   * 設置標籤頁狀態
   * @param {string} tabId - 標籤頁 ID
   * @param {Object} state - 新狀態
   */
  const setTabState = (tabId, state) => {
    const tab = tabs.value.find(t => t.id === tabId)
    if (tab) {
      Object.assign(tab, state)

      // 如果當前活動標籤頁被禁用或隱藏，切換到其他標籤頁
      if (activeTab.value === tabId && (tab.disabled || !tab.visible)) {
        const nextAvailable = tabs.value.find(t => t.id !== tabId && !t.disabled && t.visible)
        if (nextAvailable) {
          switchTab(nextAvailable.id)
        }
      }
    }
  }

  /**
   * 設置標籤頁數據
   * @param {string} tabId - 標籤頁 ID
   * @param {any} data - 數據
   */
  const setTabData = (tabId, data) => {
    const tab = tabs.value.find(t => t.id === tabId)
    if (tab) {
      tab.data = data
    }
  }

  /**
   * 自動設置 DOM 標籤頁
   * @param {Object} selectors - 選擇器配置
   */
  const setupDOMTabs = (selectors = {}) => {
    const {
      container = '#tabs',
      linkSelector = '.tab-links .item-link',
      contentSelector = '.tab-content',
    } = selectors

    const containerElement = document.querySelector(container)
    if (!containerElement) return () => {}

    const links = containerElement.querySelectorAll(linkSelector)
    const contents = containerElement.querySelectorAll(contentSelector)

    // 註冊標籤頁
    contents.forEach(content => {
      const id = content.id
      if (id) {
        registerTab(id, {
          title: id,
          element: content,
        })
      }
    })

    // 設置事件監聽器
    const cleanupFunctions = []

    links.forEach(link => {
      const tabId = link.getAttribute('data-tab')
      if (tabId) {
        const cleanup = useEventListener(link, 'click', e => {
          e.preventDefault()
          switchTab(tabId)
        })
        cleanupFunctions.push(cleanup)
      }
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }

  /**
   * 處理鍵盤導航
   */
  const setupKeyboardNavigation = () => {
    return useEventListener(document, 'keydown', e => {
      if (!activeTab.value) return

      // 檢查是否在標籤頁容器中
      const activeElement = document.activeElement
      const isInTabContainer = activeElement?.closest('.tab-container, [data-tabs]')

      if (!isInTabContainer) return

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          previousTab()
          break
        case 'ArrowRight':
          e.preventDefault()
          nextTab()
          break
        case 'Home': {
          e.preventDefault()
          const firstTab = tabs.value.find(tab => !tab.disabled && tab.visible)
          if (firstTab) switchTab(firstTab.id)
          break
        }
        case 'End': {
          e.preventDefault()
          const lastTab = [...tabs.value].reverse().find(tab => !tab.disabled && tab.visible)
          if (lastTab) switchTab(lastTab.id)
          break
        }
      }
    })
  }

  // 計算屬性
  const availableTabs = computed(() => tabs.value.filter(tab => !tab.disabled && tab.visible))

  const currentTab = computed(() => tabs.value.find(tab => tab.id === activeTab.value))

  const canGoNext = computed(() => (activeTab.value ? getNextTab(activeTab.value) !== null : false))

  const canGoPrevious = computed(() =>
    activeTab.value ? getPreviousTab(activeTab.value) !== null : false
  )

  // 監聽標籤頁變化
  watch(
    activeTab,
    (newTab, oldTab) => {
      if (newTab && onTabReady) {
        nextTick(() => {
          onTabReady(newTab, oldTab)
        })
      }
    },
    { immediate: true }
  )

  return {
    // 狀態
    activeTab,
    tabs,
    isTransitioning,

    // 計算屬性
    availableTabs,
    currentTab,
    canGoNext,
    canGoPrevious,

    // 方法
    registerTab,
    unregisterTab,
    switchTab,
    nextTab,
    previousTab,
    setTabState,
    setTabData,
    setupDOMTabs,
    setupKeyboardNavigation,

    // 工具方法
    getNextTab,
    getPreviousTab,
  }
}
