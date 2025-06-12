import { ref, computed } from 'vue'
import { useImage } from '@vueuse/core'

export function useImageWithFallback(src, fallback) {
  const { isLoading, error } = useImage({ src })

  const finalSrc = computed(() => {
    return error.value ? fallback : src
  })

  return { isLoading, error, src: finalSrc }
}

export async function preloadImages(urls = []) {
  if (!Array.isArray(urls) || urls.length === 0) return []

  const loadedImages = ref([])
  const failedImages = ref([])

  const promises = urls.slice(0, 12).map(async src => {
    try {
      const { error } = useImage({ src })

      return new Promise(resolve => {
        const img = new Image()

        img.onload = () => {
          loadedImages.value.push(src)
          resolve(src)
        }

        img.onerror = () => {
          failedImages.value.push(src)
          console.warn(`Failed to load image: ${src}`)
          resolve(null)
        }

        img.src = src
      })
    } catch (err) {
      failedImages.value.push(src)
      return null
    }
  })

  const results = await Promise.all(promises)
  return {
    loaded: loadedImages.value,
    failed: failedImages.value,
    total: urls.length,
    successful: loadedImages.value.length,
  }
}
