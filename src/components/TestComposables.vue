<template>
  <div class="test-composables-container">
    <h2>Composables 測試頁面</h2>

    <!-- 測試進度條 -->
    <section ref="progressSection" class="test-section">
      <h3>進度條測試</h3>
      <div class="skill-progress">
        <span class="progres" data-value="80%"></span>
      </div>
      <div class="skill-progress">
        <span class="progres" data-value="95%"></span>
      </div>
    </section>

    <!-- 測試計數器 -->
    <section class="test-section number-sec">
      <h3>計數器測試</h3>
      <div class="d-flex gap-4">
        <div class="count" data-count="150">0</div>
        <div class="count" data-count="25">0</div>
        <div class="count" data-count="100">0</div>
      </div>
    </section>

    <!-- 測試工具提示 -->
    <section class="test-section">
      <h3>工具提示測試</h3>
      <p data-tooltip-tit="這是主工具提示">將滑鼠懸停在此文字上（主工具提示）</p>
      <p data-tooltip-sub="這是子工具提示">將滑鼠懸停在此文字上（子工具提示）</p>
    </section>

    <!-- 測試視差效果 -->
    <section class="test-section">
      <h3>視差效果測試</h3>
      <div
        class="parallaxie"
        data-speed="0.5"
        style="
          height: 200px;
          background: #333;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        視差元素
      </div>
    </section>

    <!-- 測試標籤頁 -->
    <section class="test-section">
      <h3>標籤頁測試</h3>
      <div id="tabs">
        <div class="tab-links">
          <a href="#tab1" class="item-link current" data-tab="tab1">標籤1</a>
          <a href="#tab2" class="item-link" data-tab="tab2">標籤2</a>
          <a href="#tab3" class="item-link" data-tab="tab3">標籤3</a>
        </div>
        <div id="tab1" class="tab-content current">
          <p>這是標籤頁1的內容</p>
        </div>
        <div id="tab2" class="tab-content">
          <p>這是標籤頁2的內容</p>
        </div>
        <div id="tab3" class="tab-content">
          <p>這是標籤頁3的內容</p>
        </div>
      </div>
    </section>

    <!-- 測試手風琴 -->
    <section class="test-section">
      <h3>手風琴測試</h3>
      <div class="accordion">
        <div class="title">
          手風琴項目 1
          <div class="ico"></div>
        </div>
        <div class="accordion-info">
          <p>這是手風琴項目1的內容</p>
        </div>

        <div class="title">
          手風琴項目 2
          <div class="ico"></div>
        </div>
        <div class="accordion-info">
          <p>這是手風琴項目2的內容</p>
        </div>

        <div class="title">
          手風琴項目 3
          <div class="ico"></div>
        </div>
        <div class="accordion-info">
          <p>這是手風琴項目3的內容</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScriptsMigration } from '@/composables/useScriptsMigration.js'

const progressSection = ref(null)

// 使用統一的腳本遷移 composable
const { initializeAllFeatures } = useScriptsMigration()

onMounted(() => {
  // 初始化所有功能
  initializeAllFeatures()
})
</script>

<style scoped>
.test-composables-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.test-section {
  margin-bottom: 60px;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 8px;
}

.test-section h3 {
  color: #00ff00;
  margin-bottom: 20px;
}

.skill-progress {
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  border-radius: 2px;
  position: relative;
}

.skill-progress .progres {
  position: absolute;
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  background-color: #00ff00;
  border-radius: 2px;
  transition: width 1.2s cubic-bezier(0.77, 0, 0.175, 1);
}

.count {
  font-size: 2rem;
  font-weight: bold;
  color: #00ff00;
  margin-right: 20px;
}

.gap-4 {
  gap: 1rem;
}

.d-flex {
  display: flex;
}

.tab-links {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.item-link {
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 4px;
  text-decoration: none;
  color: #ccc;
  transition: all 0.3s;
}

.item-link.current,
.item-link:hover {
  background: #00ff00;
  color: #000;
}

.tab-content {
  display: none;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 4px;
}

.tab-content.current {
  display: block;
}

.accordion .title {
  padding: 15px 10px;
  border-bottom: 1px solid #333;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;
}

.accordion .title:hover {
  background-color: rgba(0, 255, 0, 0.1);
}

.accordion .title .ico {
  position: absolute;
  top: 50%;
  right: 20px;
  width: 15px;
  height: 1px;
  background: #999;
  transform: translateY(-50%);
}

.accordion .title .ico:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 15px;
  background: #999;
  transform: translate(-50%, -50%);
  transition: transform 0.3s;
}

.accordion .accordion-info {
  display: none;
  padding: 15px 10px;
  border-bottom: 1px solid #333;
}

.accordion .accordion-info.active {
  display: block;
}

[data-tooltip-tit],
[data-tooltip-sub] {
  cursor: help;
  color: #00ff00;
  text-decoration: underline;
}
</style>
