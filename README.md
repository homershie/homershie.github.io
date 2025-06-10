# Portfolio Vue.js 作品集網站

一個現代化的 Vue.js 個人作品集網站，展示設計和開發專案。

## 🚀 特色功能

- **現代化技術架構**: Vue 3 + Vite + Vue Router + Pinia
- **響應式設計**: 支援各種裝置和螢幕尺寸
- **作品展示**: 互動式作品集與燈箱效果
- **部落格系統**: 文章展示和分類功能
- **聯絡表單**: 整合聯絡功能
- **動畫效果**: GSAP 動畫增強使用者體驗

## 🛠 開發工具與品質保證

- **程式碼格式化**: Prettier 統一程式碼風格
- **程式碼檢查**: ESLint 確保程式碼品質
- **測試框架**: Vitest + Vue Test Utils
- **CI/CD 流程**: GitHub Actions 自動化測試和部署
- **現代化 SCSS**: 模組化樣式架構

## 📋 系統需求

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🔧 專案設定

### 安裝依賴

```sh
npm install
```

### 開發環境運行

```sh
npm run dev
```

### 生產環境建置

```sh
npm run build
```

### 預覽建置結果

```sh
npm run preview
```

## 🧪 程式碼品質

### 程式碼檢查

```sh
npm run lint        # 自動修復問題
npm run lint:check  # 僅檢查問題
```

### 程式碼格式化

```sh
npm run format       # 格式化所有檔案
npm run format:check # 檢查格式化狀態
```

### 測試

```sh
npm run test         # 開發模式測試
npm run test:run     # 單次執行測試
npm run test:ui      # 測試 UI 介面
npm run test:coverage # 測試覆蓋率
```

### 完整品質檢查

```sh
npm run ci # 執行所有檢查 (lint + format + test)
```

## 📁 專案結構

```
src/
├── assets/          # 靜態資源
│   ├── scss/        # SCSS 樣式檔案
│   ├── scripts.js   # 公用腳本
│   └── style.css    # 編譯後的 CSS
├── components/      # Vue 元件
├── composables/     # Vue 組合式函數
├── data/           # 資料檔案
├── router/         # 路由設定
├── stores/         # Pinia 狀態管理
├── test/           # 測試檔案
└── views/          # 頁面元件
```

## 🔄 CI/CD 流程

專案包含完整的 GitHub Actions 工作流程：

- **程式碼品質檢查**: ESLint 和 Prettier
- **自動化測試**: 跨多個 Node.js 版本測試
- **建置驗證**: 確保生產環境可正常建置
- **自動部署**: 可選的 GitHub Pages 部署

## 📝 開發規範

- 使用 2 空格縮排
- 使用單引號
- 不使用分號
- 使用尾隨逗號
- Vue 元件採用組合式 API
- SCSS 採用 BEM 命名規範

## 🌐 瀏覽器支援

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 📄 授權

Private - 個人作品集專案
