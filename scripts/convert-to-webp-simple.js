#!/usr/bin/env node

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const SOURCE_DIR = './dist/assets/imgs'
const OUTPUT_DIR = './dist/assets/imgs'

function getAllImageFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    const fullPath = path.join(dirPath, file)
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllImageFiles(fullPath, arrayOfFiles)
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      arrayOfFiles.push(fullPath)
    }
  })

  return arrayOfFiles
}

async function convertToWebP(inputPath) {
  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  跳過（已存在）: ${path.basename(outputPath)}`)
    return
  }

  try {
    await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath)
    console.log(`✅ 轉換成功: ${path.basename(inputPath)} → ${path.basename(outputPath)}`)
  } catch (error) {
    console.error(`❌ 轉換失敗: ${path.basename(inputPath)}`, error.message)
  }
}

async function main() {
  console.log('🔄 開始轉換圖片為 WebP...')

  const imageFiles = getAllImageFiles(SOURCE_DIR)
  console.log(`📊 找到 ${imageFiles.length} 個圖片檔案`)

  for (const file of imageFiles) {
    await convertToWebP(file)
  }

  console.log('🎉 轉換完成！')
}

main().catch(console.error)
