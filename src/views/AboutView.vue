<template>
  <!-- ==================== Start About ==================== -->
  <section class="about section-padding">
    <div class="container with-pad">
      <div class="row lg-marg">
        <div class="col-lg-5 valign">
          <div class="profile-img">
            <div class="img">
              <img src="/assets/imgs/header/profile.jpg" alt="荷馬桑個人照片" />
            </div>
            <span class="icon">
              <img src="/assets/imgs/header/icon1.png" alt="" />
            </span>
            <span class="icon">
              <img src="/assets/imgs/header/icon2.png" alt="" />
            </span>
            <span class="icon">
              <img src="/assets/imgs/header/icon3.png" alt="" />
            </span>
            <span class="icon">
              <img src="/assets/imgs/header/icon4.png" alt="" />
            </span>
          </div>
        </div>
        <div class="col-lg-7 valign">
          <div class="cont">
            <div class="sub-title-icon d-flex align-items-center">
              <span class="icon fas fa-lightbulb"></span>
              <h6>關於</h6>
            </div>
            <div class="text">
              <h4 class="mb-30">
                我是荷馬桑，來自台灣的 <span class="main-color"> 視覺和動態設計師 </span> 。
                <br />
                專注於平面媒體工作和思考如何平面媒體轉換為活潑的動畫，擅長將複雜的概念轉化為直覺且吸引人的視覺呈現。
              </h4>
              <p>
                我利用平面和動態的設計元素，結合我日常的興趣，
                如插畫、動畫、遊戲、音樂和動漫，創造出獨特且具有個人風格的設計作品。同時，致力於從多元包容的視角出發，有效地傳達行銷訊息和塑造品牌形象。
                我在設計領域累積了豐富的經驗，並且在商業界創作了大量的設計作品。
                <br />
                在閒暇之餘，我會更新部落格，發表我對視覺美感的見解，並整理出視覺風格和一些厲害的巨巨給視覺視覺麻瓜們認識。
                我認為視覺美感也需要普及，不管是提案還是喜歡視覺藝術，我希望我的文章能對你有所幫助。有時間的話，可以幫我點一下LikeCoin，
                你們的支持也許能成為我前進的動力。
                <br />
                感謝你們！
              </p>

              <div class="feat mt-30">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="item mb-15">
                      <h6 class="sub-title ls1">
                        <span class="fz-13 mr-10 main-color">
                          <i class="fas fa-check"></i>
                        </span>
                        平面設計
                      </h6>
                    </div>
                    <div class="item sm-mb15">
                      <h6 class="sub-title ls1">
                        <span class="fz-13 mr-10 main-color">
                          <i class="fas fa-check"></i>
                        </span>
                        動態設計
                      </h6>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="item mb-15">
                      <h6 class="sub-title ls1">
                        <span class="fz-13 mr-10 main-color">
                          <i class="fas fa-check"></i>
                        </span>
                        3D動畫
                      </h6>
                    </div>
                    <div class="item">
                      <h6 class="sub-title ls1">
                        <span class="fz-13 mr-10 main-color">
                          <i class="fas fa-check"></i>
                        </span>
                        插畫
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="info mt-50">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="item d-flex align-items-center sm-mb30">
                      <div class="mr-15">
                        <font-awesome-icon :icon="['far', 'envelope']" class="icon main-color" />
                      </div>
                      <div>
                        <span class="opacity-7 mb-5">電子信箱</span>
                        <h6>homerxworkshop@gmail.com</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== End About ==================== -->
  <!-- ==================== Start Skills ==================== -->
  <section ref="skillsRef" class="skills section-padding pt-0">
    <div class="container with-pad">
      <div class="sec-head mb-80">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <div class="sub-title-icon d-flex align-items-center mx-auto">
              <font-awesome-icon :icon="['fas', 'dumbbell']" class="icon" />
              <h6>我的技能</h6>
            </div>
            <h3>優勢</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- 使用 v-for 重構技能列表 -->
        <div v-for="skill in skills" :key="skill.id" class="col-lg-4 col-md-6">
          <div class="item mb-30">
            <div class="d-flex align-items-center mb-30">
              <div class="mr-30">
                <div class="img icon-img-40">
                  <img :src="skill.icon" :alt="skill.name" />
                </div>
              </div>
              <div>
                <h6 class="fz-18">{{ skill.name }}</h6>
              </div>
            </div>
            <div class="skill-progress">
              <span class="progres" :data-value="skill.percentage + '%'"></span>
            </div>
            <span class="value">{{ skill.percentage }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== Start Resume ==================== -->
  <section class="resume section-padding pt-0">
    <div class="container with-pad">
      <div class="sec-head mb-80">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <div class="d-inline-block">
              <div class="sub-title-icon d-flex align-items-center">
                <font-awesome-icon :icon="['fas', 'file-alt']" class="icon" />
                <h6>我的簡歷</h6>
              </div>
            </div>
            <h3>學歷和工作經驗</h3>
          </div>
        </div>
      </div>

      <div>
        <div class="resume-swiper" data-carousel="swiper" data-space="50" data-speed="1000">
          <div
            id="content-carousel-container-unq-resume"
            class="swiper-container"
            data-swiper="container"
          >
            <div class="swiper-wrapper">
              <!-- 使用 v-for 重構履歷列表 -->
              <div v-for="experience in experiences" :key="experience.id" class="swiper-slide">
                <div class="item text-center">
                  <h6 class="main-color date fz-15 mb-60">{{ experience.period }}</h6>
                  <h5>{{ experience.title }}</h5>
                  <span class="opacity-8 fw-500 mt-10">[ {{ experience.company }} ]</span>
                  <p class="fz-13 mt-15">{{ experience.description }}</p>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useProgressBar } from '@/composables/useProgressBar'

