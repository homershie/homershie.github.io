# 開發指南

## 開發環境設定

### 前置需求

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### IDE 建議設定

推薦使用 [VS Code](https://code.visualstudio.com/) 配合以下擴充套件：

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)

## 專案架構

### 目錄結構說明

```
src/
├── assets/          # 靜態資源
│   ├── scss/        # SCSS 樣式檔案
│   │   ├── components/  # 元件樣式
│   │   ├── layout/      # 版面樣式
│   │   └── utility/     # 工具樣式
│   ├── scripts.js   # 全域腳本
│   └── style.css    # 編譯後的主樣式
├── components/      # 可重用的 Vue 元件
├── composables/     # Vue 組合式函數 (共用邏輯)
├── data/           # 靜態資料檔案
├── router/         # Vue Router 路由設定
├── stores/         # Pinia 狀態管理
├── test/           # 測試檔案
└── views/          # 頁面級元件
```

### 核心技術架構

- **前端框架**: Vue 3 (Composition API)
- **建置工具**: Vite
- **路由**: Vue Router 4
- **狀態管理**: Pinia
- **樣式**: SCSS + BEM 命名規範
- **動畫**: GSAP
- **圖示**: FontAwesome

## 開發工作流程

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

### 3. 開發過程中的品質檢查

```bash
# 程式碼檢查和自動修復
npm run lint

# 程式碼格式化
npm run format

# 執行測試
npm run test
```

### 4. 提交前檢查

```bash
# 執行完整的品質檢查
npm run ci
```

### 5. 建置生產版本

```bash
npm run build
```

## 程式碼規範

### Vue 元件規範

- 使用 Composition API
- 元件名稱採用 PascalCase
- 檔案名稱採用 PascalCase
- Props 使用 camelCase
- Events 使用 kebab-case

### SCSS 規範

- 使用 BEM 命名規範
- 2 空格縮排
- 屬性按邏輯分組排序
- 使用 SCSS 變數統一管理顏色、字體等

### JavaScript 規範

- 使用 ES6+ 語法
- 偏好 const/let 而非 var
- 使用箭頭函數
- 2 空格縮排，不使用分號

## 測試策略

### 測試類型

- **單元測試**: 測試個別函數和元件
- **整合測試**: 測試元件間的互動
- **端到端測試**: 測試完整的使用者流程

### 測試檔案結構

```
src/test/
├── components/     # 元件測試
├── composables/    # 組合式函數測試
└── setup.js       # 測試環境設定
```

### 測試命令

```bash
npm run test         # 開發模式測試（監聽檔案變化）
npm run test:run     # 單次執行所有測試
npm run test:ui      # 開啟測試 UI 介面
npm run test:coverage # 產生測試覆蓋率報告
```

## 部署流程

### GitHub Actions CI/CD

專案配置了自動化的 CI/CD 流程：

1. **程式碼品質檢查**

   - ESLint 檢查
   - Prettier 格式檢查
   - 測試執行

2. **建置驗證**

   - 多版本 Node.js 測試
   - 生產建置測試

3. **自動部署**（可選）
   - GitHub Pages 部署
   - 靜態資源最佳化

### 手動部署

```bash
# 建置生產版本
npm run build

# 預覽建置結果
npm run preview

# 部署 dist 資料夾到伺服器
```

## 效能最佳化

### 建置最佳化

- Vite 自動進行程式碼分割
- 圖片資源最佳化
- CSS 最小化
- JavaScript 壓縮

### 執行時最佳化

- Vue 3 Composition API 提升效能
- 圖片延遲載入
- 路由層級程式碼分割

## 疑難排解

### 常見問題

**Q: 開發伺服器啟動失敗**
A: 確認 Node.js 版本 >= 18，並重新安裝依賴

**Q: SCSS 編譯錯誤**
A: 檢查 SCSS 語法，確認變數和 mixin 正確引入

**Q: 測試失敗**
A: 檢查測試環境設定，確認 jsdom 正確配置

**Q: ESLint 錯誤**
A: 執行 `npm run lint` 自動修復，或手動修正不符合規範的程式碼

### 開發工具問題

- VS Code 未識別 Vue 檔案：安裝 Vue - Official 擴充套件
- 自動格式化未生效：確認 Prettier 擴充套件已啟用
- 型別檢查問題：檢查 jsconfig.json 設定

## 貢獻指南

### 提交規範

使用語義化提交訊息：

- `feat:` 新功能
- `fix:` 錯誤修復
- `docs:` 文件更新
- `style:` 格式調整
- `refactor:` 重構
- `test:` 測試相關
- `chore:` 建置或工具相關

### Pull Request 流程

1. Fork 專案
2. 建立功能分支
3. 進行開發和測試
4. 確保所有檢查通過
5. 提交 Pull Request

## 聯絡資訊

如有任何開發相關問題，請聯絡：

- 開發者：Homer Shie
- 專案網址：[Portfolio Website]
