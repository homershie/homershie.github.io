import { describe, it, expect } from 'vitest'
import { usePortfolio } from '@/composables/usePortfolio.js'

describe('usePortfolio', () => {
  it('should return portfolio data', () => {
    const { portfolioData } = usePortfolio()

    expect(portfolioData.value).toBeDefined()
    expect(Array.isArray(portfolioData.value)).toBe(true)
    expect(portfolioData.value.length).toBeGreaterThan(0)
  })

  it('should contain required properties for each portfolio item', () => {
    const { portfolioData } = usePortfolio()

    const firstItem = portfolioData.value[0]
    expect(firstItem).toHaveProperty('id')
    expect(firstItem).toHaveProperty('title')
    expect(firstItem).toHaveProperty('image')
    expect(firstItem).toHaveProperty('category')
  })
})
