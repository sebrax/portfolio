import { createApp } from 'vue'
import './style.css'
import i18n from './i18n'
import App from './App.vue'

import icons from './icons'

const app = createApp(App)

app.use(icons)

i18n(app).mount('#app')
