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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMouse } from '../utils/mouse'

let { x, y } = useMouse()

let count = ref(1)
let color = ref('red')
function add() {
  count.value++
  color.value = Math.random() > 0.5 ? 'blue' : 'red'
}

let { title, todos, addTodo, clear, active, all, allDone } = useTodo()

function useTodo() {
  let title = ref('')
  let todos = ref([{ title: '学习', done: false }])

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
