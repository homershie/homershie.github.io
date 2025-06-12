import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useImagePreloader } from '@/composables/useImagePreloader'

describe('useImagePreloader', () => {
  let preloadImages
  let loadingProgress
  let resetProgress

  beforeEach(() => {
    const {
      preloadImages: preload,
      loadingProgress: progress,
      resetProgress: reset,
    } = useImagePreloader()
    preloadImages = preload
    loadingProgress = progress
    resetProgress = reset
  })

  it('should preload images successfully', async () => {
    const imageUrls = ['/test-image-1.jpg', '/test-image-2.jpg']

    // 模擬成功的圖片載入
    const mockImage = {
      addEventListener: vi.fn((event, callback) => {
        if (event === 'load') {
          setTimeout(callback, 0)
        }
      }),
      removeEventListener: vi.fn(),
      src: '',
    }

    vi.spyOn(window, 'Image').mockImplementation(() => mockImage)

    const result = await preloadImages(imageUrls)
    expect(result).toEqual(imageUrls)
    expect(loadingProgress.value).toBe(100)
  }, 10000)

  it('should handle empty array', async () => {
    const result = await preloadImages([])
    expect(result).toEqual([])
    expect(loadingProgress.value).toBe(0)
  })

  it('should handle image load errors gracefully', async () => {
    const imageUrls = ['/non-existent-image.jpg']

    // 模擬圖片載入錯誤
    const mockImage = {
      addEventListener: vi.fn((event, callback) => {
        if (event === 'error') {
          setTimeout(callback, 0)
        }
      }),
      removeEventListener: vi.fn(),
      src: '',
    }

    vi.spyOn(window, 'Image').mockImplementation(() => mockImage)

    const result = await preloadImages(imageUrls)
    expect(result).toEqual(imageUrls)
    expect(loadingProgress.value).toBe(100)
  }, 10000)

  it('should reset progress correctly', () => {
    loadingProgress.value = 50
    resetProgress()
    expect(loadingProgress.value).toBe(0)
  })
})
