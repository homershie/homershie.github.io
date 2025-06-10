<template>
  <section class="portfolio section-padding">
    <div class="container">
      <div class="sec-head mb-40">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="d-inline-block">
              <div class="sub-title-icon d-flex align-items-center">
                <span class="icon fas fa-briefcase"></span>
                <h6>我的作品</h6>
              </div>
            </div>
            <h3>
              透過視覺方法 <br />
              讓萬物賦予意義
            </h3>
          </div>
        </div>
      </div>

      <!-- 作品列表 -->
      <div ref="grid" class="portfolio-list">
        <PortfolioList :works="displayedWorks" @view-details="handleViewDetails" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { preloadImages } from '@/composables/useImagePreloader.js'
import PortfolioList from '@/components/PortfolioList.vue'
import { usePortfolio } from '@/composables/usePortfolio.js'
import Masonry from 'masonry-layout'

const grid = ref(null)
let msnry = null

const displayedWorks = ref([])
const { portfolioData } = usePortfolio()
const router = useRouter()

function handleViewDetails(work) {
  router.push(`/project/${work.id}`)
}

async function initMasonry() {
  await nextTick()
  if (grid.value && !msnry) {
    msnry = new Masonry(grid.value, {
      itemSelector: '.portfolio-item',
      columnWidth: '.portfolio-item',
      percentPosition: true,
    })
  }
  msnry?.layout()
}

onMounted(async () => {
  // 1. 載入前 10 張並初始化 Masonry
  const firstTen = portfolioData.value.slice(0, 10)
  displayedWorks.value = firstTen
  await preloadImages(firstTen.map(w => w.image))
  await initMasonry()

  // 2. 逐張載入剩餘圖片，append 到 Masonry
  const rest = portfolioData.value.slice(10)
  for (const work of rest) {
    await preloadImages([work.image])
    displayedWorks.value.push(work)
    await nextTick()
    msnry.reloadItems()
    msnry.layout()
  }

  // 3. 綁定 throttled resize 事件
  window.addEventListener('resize', throttledResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', throttledResize)
  msnry?.destroy()
})

// throttle 函數，避免頻繁觸發 resize
function throttle(func, delay) {
  let timeoutId
  let lastExecTime = 0
  return function (...args) {
    const currentTime = Date.now()

    if (currentTime - lastExecTime > delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(
        () => {
          func.apply(this, args)
          lastExecTime = Date.now()
        },
        delay - (currentTime - lastExecTime)
      )
    }
  }
}

const throttledResize = throttle(() => {
  msnry?.layout()
}, 250)
</script>
