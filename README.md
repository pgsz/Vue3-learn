# Vue3 学习笔记

## 环境

- Chrome 浏览器
- Vue 3
- VS Code 编辑器 + Volar
- vite

## 步骤

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

Vue 中用过三种响应式解决方案，分别是 defineProperty、Proxy 和 value setter

![](./images/vue-proxy.png)

## 对比区别

### router.js

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

### mian.js

```js
import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount('#app')
```

### ref 和 reactive 的区别

- reactive 和 ref 都是用来定义响应式数据的 reactive更推荐去定义复杂的数据类型 ref 更推荐定义基本类型
- ref 和 reactive 本质我们可以简单的理解为ref是对reactive的二次包装, ref定义的数据访问的时候要多一个.value
- 使用ref定义基本数据类型,ref也可以定义数组和对象。

### watch 和 watchEffect 的区别

watch:

1. 具有一定的惰性 lazy 第一次页面展示的时候不会执行，只有数据变化的时候才会执行；也可立即执行：immediate: true
2. 参数可以拿到当前值和原始值
3. 可以侦听多个数据的变化，用一个侦听起承载

watchEffect:

没有过多的参数 只有一个回调函数

1. 立即执行，没有惰性，页面的首次加载就会执行。
2. 自动检测内部代码，代码中有依赖 便会执行
3. 不需要传递要侦听的内容 会自动感知代码依赖，不需要传递很多参数，只要传递一个回调函数
4. 不能获取之前数据的值 只能获取当前值
5. 一些异步的操作放在这里会更加合适
