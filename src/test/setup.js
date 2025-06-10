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
