import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 按需加载
import { setupElementPlus } from './plugins/element-plus'

const app = createApp(App)

setupElementPlus(app)

app.use(router).use(store).mount('#app')
