<template>
  <div class="home">
    <h1>home 页面</h1>
    <Todolist></Todolist>
    <!-- <Rate :value="score" @update-rate="updateRate"></Rate> -->
    <Rate v-model="score">课程评分</Rate>
  </div>
</template>
<script setup>
import Todolist from '../components/Todolist.vue'
import Rate from '../components/Rate.vue'

import { ref } from 'vue'

let score = ref(3.5)

// function updateRate(i) {
//   score.value = i
// }
</script>
<style scoped>
.home {
  font-size: 20px;
}
</style>
