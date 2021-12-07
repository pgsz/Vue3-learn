import { createApp } from 'vue'
import App from './App.vue'

import MeComponents from './components'

const app = createApp(App)

app.use(MeComponents)

app.mount('#app')
