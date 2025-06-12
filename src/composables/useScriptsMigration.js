import { onMounted, onUnmounted } from 'vue'
import { useParallax } from './useParallax.js'
import { useTooltip } from './useTooltip.js'
import { useCounter } from './useCounter.js'
import { useProgressBar } from './useProgressBar.js'
import { useTabs } from './useTabs.js'
import { useAccordion } from './useAccordion.js'

/**
 * Scripts Migration Composable
 * 統一管理和替換 scripts.js 中的所有功能
 * 使用現代 Vue 3 + VueUse 的最佳實踐
 */
export function useScriptsMigration() {
  // 初始化各個 composables
  const { autoSetup: setupParallax } = useParallax()
  const { autoSetupTooltips } = useTooltip()
  const { setupNumberSection } = useCounter()
  const { setupMultipleProgressBars } = useProgressBar()
  const { setupDOMTabs, setupKeyboardNavigation: setupTabsKeyboard } = useTabs()
  const { setupDOMAccordion, setupKeyboardNavigation: setupAccordionKeyboard } = useAccordion()

  /**
   * 設置平滑滾動導航
   */
  const setupSmoothScroll = () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]')

    const handleClick = e => {
      const targetId = e.currentTarget.getAttribute('href')
      if (targetId && targetId !== '#') {
        e.preventDefault()
        const targetEl = document.querySelector(targetId)
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    anchorLinks.forEach(link => {
      link.addEventListener('click', handleClick)
    })

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleClick)
      })
    }
  }

  /**
   * 設置背景圖片
   */
  const setupDataBackground = () => {
    const bgElements = document.querySelectorAll('.bg-img, section')

    bgElements.forEach(element => {
      const bgImage = element.getAttribute('data-background')
      if (bgImage) {
        element.style.backgroundImage = `url(${bgImage})`
      }
    })
  }

  /**
   * 設置滑動文字效果
   */
  const setupRollingText = () => {
    const rollingTextElements = document.querySelectorAll('.rolling-text')

    rollingTextElements.forEach(element => {
      const innerText = element.innerText
      element.innerHTML = ''

      const textContainer = document.createElement('div')
      textContainer.classList.add('block')

      for (const letter of innerText) {
        const span = document.createElement('span')
        span.innerText = letter.trim() === '' ? '\xa0' : letter
        span.classList.add('letter')
        textContainer.appendChild(span)
      }

      element.appendChild(textContainer)
      element.appendChild(textContainer.cloneNode(true))

      const handleMouseOver = () => {
        element.classList.remove('play')
      }

      element.addEventListener('mouseover', handleMouseOver)

      return () => {
        element.removeEventListener('mouseover', handleMouseOver)
      }
    })
  }

  /**
   * 設置圖片錯誤處理
   */
  const setupImageErrorHandling = () => {
    const images = document.querySelectorAll('img')

    const handleError = function () {
      this.alt = '圖片載入失敗'
      this.style.display = 'none'
    }

    images.forEach(img => {
      img.addEventListener('error', handleError)
    })

    return () => {
      images.forEach(img => {
        img.removeEventListener('error', handleError)
      })
    }
  }

  /**
   * 設置外部連結安全性
   */
  const setupSecureExternalLinks = () => {
    const externalLinks = document.querySelectorAll(
      `a[href^="http"]:not([href*="${window.location.hostname}"])`
    )

    externalLinks.forEach(link => {
      if (!link.getAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer')
      }
    })
  }

  /**
   * 設置選單 hover 效果
   */
  const setupMenuHoverEffects = () => {
    const menuHoverElements = document.querySelectorAll('.fixed-menu a, .left-area .menu-links a')
    const cleanupFunctions = []

    menuHoverElements.forEach(element => {
      const handleMouseEnter = () => {
        element.classList.add('show')
      }

      const handleMouseLeave = () => {
        element.classList.remove('show')
      }

      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)

      cleanupFunctions.push(() => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }

  /**
   * 設置 hover 動畫效果
   */
  const setupHoverAnimations = () => {
    const hoverElements = document.querySelectorAll('.hover-this')
    const cleanupFunctions = []

    hoverElements.forEach(element => {
      const handleMouseMove = e => {
        const hoverAnim = element.querySelector('.hover-anim')
        if (hoverAnim) {
          const rect = element.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const width = rect.width
          const height = rect.height
          const move = 25
          const xMove = (x / width) * (move * 2) - move
          const yMove = (y / height) * (move * 2) - move
          hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`
        }
      }

      const handleMouseLeave = () => {
        const hoverAnim = element.querySelector('.hover-anim')
        if (hoverAnim) {
          hoverAnim.style.transform = ''
        }
      }

      element.addEventListener('mousemove', handleMouseMove)
      element.addEventListener('mouseleave', handleMouseLeave)

      cleanupFunctions.push(() => {
        element.removeEventListener('mousemove', handleMouseMove)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }

  /**
   * 初始化所有功能
   */
  const initializeAll = () => {
    const cleanupFunctions = []

    // 基礎功能
    setupDataBackground()
    setupSecureExternalLinks()
    setupRollingText()

    // 帶有清理功能的項目
    cleanupFunctions.push(setupSmoothScroll())
    cleanupFunctions.push(setupImageErrorHandling())
    cleanupFunctions.push(setupMenuHoverEffects())
    cleanupFunctions.push(setupHoverAnimations())

    // VueUse 增強功能
    setupParallax('.parallaxie', { speed: 0.8 })
    autoSetupTooltips()

    // 動畫功能
    const progressElements = document.querySelectorAll('.skills, .skill-progress')
    if (progressElements.length > 0) {
      setupMultipleProgressBars(Array.from(progressElements))
    }

    // 計數器
    setupNumberSection()

    // 互動組件
    cleanupFunctions.push(setupDOMTabs())
    cleanupFunctions.push(setupDOMAccordion())
    cleanupFunctions.push(setupTabsKeyboard())
    cleanupFunctions.push(setupAccordionKeyboard())

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }

  /**
   * Vue 3 生命週期整合
   */
  let cleanup = null

  onMounted(() => {
    // 延遲初始化以確保 DOM 完全載入
    setTimeout(() => {
      cleanup = initializeAll()
    }, 100)
  })

  onUnmounted(() => {
    if (cleanup) {
      cleanup()
    }
  })

  return {
    initializeAll,
    setupSmoothScroll,
    setupDataBackground,
    setupSecureExternalLinks,
    setupRollingText,
    setupImageErrorHandling,
    setupMenuHoverEffects,
    setupHoverAnimations,
  }
}
