import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PortfolioList from '@/components/PortfolioList.vue'

// Mock GSAP
vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {
    registerPlugin: vi.fn(),
  },
}))

// Mock Masonry
vi.mock('masonry-layout', () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      destroy: vi.fn(),
      layout: vi.fn(),
    })),
  }
})

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn()
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
})
window.IntersectionObserver = mockIntersectionObserver

describe('PortfolioList', () => {
  const mockWorks = [
    {
      id: 1,
      title: 'Test Work 1',
      image: '/test1.jpg',
      category: ['設計'],
    },
    {
      id: 2,
      title: 'Test Work 2',
      image: '/test2.jpg',
      category: ['開發'],
    },
  ]

  it('renders correctly', () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: mockWorks,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays all works', async () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: mockWorks,
      },
    })

    // 等待異步操作完成
    await wrapper.vm.$nextTick()

    const items = wrapper.findAll('.items')
    expect(items).toHaveLength(mockWorks.length)
  })

  it('should emit view-details event when clicked', async () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: mockWorks,
      },
    })

    // 等待異步操作完成
    await wrapper.vm.$nextTick()

    // 找到第一個作品項目的連結並點擊
    const firstItem = wrapper.find('.link')
    await firstItem.trigger('click')

    // 檢查事件是否被觸發，且帶有正確的參數
    expect(wrapper.emitted('view-details')).toBeTruthy()
    // 由於組件使用 sortedWorks，我們需要檢查事件是否帶有正確的作品對象
    const emittedWork = wrapper.emitted('view-details')[0][0]
    expect(emittedWork).toHaveProperty('id')
    expect(emittedWork).toHaveProperty('title')
    expect(emittedWork).toHaveProperty('image')
    expect(emittedWork).toHaveProperty('category')
  })

  it('sorts works by id in descending order', () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: mockWorks,
      },
    })

    // 檢查排序後的 works
    expect(wrapper.vm.sortedWorks).toEqual([...mockWorks].sort((a, b) => b.id - a.id))
  })

  it('handles empty works array', () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: [],
      },
    })
    const items = wrapper.findAll('.items')
    expect(items).toHaveLength(0)
  })
})
