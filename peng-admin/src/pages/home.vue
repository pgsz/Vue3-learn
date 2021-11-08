<template>
  <div class="home">
    <h1>home 页面</h1>
    <div class="box" :style="{ width: width + 'px', backgroundColor: backgroundColor }"></div>
    <transition name="fade">
      <h1 v-if="showTitle">你好</h1>
    </transition>
    <button @click="change">click {{ i }}</button>
    <Todolist></Todolist>
    <!-- <Rate :value="score" @update-rate="updateRate"></Rate> -->
    <Rate v-model="score">课程评分</Rate>
    <Count></Count>
  </div>
</template>
<script setup>
import Todolist from '../components/Todolist.vue'
import Rate from '../components/Rate.vue'
import Count from '../components/Count.vue'

import { ref } from 'vue'

let width = ref(100)
let backgroundColor = ref('red')
const colors = ['blue', 'yellow', 'black', 'green']
let i = ref(0)
let showTitle = ref(true)

function change() {
  width.value += 50
  i.value++
  backgroundColor.value = colors[i.value % 4]
  showTitle.value = !showTitle.value
}

let score = ref(3.5)

// function updateRate(i) {
//   score.value = i
// }
</script>
<style scoped>
.home {
  font-size: 20px;
}
.box {
  background-color: green;
  height: 100px;
  margin: 0 auto;
  transition: all 0.5s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
