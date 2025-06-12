import { ref } from 'vue'

export function useImagePreloader() {
  const loadingProgress = ref(0)
  const isPreloading = ref(false)

  /**
   * 預載入圖片
   * @param {string[]} urls - 要預載入的圖片URL陣列
   * @param {number} batchSize - 每批次處理的圖片數量
   * @returns {Promise<string[]>} - 預載入完成的圖片URL陣列
   */
  const preloadImages = async (urls = [], batchSize = 6) => {
    if (!Array.isArray(urls) || urls.length === 0) return []

    isPreloading.value = true
    loadingProgress.value = 0

    const totalImages = urls.length
    const batches = Math.ceil(totalImages / batchSize)
    const loadedUrls = []

    for (let i = 0; i < batches; i++) {
      const start = i * batchSize
      const end = Math.min(start + batchSize, totalImages)
      const batchUrls = urls.slice(start, end)

      const batchPromises = batchUrls.map(src => {
        return new Promise(resolve => {
          const img = new Image()
          img.addEventListener('load', () => {
            loadedUrls.push(src)
            loadingProgress.value = Math.round((loadedUrls.length / totalImages) * 100)
            resolve()
          })
          img.addEventListener('error', () => {
            console.warn(`Failed to load image: ${src}`)
            resolve()
          })
          img.src = src
        })
      })

      await Promise.all(batchPromises)
    }

    isPreloading.value = false
    return loadedUrls
  }

  /**
   * 預載入特定元素的圖片
   * @param {string} selector - 要預載入的圖片選擇器
   * @param {number} batchSize - 每批次處理的圖片數量
   * @returns {Promise<string[]>} - 預載入完成的圖片URL陣列
   */
  const preloadElementImages = async (selector, batchSize = 6) => {
    const elements = document.querySelectorAll(selector)
    const urls = Array.from(elements)
      .map(el => el.src || el.getAttribute('src'))
      .filter(Boolean)
    return preloadImages(urls, batchSize)
  }

  return {
    preloadImages,
    preloadElementImages,
    loadingProgress,
    isPreloading,
  }
}
