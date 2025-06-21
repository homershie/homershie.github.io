#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const BUCKET_NAME = 'homershie-images'
const ASSETS_DIR = './dist/assets/imgs'
const R2_BASE_PATH = 'assets/imgs'

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

// 上傳單個文件到 R2
function uploadFile(localPath, remotePath) {
  try {
    const command = `wrangler r2 object put ${BUCKET_NAME}/${remotePath} --file="${localPath}"`
    console.log(`正在上傳: ${localPath} -> ${remotePath}`)
    execSync(command, { stdio: 'inherit' })
    console.log(`✅ 上傳成功: ${remotePath}`)
  } catch (error) {
    console.error(`❌ 上傳失敗: ${remotePath}`, error.message)
  }
}

// 主函數
function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`❌ 找不到目錄: ${ASSETS_DIR}`)
    console.log('請先執行 npm run build 來生成 dist 資料夾')
    process.exit(1)
  }

  console.log('🚀 開始上傳圖片到 Cloudflare R2...')
  console.log(`📁 本地目錄: ${ASSETS_DIR}`)
  console.log(`🪣 R2 Bucket: ${BUCKET_NAME}`)

  const allFiles = getAllFiles(ASSETS_DIR)
  console.log(`📊 找到 ${allFiles.length} 個文件`)

  allFiles.forEach((localPath, index) => {
    // 計算相對路徑
    const relativePath = path.relative(ASSETS_DIR, localPath)
    const remotePath = `${R2_BASE_PATH}/${relativePath}`.replace(/\\/g, '/')

    console.log(`\n[${index + 1}/${allFiles.length}]`)
    uploadFile(localPath, remotePath)
  })

  console.log('\n🎉 所有文件上傳完成！')
}

main()
