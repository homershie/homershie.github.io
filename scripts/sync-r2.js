#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const BUCKET_NAME = 'hodes-images'
const ASSETS_DIR = './dist/assets/imgs'
const R2_BASE_PATH = 'assets/imgs'
const CACHE_FILE = './scripts/.r2-cache.json'

// 計算文件 MD5
function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath)
  return crypto.createHash('md5').update(fileBuffer).digest('hex')
}

// 載入快取
function loadCache() {
  if (fs.existsSync(CACHE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'))
    } catch (error) {
      console.warn('快取文件損壞，將重新建立')
    }
  }
  return {}
}

// 保存快取
function saveCache(cache) {
  const dir = path.dirname(CACHE_FILE)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2))
}

// 遞歸獲取所有文件及其 hash
function getAllFilesWithHash(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    const fullPath = path.join(dirPath, file)
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFilesWithHash(fullPath, arrayOfFiles)
    } else {
      const relativePath = path.relative(ASSETS_DIR, fullPath)
      const hash = getFileHash(fullPath)
      arrayOfFiles.push({
        localPath: fullPath,
        relativePath,
        remotePath: `${R2_BASE_PATH}/${relativePath}`.replace(/\\/g, '/'),
        hash,
      })
    }
  })

  return arrayOfFiles
}

// 上傳文件到 R2
function uploadFile(localPath, remotePath) {
  try {
    const command = `wrangler r2 object put ${BUCKET_NAME}/${remotePath} --file="${localPath}"`
    execSync(command, { stdio: 'inherit' })
    return true
  } catch (error) {
    console.error(`❌ 上傳失敗: ${remotePath}`, error.message)
    return false
  }
}

// 主函數
function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`❌ 找不到目錄: ${ASSETS_DIR}`)
    console.log('請先執行 npm run build 來生成 dist 資料夾')
    process.exit(1)
  }

  console.log('🔄 開始同步圖片到 Cloudflare R2...')
  console.log(`📁 本地目錄: ${ASSETS_DIR}`)
  console.log(`🪣 R2 Bucket: ${BUCKET_NAME}`)

  const cache = loadCache()
  const allFiles = getAllFilesWithHash(ASSETS_DIR)

  console.log(`📊 檢查 ${allFiles.length} 個文件`)

  let uploadCount = 0
  let skipCount = 0
  const newCache = {}

  allFiles.forEach((fileInfo, index) => {
    const { localPath, relativePath, remotePath, hash } = fileInfo
    const cacheKey = relativePath

    console.log(`\n[${index + 1}/${allFiles.length}] ${relativePath}`)

    if (cache[cacheKey] === hash) {
      console.log('⏭️  跳過（文件未變更）')
      skipCount++
    } else {
      console.log(`📤 正在上傳...`)
      if (uploadFile(localPath, remotePath)) {
        console.log(`✅ 上傳成功`)
        uploadCount++
      }
    }

    newCache[cacheKey] = hash
  })

  saveCache(newCache)

  console.log('\n📈 同步完成！')
  console.log(`✅ 上傳: ${uploadCount} 個文件`)
  console.log(`⏭️  跳過: ${skipCount} 個文件`)
}

main()
