import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

// Example test - you can remove this and add your actual component tests
describe('Example Test Suite', () => {
  let wrapper
  let timeouts = []

  beforeEach(() => {
    // 清除所有模擬
    vi.clearAllMocks()

    // 模擬 setTimeout
    const originalSetTimeout = window.setTimeout
    window.setTimeout = (...args) => {
      const timeoutId = originalSetTimeout(...args)
      timeouts.push(timeoutId)
      return timeoutId
    }
  })

  afterEach(async () => {
    // 等待所有 Vue 更新完成
    await nextTick()

    // 清除所有計時器
    timeouts.forEach(id => clearTimeout(id))
    timeouts = []

    // 重置 setTimeout
    window.setTimeout = setTimeout

    // 清理 wrapper
    if (wrapper) {
      wrapper.unmount()
      wrapper = null
    }
  })

  it('should handle async operations correctly', async () => {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('done')
      }, 100)
    })

    const result = await promise
    expect(result).toBe('done')
  })

  it('should clean up after test', async () => {
    wrapper = mount({
      template: '<div>Test</div>',
    })

    await nextTick()
    expect(wrapper.exists()).toBe(true)
  })

  it('should work', () => {
    expect(1 + 1).toBe(2)
  })

  it('should mount a basic vue component', () => {
    const TestComponent = {
      template: '<div>Hello World</div>',
    }

    const wrapper = mount(TestComponent)
    expect(wrapper.text()).toBe('Hello World')
  })
})
