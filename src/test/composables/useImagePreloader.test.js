import { describe, it, expect, vi, beforeEach } from 'vitest'
import { preloadImages } from '@/composables/useImagePreloader.js'

describe('useImagePreloader', () => {
  beforeEach(() => {
    // 重置 Image mock
    vi.restoreAllMocks()
  })

  it('should preload images successfully', async () => {
    // Mock Image constructor
    global.Image = vi.fn().mockImplementation(() => {
      const img = {
        addEventListener: vi.fn((event, handler) => {
          if (event === 'load') {
            // 立即觸發 load 事件
            setTimeout(() => handler(), 0)
          }
        }),
        removeEventListener: vi.fn(),
        src: '',
      }
      return img
    })

    const imageUrls = ['/test-image-1.jpg', '/test-image-2.jpg']
    const result = await preloadImages(imageUrls)

    expect(result).toEqual(imageUrls)
    expect(global.Image).toHaveBeenCalledTimes(2)
  })

  it('should handle empty array', async () => {
    const result = await preloadImages([])
    expect(result).toEqual([])
  })

  it('should handle image load errors gracefully', async () => {
    global.Image = vi.fn().mockImplementation(() => {
      const img = {
        addEventListener: vi.fn((event, handler) => {
          if (event === 'error') {
            // 立即觸發 error 事件
            setTimeout(() => handler(), 0)
          } else if (event === 'load') {
            // 不觸發 load 事件，模擬載入失敗
          }
        }),
        removeEventListener: vi.fn(),
        src: '',
      }
      return img
    })

    const imageUrls = ['/non-existent-image.jpg']
    const result = await preloadImages(imageUrls)

    expect(result).toEqual(imageUrls)
  })
})
