<template>
  <!-- ==================== Start Hero ==================== -->
  <section class="hero section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="intro">
            <div class="lg-box">
              <div class="box1">
                <div class="tow-items">
                  <div class="item1 box-shadwo">
                    <div class="circle-item d-flex align-items-center justify-content-center">
                      <h6><router-link to="/about">關於我</router-link></h6>
                    </div>
                    <div class="text-center mt-30">
                      <a href="/assets/resume/Homer_Shie_Resume.pdf" target="_blank">
                        <svg
                          class="arrow-down"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 34.2 32.3"
                          xml:space="preserve"
                          style="stroke-width: 2"
                        >
                          <line x1="0" y1="16" x2="33" y2="16"></line>
                          <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                          <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                        </svg>
                        <p class="fz-13 mt-15">下載履歷</p>
                      </a>
                    </div>
                  </div>
                  <div class="item2">
                    <div
                      class="sub-item1 box-shadwo d-flex align-items-center justify-content-center"
                    >
                      <div class="text-center">
                        <h2 class="fw-700">{{ experienceYear }}</h2>
                        <p class="fz-13">
                          年 <br />
                          工作經驗
                        </p>
                      </div>
                    </div>
                    <div class="sub-item2 box-shadwo"></div>
                  </div>
                </div>
                <div class="item-down box-shadwo d-flex align-items-center">
                  <div>
                    <div class="circle-item d-flex align-items-center justify-content-center">
                      <router-link to="/services">
                        <svg
                          class="arrow-right"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 34.2 32.3"
                          xml:space="preserve"
                          style="stroke-width: 2"
                        >
                          <line x1="0" y1="16" x2="33" y2="16"></line>
                          <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                          <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                        </svg>
                      </router-link>
                    </div>
                  </div>
                  <h6 class="ml-15">
                    <router-link to="/services">我的服務</router-link>
                  </h6>
                </div>
              </div>

              <div class="box2">
                <div class="item3 box-shadwo"></div>
                <div class="item4 box-shadwo d-flex align-items-center">
                  <h6>
                    <router-link to="/portfolio"><br />我的作品集 </router-link>
                  </h6>
                </div>
              </div>
            </div>
            <div class="bottom-boxs">
              <div class="item5 box-shadwo d-flex align-items-center justify-content-center">
                <a
                  href="https://www.instagram.com/homer_create"
                  class="icon"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="item6 box-shadwo d-flex align-items-center justify-content-center">
                <a
                  href="https://github.com/homershie"
                  class="icon"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
              <div class="item7 box-shadwo d-flex align-items-center justify-content-center">
                <a
                  href="https://medium.com/homer-create"
                  class="icon"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-medium"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="author-profile">
            <div class="author-img">
              <div class="img">
                <img
                  :src="getWebpImage('/assets/imgs/header/profile.jpg')"
                  alt="荷馬桑 Homer Shie 個人照片"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="author-info">
              <div class="text-center">
                <span class="main-color sub-title mb-10">視覺設計師 / 動態設計師</span>
                <h4 class="fw-500">Hi, 我是荷馬桑 Homer Shie</h4>
              </div>
              <div class="social mt-20">
                <a
                  href="https://www.instagram.com/homer_create"
                  class="icon"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="前往 Instagram"
                >
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.pinterest.com/HomerShie/"
                  class="icon"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="前往 Pinterest"
                >
                  <i class="fab fa-pinterest" aria-hidden="true"></i>
                </a>
                <a
                  href="https://medium.com/homer-create"
                  class="icon"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="前往 Medium"
                >
                  <i class="fab fa-medium" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="butns mt-30">
              <router-link to="/contact" class="inf-butn">
                <span>聯絡我</span>
              </router-link>
              <a href="/assets/resume/Homer_Shie_Resume.pdf" class="inf-butn" target="_blank">
                <span>下載履歷</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-7 valign">
          <div class="content">
            <h5 class="cd-headline slide">
              <span>哈囉, 我是</span>
              <span class="cd-words-wrapper main-color">
                <b class="is-visible">荷馬桑</b>
                <b>Homer Shie</b>
                <b>視覺設計師</b>
                <b>動態設計師</b>
                <b>遊戲玩家</b>
                <b>宅宅</b>
                <b>Fingerstyle學生</b>
              </span>
            </h5>
            <h1>
              在台灣擔任動態設計師和
              <span class="bord">視覺設計師</span> 兼職接案中。
            </h1>
            <p class="text">
              作為一位專業的視覺師，除了擅長平面設計和插畫，也熟悉動畫、3D軟體和網頁語法。我曾經遠端為Garmin等客戶提供設計服務，並成功完成了許多B2B和B2C的創作。其中最值得一提的是，我曾與Garmin合作，將木曜四超玩主題的錶面動畫化。此外，我在大學期間參加了皮克斯的動畫營，並獲得了當時的皮克斯動畫師的肯定。我致力於創造出獨特且具有視覺吸引力的設計，期待能為您的業務帶來價值。
            </p>
            <div class="stauts mt-50 pt-50 bord-thin-top">
              <div class="d-flex align-items-center">
                <div class="mr-40">
                  <div class="d-flex align-items-center">
                    <h2>{{ projectCount }}</h2>
                    <p>
                      件 <br />
                      已完成專案
                    </p>
                  </div>
                </div>
                <div class="mr-40">
                  <div class="d-flex align-items-center">
                    <h2>10</h2>
                    <p>
                      個 <br />
                      擅長軟體
                    </p>
                  </div>
                </div>
                <div class="ml-auto">
                  <div class="butn-presv">
                    <router-link to="/contact" class="butn butn-md butn-bord radius-5 skew">
                      <span>跟我聯繫！</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ==================== End Hero ==================== -->
</template>

<script setup>
import { computed } from 'vue'
import { portfolio } from '@/data/portfolioData.js'
import { useImageFormat } from '@/composables/useImageFormat.js'

const { toWebP } = useImageFormat()

// 將圖片路徑轉換為WebP格式
const getWebpImage = imagePath => {
  return toWebP(imagePath)
}

const experienceYear = computed(() => {
  const startYear = 2018 // 假設從2018年開始工作
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
})

const projectCount = computed(() => portfolio.length)
</script>

<style scoped>
/* 主要樣式會從全局 CSS 載入 */
</style>
