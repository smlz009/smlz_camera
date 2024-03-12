import '@renderer/assets/css/tailwind.css'
import '@renderer/assets/css/global.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const pinia = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

pinia.use(piniaPluginPersistedstate)
createApp(App).use(ElementPlus).use(pinia).mount('#app')
