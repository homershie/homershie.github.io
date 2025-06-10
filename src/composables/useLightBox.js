import { onMounted, nextTick } from 'vue'

export function enableImageLightbox() {
  // 等 DOM 渲染完
  nextTick(() => {
    const images = document.querySelectorAll('.cont .image img')
    images.forEach(img => {
      let hasLinkParent = false
      let node = img.parentElement
      while (node) {
        if (node.tagName && node.tagName.toLowerCase() === 'a') {
          hasLinkParent = true
          break
        }
        node = node.parentElement
      }
      if (!hasLinkParent) {
        img.style.cursor = 'zoom-in'
        img.onclick = e => {
          e.stopPropagation()
          openLightbox(img.src, img.alt)
        }
      } else {
        img.style.cursor = 'pointer'
        img.onclick = null
      }
    })
  })
}

// 你可以用自己的 lightbox 實現
function openLightbox(src, alt) {
  // 這裡用最簡單的 modal 實現
  const modal = document.createElement('div')
  modal.style =
    'position:fixed;z-index:9999;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;'
  modal.onclick = () => document.body.removeChild(modal)
  const img = document.createElement('img')
  img.src = src
  img.alt = alt
  img.style = [
    'max-width:90vw',
    'max-height:90vh',
    'width:auto',
    'height:90vh',
    'border-radius:10px',
    'box-shadow:0 0 20px #000',
    'object-fit:contain', // 保持等比例
    'display:block',
  ].join(';')
  modal.appendChild(img)
  document.body.appendChild(modal)
}

export function useLightBox() {
  onMounted(() => {
    enableImageLightbox()
  })
}
