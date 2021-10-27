## Vue3 学习笔记

### 环境

- Chrome 浏览器
- Vue 3
- VS Code 编辑器 + Volar
- vite

### 步骤

```shell
npm init @vitejs/app
```

Vue 负责核心，Vuex 负责管理数据， vue-router 负责管理路由

```shell
npm install vue-router@next vuex@next
```

```
.
├── README.md
├── index.html           入口文件
├── package.json
├── public               资源文件
│   └── favicon.ico
├── src                  源码
│   ├── App.vue          单文件组件
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   └── main.js          入口
└── vite.config.js    vite工程化配置文件
```

```
├── src
│   ├── api            数据请求
│   ├── assets         静态资源
│   ├── components     组件
│   ├── pages          页面
│   ├── router         路由配置
│   ├── store          vuex数据
│   └── utils          工具函数
```

![](./images/vue3-overview.png)

### 对比区别

#### router.js

```js
import { createRouter, createWebHashHistory } from 'vue-router'
// createRouter ： 新建路由事例
// createWebHashHistory : 配置内部使用 hash 模式的路由

const routes = []

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
```

#### mian.js

```js
import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount('#app')
```
