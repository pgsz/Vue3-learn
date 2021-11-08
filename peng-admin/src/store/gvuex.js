import { inject, reactive } from 'vue'

const STORE_KEY = '__store__'

function useStore() {
  return inject(STORE_KEY)
}
function createStore(options) {
  return new Store(options)
}
class Store {
  constructor(options) {
    // 将数据响应式处理
    this.__state = reactive({
      // data: options.state,
      data: options.state(),
    })
    this._mutations = options.mutations
  }
  get state() {
    return this.__state.data
  }
  commit = (type, payload) => {
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }
  // main.js 入口处 app.use(store) 的时候，会执行这个函数
  install(app) {
    app.provide(STORE_KEY, this)
  }
}

export { createStore, useStore }
