#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// R2 配置 - 你需要從 Cloudflare 控制台獲取這些值
const R2_CONFIG = {
  accountId: process.env.CLOUDFLARE_ACCOUNT_ID || '',
  apiToken: process.env.CLOUDFLARE_API_TOKEN || '',
  bucketName: process.env.R2_BUCKET_NAME || 'hodes-images',
  customDomain: process.env.R2_CUSTOM_DOMAIN || '', // 例如: https://images.homershie.com
}

const ASSETS_DIR = './dist/assets/imgs'
const R2_BASE_PATH = 'assets/imgs'

// 檢查配置
function checkConfig() {
  if (!R2_CONFIG.accountId || !R2_CONFIG.apiToken) {
    console.error('❌ 請設置環境變數:')
    console.error('   CLOUDFLARE_ACCOUNT_ID')
    console.error('   CLOUDFLARE_API_TOKEN')
    console.error('')
    console.error('你可以在 Cloudflare 控制台中獲取這些值:')
    console.error('1. 登入 Cloudflare 控制台')
    console.error('2. 前往 R2 Object Storage')
    console.error('3. 建立或選擇你的 bucket')
    console.error('4. 在右側邊欄中找到你的 Account ID')
    console.error('5. 前往 "我的設定檔" > "API 權杖" 建立新的權杖')
    process.exit(1)
  }
}

// 使用 S3 兼容 API 上傳文件
async function uploadToR2(filePath, objectKey, contentType) {
  const AWS = await import('@aws-sdk/client-s3').then(m => m)

  // 使用 S3 兼容端點
  const s3Client = new AWS.S3Client({
    region: 'auto',
    endpoint: `https://${R2_CONFIG.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: R2_CONFIG.apiToken.split(':')[0], // API Token 的前半部分
      secretAccessKey: R2_CONFIG.apiToken.split(':')[1], // API Token 的後半部分
    },
  })

  try {
    const fileStream = fs.createReadStream(filePath)
    const uploadParams = {
      Bucket: R2_CONFIG.bucketName,
      Key: objectKey,
      Body: fileStream,
      ContentType: contentType,
      CacheControl: 'public, max-age=31536000', // 1年快取
    }

    const command = new AWS.PutObjectCommand(uploadParams)
    await s3Client.send(command)
    return true
  } catch (error) {
    console.error(`上傳失敗: ${error.message}`)
    return false
  }
}

// 獲取文件 MIME 類型
function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
  }
  return mimeTypes[ext] || 'application/octet-stream'
}

// 遞歸獲取所有文件
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    const fullPath = path.join(dirPath, file)
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles)
    } else {
      arrayOfFiles.push(fullPath)
    }
  })

  return arrayOfFiles
}

// 主函數
async function main() {
  console.log('🔧 檢查配置...')
  checkConfig()

  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`❌ 找不到目錄: ${ASSETS_DIR}`)
    console.log('請先執行 npm run build 來生成 dist 資料夾')
    process.exit(1)
  }

  console.log('🚀 開始使用 API 上傳到 Cloudflare R2...')
  console.log(`📁 本地目錄: ${ASSETS_DIR}`)
  console.log(`🪣 R2 Bucket: ${R2_CONFIG.bucketName}`)

  const allFiles = getAllFiles(ASSETS_DIR)
  console.log(`📊 找到 ${allFiles.length} 個文件`)

  let successCount = 0
  let failCount = 0

  for (let i = 0; i < allFiles.length; i++) {
    const localPath = allFiles[i]
    const relativePath = path.relative(ASSETS_DIR, localPath)
    const objectKey = `${R2_BASE_PATH}/${relativePath}`.replace(/\\/g, '/')
    const contentType = getContentType(localPath)

    console.log(`\n[${i + 1}/${allFiles.length}] ${relativePath}`)
    console.log(`📤 正在上傳... (${contentType})`)

    const success = await uploadToR2(localPath, objectKey, contentType)
    if (success) {
      console.log(`✅ 上傳成功`)
      if (R2_CONFIG.customDomain) {
        console.log(`🔗 訪問地址: ${R2_CONFIG.customDomain}/${objectKey}`)
      }
      successCount++
    } else {
      failCount++
    }
  }

  console.log('\n📈 上傳完成！')
  console.log(`✅ 成功: ${successCount} 個文件`)
  console.log(`❌ 失敗: ${failCount} 個文件`)

  if (R2_CONFIG.customDomain) {
    console.log(`\n🌐 所有文件都可以透過以下域名訪問:`)
    console.log(`   ${R2_CONFIG.customDomain}/${R2_BASE_PATH}/`)
  }
}

main().catch(console.error)
