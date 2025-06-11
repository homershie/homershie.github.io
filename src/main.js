import './assets/style.css'
import './assets/scripts.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Font Awesome 配置
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 從 free-solid-svg-icons 引入圖標
import {
  faDumbbell,
  faFileAlt,
  faBriefcase,
  faLightbulb,
  faBell,
  faStickyNote,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
// 從 free-regular-svg-icons 引入圖標
import { faEnvelope, faMap, faUser, faComments } from '@fortawesome/free-regular-svg-icons'

// 引入品牌圖標
import { faInstagram, faPinterest, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons'

// 將圖標添加到庫中
library.add(
  faEnvelope,
  faMap,
  faUser,
  faComments,
  faInstagram,
  faPinterest,
  faMedium,
  faGithub,
  faDumbbell,
  faFileAlt,
  faBriefcase,
  faLightbulb,
  faBell,
  faStickyNote,
  faMapMarkerAlt
)

const app = createApp(App)

// 註冊 FontAwesome 組件
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
