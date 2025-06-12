import { computed } from 'vue'
import { useNetwork } from '@vueuse/core'

export function useNetworkStatus() {
  const { isOnline, downlink, effectiveType } = useNetwork()

  const networkStatus = computed(() => ({
    isOnline: isOnline.value,
    speed: downlink.value,
    type: effectiveType.value,
    quality: getNetworkQuality(downlink.value, effectiveType.value),
  }))

  const getNetworkQuality = (speed, type) => {
    if (!speed || !type) return 'unknown'

    if (type === '4g' && speed > 10) return 'excellent'
    if (type === '4g' && speed > 5) return 'good'
    if (type === '3g' || (type === '4g' && speed <= 5)) return 'fair'
    return 'poor'
  }

  const showOfflineMessage = () => {
    console.warn('網路連線中斷，部分功能可能受限')
  }

  const shouldOptimizeImages = computed(() => {
    return networkStatus.value.quality === 'poor' || networkStatus.value.quality === 'fair'
  })

  return {
    networkStatus,
    isOnline,
    showOfflineMessage,
    shouldOptimizeImages,
  }
}
