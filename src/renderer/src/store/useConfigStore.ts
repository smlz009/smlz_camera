import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      page: 'camera',
      deviceId: '',
      rounded: false
    })

    const updateConfig = () => {}

    return { config, updateConfig }
  },
  {
    persist: true
  }
)
