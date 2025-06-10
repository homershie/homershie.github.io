import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PortfolioList from '@/components/PortfolioList.vue'

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

describe('PortfolioList', () => {
  it('should render portfolio works correctly', () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: mockWorks,
      },
    })

    expect(wrapper.findAll('.items')).toHaveLength(2)
    expect(wrapper.text()).toContain('Test Work 1')
    expect(wrapper.text()).toContain('Test Work 2')
  })

  it('should emit view-details event when clicked', async () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: mockWorks,
      },
    })

    // 觸發第一個作品的 .link 點擊
    await wrapper.find('.link').trigger('click')

    expect(wrapper.emitted('view-details')).toBeTruthy()
    // 由於 sortedWorks 按 id 降序排列，第一個會是 id: 2 的項目
    expect(wrapper.emitted('view-details')[0][0].id).toBe(2)
  })

  it('should handle empty works array', () => {
    const wrapper = mount(PortfolioList, {
      props: {
        works: [],
      },
    })

    expect(wrapper.findAll('.items')).toHaveLength(0)
  })
})
