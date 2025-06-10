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
      <div class="portfolio-list">
        <PortfolioList :works="portfolioData" @view-details="handleViewDetails" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import PortfolioList from '@/components/PortfolioList.vue'
import { usePortfolio } from '@/composables/usePortfolio.js'

const { portfolioData } = usePortfolio()
const router = useRouter()

function handleViewDetails(work) {
  router.push(`/project/${work.id}`)
}
</script>
