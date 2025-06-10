export async function preloadImages(urls = []) {
  if (!Array.isArray(urls) || urls.length === 0) return []
  const promises = urls.slice(0, 12).map(src => {
    return new Promise(resolve => {
      const img = new Image()
      img.addEventListener('load', () => resolve())
      img.addEventListener('error', () => resolve())
      img.src = src
    })
  })
  await Promise.all(promises)
  return urls.slice(0, 12)
}
