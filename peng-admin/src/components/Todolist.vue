<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      <span>全选</span>
      <input type="checkbox" v-model="allDone" />
      <span>{{ active }} / {{ all }}</span>
    </div>
    <div class="mouse">x: {{ x }} --- y: {{ y }}</div>
    <button @click="loading">改变图标</button>
    <button @click="toggle">切换全屏</button>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useMouse } from '../utils/mouse'
import { useStorage } from '../utils/useStorage'
import useFavicon from '../utils/useFavicon'
import { useFullscreen } from '@vueuse/core'

let { x, y } = useMouse()

let count = ref(1)
let color = ref('red')
function add() {
  count.value++
  color.value = Math.random() > 0.5 ? 'blue' : 'red'
}
// watchEffect(() => {
//   console.log('数据被修改了', count.value)
// })

// let obj = ref({
//   count: 1
// })
// let double = computed(() => obj.count * 2)

// obj.count = 2

// watchEffect(() => {
//   console.log('数据被修改了', obj.count, double.value)
// })

let { title, todos, addTodo, clear, active, all, allDone } = useTodo()

function useTodo() {
  let title = ref('')
  let todos = useStorage('todos')

  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    })
    title.value = ''
  }

  function clear() {
    todos.value = todos.value.filter(v => !v.done)
  }

  let active = computed(() => {
    return todos.value.filter(v => !v.done).length
  })
  let all = computed(() => {
    return todos.value.length
  })
  let allDone = computed({
    get: function () {
      return active.value === 0
    },
    set: function (value) {
      todos.value.forEach(todo => {
        todo.done = value
      })
    },
  })

  return { title, todos, addTodo, clear, active, all, allDone }
}

let { favicon, reset } = useFavicon()
function loading() {
  favicon.value = '/loading.png'
  setTimeout(() => {
    reset()
  }, 2000)
}

const { toggle } = useFullscreen()
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
.done {
  color: gray;
  text-decoration: line-through;
}
:global(.mouse) {
  color: blue;
}
</style>