// 使用進度條 composable
const { setupProgressBar } = useProgressBar()

// 響應式資料
const skillsRef = ref()

// 技能資料
const skills = ref([
  {
    id: 1,
    name: '平面設計',
    percentage: 95,
    icon: '/assets/imgs/resume/s1.png',
  },
  {
    id: 2,
    name: '插畫',
    percentage: 85,
    icon: '/assets/imgs/resume/s2.png',
  },
  {
    id: 3,
    name: '動態設計',
    percentage: 80,
    icon: '/assets/imgs/resume/s3.png',
  },
  {
    id: 4,
    name: '3D動畫',
    percentage: 72,
    icon: '/assets/imgs/resume/s4.png',
  },
  {
    id: 5,
    name: 'UI設計',
    percentage: 65,
    icon: '/assets/imgs/resume/s5.png',
  },
  {
    id: 6,
    name: '網頁開發',
    percentage: 60,
    icon: '/assets/imgs/resume/s6.png',
  },
])

// 工作經驗資料
const experiences = ref([
  {
    id: 1,
    period: '2025 - 現在',
    title: '前端工程師學徒',
    company: '職訓局北分署',
    description:
      '2024年底問禮有限公司因為營運狀況不佳，因此面臨資遣風波。為了更穩定收入，我決定藉此機會報名職訓局的前端設計課程，並從2025年3月開始學習前端工程師的技能。這個課程不僅提供了前端開發的基礎知識，還包括LINEBOT的開發，讓我能夠在學習中體驗實用的技術。我希望透過這段時間的學習，能夠成為一名合格的前端工程師，並在未來的職業生涯中融合我的創意和技術能力。',
  },
  {
    id: 2,
    period: '2019 - 現在',
    title: '視覺&動態設計師',
    company: '接案休息中',
    description:
      '開始工作時，一直都有陸續接案，直到2019年與Gamin緊密合作，我開始以動態設計和視覺設計全職接案。主要負責設計智慧手錶的錶面，並涵蓋平面設計、品牌營造、行銷視覺設計、動畫製作、影片剪輯和特效等多元業務。同時積極學習並累積大量作品，並在業餘時間持續進修動畫、3D、UI設計和網頁建置等專業知識，以提升自己的專業能力和服務品質。',
  },
  {
    id: 3,
    period: '2023 - 2025',
    title: '兼職資深美術編輯',
    company: '問禮有限公司',
    description:
      '在2023年底，由於案源減少，我選擇尋找兼職工作以穩定收入。在問禮有限公司主要負責兒童英文學習教材出版的設計工作，包括繪製教材插圖和設計教材排版和包裝，並參與品牌的建置工作。以此穩定收入作為根基，我預計將朝前端工程師的方向努力。',
  },
  {
    id: 4,
    period: '2018 - 2019',
    title: '視覺設計師',
    company: '臺灣娜珂黛肌有限公司',
    description:
      '我透過創新的視覺設計，專注於推廣公司的主要產品—薑的營養保健品。傳達產品的獨特價值和優勢，並提升了產品在市場上的認知度。在此期間，我與行銷團隊緊密合作，負責網站的視覺優化和維護，設計和製作吸引人的網頁行銷圖片和banner等素材，共同創造出有效的行銷輸出物，以達到公司的行銷目標，提升用戶體驗和網站流量。這段經驗讓我深入了解如何將視覺設計與產品行銷策略結合，並實現業務目標。',
  },
  {
    id: 5,
    period: '2013 - 2017',
    title: '應用美術學系',
    company: '天主教輔仁大學',
    description:
      '專注於學習如何創造吸引人的視覺設計，並始終將使用者需求放在設計的核心。透過各種課程和實作經驗，加上在學期間的兼職工作，從中儲備了大量的市場經驗，深入理解了設計的各個方面，包括概念發展、視覺溝通以及技術實現。同時，我累積了扎實的設計基礎和豐富的創新思維，並期待將這些知識和技能應用到未來的工作中。',
  },
])

// 新增技能的方法
const addSkill = newSkill => {
  skills.value.push({
    id: skills.value.length + 1,
    ...newSkill,
  })
}

// 新增經驗的方法
const addExperience = newExperience => {
  experiences.value.unshift({
    id: experiences.value.length + 1,
    ...newExperience,
  })
}

onMounted(() => {
  // 使用 VueUse 進度條 composable 設置技能動畫
  setupProgressBar(skillsRef, {
    threshold: 0.3,
    animationDuration: 1500,
    animationEasing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  })

  new window.Swiper('.resume-swiper .swiper-container', {
    spaceBetween: 50,
    speed: 1000,
    loop: false,
    pagination: {
      el: '.resume-swiper .swiper-pagination',
      clickable: true,
      dynamicBullets: false, // 不要用動態分頁
      type: 'bullets', // 預設就是 bullets
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  })
})
// 導出方法供其他組件使用
defineExpose({
  addSkill,
  addExperience,
})
</script>

<style lang="scss" scoped></style>
