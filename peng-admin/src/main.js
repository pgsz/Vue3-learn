import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'


window.onerror = function(e){
  console.log(['https://stackoverflow.com/search?q=[js]+'+e])
}

createApp(App).use(router).use(store).mount('#app')
