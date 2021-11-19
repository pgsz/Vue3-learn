import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import fetchJsonp from 'fetch-jsonp'

// Element3
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'

// window.onerror = function(e){
//   console.log(['https://stackoverflow.com/search?q=[js]+'+e])
// }

const app = createApp(App).use(router).use(store)

app.use(Element3)

app.config.globalProperties.$fetchJsonp = fetchJsonp

app.mount('#app')
