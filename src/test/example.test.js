import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

// Example test - you can remove this and add your actual component tests
describe('Example Test', () => {
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
