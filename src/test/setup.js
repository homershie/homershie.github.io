// Vitest setup file
import { config } from '@vue/test-utils'
import { vi } from 'vitest'

// Make vi available globally
global.vi = vi

// Global test setup
config.global.mocks = {
  // Add global mocks here if needed
}

// Mock window.matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback
    this.observables = new Set()
  }

  observe(element) {
    this.observables.add(element)
  }

  unobserve(element) {
    this.observables.delete(element)
  }

  disconnect() {
    this.observables.clear()
  }

  // 模擬觸發 Intersection Observer 回調
  triggerAll(isIntersecting) {
    const entries = [...this.observables].map(element => ({
      isIntersecting,
      target: element,
      boundingClientRect: element.getBoundingClientRect(),
      intersectionRatio: isIntersecting ? 1 : 0,
      intersectionRect: isIntersecting ? element.getBoundingClientRect() : null,
      rootBounds: null,
      time: Date.now(),
    }))

    this.callback(entries, this)
  }
}

global.IntersectionObserver = MockIntersectionObserver
