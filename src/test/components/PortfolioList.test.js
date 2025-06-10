import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import PortfolioList from '@/components/PortfolioList.vue'

// 模擬 Masonry
vi.mock('masonry-layout', () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      layout: vi.fn(),
      destroy: vi.fn(),
    })),
  }
})

const mockWorks = [
  {
    id: 1,
    title: 'Test Work 1',
    image: '/test-image-1.jpg',
    category: ['網頁設計'],
    tags: ['Vue.js', 'CSS'],
  },
  {
    id: 2,
    title: 'Test Work 2',
    image: '/test-image-2.jpg',
    category: ['平面設計'],
    tags: ['Photoshop', 'Illustrator'],
  },
]

// 模擬gsap和ScrollTrigger，這些在測試環境中可能無法正常工作
vi.mock('gsap', () => ({
  gsap: {
    registerPlugin: vi.fn(),
    set: vi.fn(),
    to: vi.fn(),
  },
  ScrollTrigger: {},
}))

describe('PortfolioList', () => {
  beforeEach(() => {
    // 清除所有模擬的實現
    vi.clearAllMocks()
    // 重置DOM
    document.body.innerHTML = ''
  })

  it('should render portfolio works correctly', async () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: mockWorks,
      },
      attachTo: document.body,
    })

    // 等待異步渲染完成
    await new Promise(resolve => setTimeout(resolve, 100))

    // 由於displayedWorks是基於sortedWorks的，sortedWorks按id降序排列
    // 因此檢查是否包含工作標題而不是依賴DOM中的順序
    expect(wrapper.text()).toContain('Test Work 1')
    expect(wrapper.text()).toContain('Test Work 2')

    // 檢查具有.masonry-item類的元素的數量
    expect(wrapper.findAll('.masonry-item').length).toBe(2)
  })

  it('should emit view-details event when clicked', async () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: mockWorks,
      },
      attachTo: document.body,
    })

    // 等待異步渲染完成
    await new Promise(resolve => setTimeout(resolve, 100))

    // 使用第一個.link元素
    const linkElement = wrapper.find('.link')
    // 確保找到了元素
    expect(linkElement.exists()).toBe(true)

    // 觸發點擊
    await linkElement.trigger('click')

    // 檢查事件
    expect(wrapper.emitted('view-details')).toBeTruthy()
    expect(wrapper.emitted('view-details')[0]).toBeTruthy()

    // 由於是按id降序排列，所以第一個元素應該是id為2的
    expect(wrapper.emitted('view-details')[0][0].id).toBe(2)
  })

  it('should handle empty works array', () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: [],
      },
    })

    expect(wrapper.findAll('.masonry-item').length).toBe(0)
  })
})
