<template>
  <div class="gallery">
    <div class="row">
      <div v-for="work in sortedWorks" :key="work.id" class="col-lg-4 items">
        <div class="item">
          <div class="img">
            <img :src="work.image" :alt="work.title" />
            <a href="#0" class="link" @click.prevent="viewDetails(work)"></a>
          </div>
          <div class="cont d-flex align-items-center">
            <div>
              <h6>{{ work.title }}</h6>
              <!-- 修改這裡，迭代 category 陣列 -->
              <span v-for="(tag, index) in work.category" :key="index" class="tag">{{ tag }}</span>
            </div>
            <div class="ml-auto">
              <div class="arrow">
                <a href="#0" @click.prevent="viewDetails(work)">
                  <svg
                    class="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 34.2 32.3"
                    style="stroke-width: 2"
                  >
                    <line x1="0" y1="16" x2="33" y2="16"></line>
                    <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                    <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Masonry from 'masonry-layout'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  works: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['view-details'])

function viewDetails(work) {
  emit('view-details', work)
}

const sortedWorks = computed(() => {
  return [...props.works].sort((a, b) => b.id - a.id)
})

onMounted(() => {
  let masonryInstance = null

  // 等待 DOM 完全渲染
  nextTick(() => {
    const container = document.querySelector('.gallery')
    const items = document.querySelectorAll('.items')

    if (!container || items.length === 0) return

    // 設定初始狀態（移除 scale 避免影響布局）
    items.forEach(item => {
      gsap.set(item, { opacity: 0, y: 50 })
    })

    // 初始化 Masonry（等所有圖片載入完成）
    const initMasonry = () => {
      if (masonryInstance) {
        masonryInstance.destroy()
      }

      masonryInstance = new Masonry(container, {
        itemSelector: '.items',
        columnWidth: '.items',
        percentPosition: true,
        gutter: 0,
        transitionDuration: 0, // 禁用 Masonry 內建動畫
      })
    }

    // 等待所有圖片載入完成
    const images = container.querySelectorAll('img')
    let loadedCount = 0
    const totalImages = images.length

    const checkAllImagesLoaded = () => {
      loadedCount++
      if (loadedCount === totalImages) {
        // 所有圖片載入完成後初始化 Masonry
        setTimeout(() => {
          initMasonry()
          setupAnimations()
        }, 100)
      }
    }

    // 監聽圖片載入
    if (totalImages === 0) {
      // 沒有圖片時直接初始化
      setTimeout(() => {
        initMasonry()
        setupAnimations()
      }, 100)
    } else {
      images.forEach(img => {
        if (img.complete) {
          checkAllImagesLoaded()
        } else {
          img.addEventListener('load', checkAllImagesLoaded)
          img.addEventListener('error', checkAllImagesLoaded) // 即使載入失敗也要計算
        }
      })
    }

    // 設置動畫
    const setupAnimations = () => {
      // 使用 Intersection Observer 但不改變 scale
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => {
                  // 動畫完成後重新布局 Masonry
                  if (masonryInstance) {
                    masonryInstance.layout()
                  }
                },
              })

              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -10% 0px',
        }
      )

      // 開始觀察所有項目
      items.forEach(item => {
        observer.observe(item)
      })
    }

    // 窗口大小改變時重新布局
    const handleResize = () => {
      if (masonryInstance) {
        setTimeout(() => {
          masonryInstance.layout()
        }, 100)
      }
    }

    window.addEventListener('resize', handleResize)

    // 清理函數
    return () => {
      if (masonryInstance) {
        masonryInstance.destroy()
      }
      window.removeEventListener('resize', handleResize)
    }
  })
})
</script>
