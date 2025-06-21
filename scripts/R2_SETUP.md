# Cloudflare R2 圖片上傳設置指南

## 1. 建立 Cloudflare R2 Bucket

```bash
# 使用 Wrangler CLI 建立 bucket（如果還沒建立的話）
npm run r2:create-bucket

# 或者手動建立
wrangler r2 bucket create hodes-images
```

## 2. 環境變數設置

創建 `.env` 文件並添加以下配置：

```bash
# Cloudflare R2 配置
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
CLOUDFLARE_API_TOKEN=your_api_token_here
R2_BUCKET_NAME=hodes-images
R2_CUSTOM_DOMAIN=https://images.homershie.com
```

### 如何獲取這些值：

1. **Account ID**: 登入 Cloudflare 控制台，在右側邊欄可以找到
2. **API Token**:
   - 前往 "我的設定檔" > "API 權杖"
   - 建立新的權杖，選擇 "R2 Token" 範本
   - 權限設置為 "Object:Edit"

## 3. 安裝依賴（如果使用 API 上傳）

```bash
npm install @aws-sdk/client-s3
```

## 4. 使用方法

### 方法一：使用 Wrangler CLI（推薦）

```bash
# 第一次上傳所有文件
npm run r2:upload

# 之後只同步修改過的文件
npm run r2:sync

# 查看 bucket 中的文件
npm run r2:list
```

### 方法二：使用 API（需要額外依賴）

```bash
# 設置環境變數後執行
node scripts/r2-api-upload.js
```

## 5. 設置自定義域名（可選）

1. 在 Cloudflare R2 控制台中設置自定義域名
2. 更新環境變數中的 `R2_CUSTOM_DOMAIN`
3. 圖片將可以通過自定義域名訪問

## 6. 在程式碼中使用

上傳後，你可以更新你的 Vue 組件來使用 R2 的圖片：

```javascript
// 原本
const imageUrl = '/assets/imgs/logo.png'

// 使用 R2（如果有自定義域名）
const imageUrl = 'https://images.homershie.com/assets/imgs/logo.png'

// 或使用 R2 預設域名
const imageUrl = 'https://pub-xxxxx.r2.dev/assets/imgs/logo.png'
```
