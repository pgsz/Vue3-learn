<template>
  <div class="count">
    <p @click="add">{{ count }}</p>
    <p @click="asyncAdd">异步 actions：{{ count }}</p>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { useStore } from '../store/gvuex'

let store = useStore()
let count = computed(() => store.state.count)
// let count = computed(() => store.getters.double)
// let count = computed(() => store.state.count * 2)

function add() {
  store.commit('add')
}

function asyncAdd() {
  store.dispatch('asyncAdd')
}
</script>
<style lang="scss" scoped>
.count {
  --color: red;
  p {
    color: var(--color)
  }
}
</style>
