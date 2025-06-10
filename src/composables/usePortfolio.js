import { ref, computed } from 'vue'
import { portfolio } from '@/data/portfolioData.js'

// 直接使用 portfolioData.js 的靜態資料
const portfolioData = ref(portfolio)
const loading = ref(false)
const error = ref(null)

export function usePortfolio() {
  // 不再需要 loadPortfolio，資料已靜態引入

  // 根據 ID 取得單一作品
  const getWorkById = id => {
    return portfolioData.value.find(work => work.id === parseInt(id))
  }

  // 根據類別篩選作品
  const getWorksByCategory = category => {
    if (!category || category === 'all') return portfolioData.value
    // 支援多分類陣列
    return portfolioData.value.filter(work =>
      Array.isArray(work.category) ? work.category.includes(category) : work.category === category
    )
  }

  // 取得所有類別（展平成單一陣列）
  const categories = computed(() => {
    const cats = portfolioData.value.flatMap(work => work.category || [])
    return ['all', ...Array.from(new Set(cats))]
  })

  return {
    portfolioData: computed(() => portfolioData.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    getWorkById,
    getWorksByCategory,
    categories,
  }
}
