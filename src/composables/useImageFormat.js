/**
 * 用於處理圖片格式轉換的composable
 * 將圖片路徑轉換為WebP格式
 */
export function useImageFormat() {
  /**
   * 將圖片路徑轉換為WebP格式
   * @param {string} imagePath - 原始圖片路徑 (jpg/png)
   * @returns {string} - WebP格式的圖片路徑
   */
  const toWebP = imagePath => {
    if (!imagePath) return ''

    // 如果已經是WebP格式，直接返回
    if (imagePath.toLowerCase().endsWith('.webp')) {
      return imagePath
    }

    // 替換副檔名為.webp
    return imagePath.replace(/\.(jpe?g|png)$/i, '.webp')
  }

  /**
   * 創建圖片標籤，支援WebP與後備圖片
   * @param {string} imagePath - 原始圖片路徑
   * @param {string} alt - 圖片替代文字
   * @param {string} className - CSS類別
   * @returns {object} - 包含src和srcset的物件
   */
  const getImageAttributes = (imagePath, alt = '', className = '') => {
    if (!imagePath) return { src: '', alt, class: className }

    const webpPath = toWebP(imagePath)

    return {
      src: webpPath,
      alt,
      class: className,
      onerror: `this.onerror=null; this.src='${imagePath}'`,
    }
  }

  return {
    toWebP,
    getImageAttributes,
  }
}
