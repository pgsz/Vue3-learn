<template>
  <div class="todo-list">
    <h1 @click="add">{{ count }}</h1>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <span ref="trash" class="trash">🗑</span>
    <transition name="warm">
      <div class="info" v-if="isShowWarm">请输入</div>
    </transition>
    <div class="animate-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div
          class="animate"
          v-show="animate.show"
          :style="{ left: animateStyle.left + 'px', top: animateStyle.top + 'px' }"
        >
          📋
        </div>
      </transition>
    </div>
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
        <li v-for="(todo, i) in todos" :key="i">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <span @click="deleteList($event, i)" class="delete">××</span>
        </li>
      </transition-group>
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
import { ref, computed, watchEffect, reactive, onMounted } from 'vue'
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

let {
  title,
  isShowWarm,
  trash,
  todos,
  addTodo,
  animate,
  animateStyle,
  beforeEnter,
  enter,
  afterEnter,
  deleteList,
  clear,
  active,
  all,
  allDone,
} = useTodo()

function useTodo() {
  let isShowWarm = ref(false)
  let title = ref('')
  let todos = useStorage('todos')

  function addTodo() {
    if (!title.value) {
      isShowWarm.value = true
      setTimeout(() => {
        isShowWarm.value = false
      }, 2000)
      return
    }
    todos.value.push({
      title: title.value,
      done: false,
    })
    title.value = ''
  }

  function clear() {
    todos.value = todos.value.filter(v => !v.done)
  }

  let animate = reactive({
    show: false,
    el: null,
  })

  let animateStyle = reactive({
    left: 0,
    top: 0,
  })

  const trash = ref(null)
  onMounted(() => {
    let trashRect = trash.value.getBoundingClientRect()
    // console.log(trashRect)
    animateStyle.left = trashRect.left
    animateStyle.top = trashRect.top
  })

  function beforeEnter(el) {
    let dom = animate.el
    let rect = dom.getBoundingClientRect()
    let x = rect.left - animateStyle.left
    let y = rect.top - animateStyle.top
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  function enter(el, done) {
    document.body.offsetHeight
    el.style.transform = `translate(0,0)`
    el.addEventListener('transitionend', done)
  }
  function afterEnter(el) {
    animate.show = false
    el.style.display = 'none'
  }

  function deleteList(e, i) {
    animate.el = e.target
    animate.show = true
    todos.value.splice(i, 1)
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

  return {
    title,
    isShowWarm,
    trash,
    todos,
    animate,
    animateStyle,
    beforeEnter,
    enter,
    afterEnter,
    deleteList,
    addTodo,
    clear,
    active,
    all,
    allDone,
  }
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
.todo-list {
  overflow: hidden;
  position: relative;
  width: 500px;
  margin: 0 auto;
}
h1 {
  color: v-bind(color);
}
.info {
  width: 120px;
  margin: 0 auto;
  background-color: red;
  line-height: 30px;
}
.trash {
  font-size: 30px;
  position: absolute;
  top: 50px;
  right: 20px;
}
ul,
li {
  padding: 0;
}
.done {
  color: gray;
  text-decoration: line-through;
}
.animate-wrap .animate {
  position: fixed;
  z-index: 100;
  transition: all 0.5s linear;
}
.delete {
  color: red;
  font-size: 20px;
  cursor: pointer;
}
:global(.mouse) {
  color: blue;
}
.warm-enter-from,
.warm-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.warm-enter-active,
.warm-leave-active {
  transition: all 0.5s ease;
}

.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
