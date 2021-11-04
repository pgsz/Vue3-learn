<template>
  <div class="rate-wrap" :style="fontStyle">
    <div><slot></slot></div>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(i)" v-for="i in 5" :key="i">☆</span>
      <span class="hollow" :style="fontWidth">
        <span @click="onRate(i)" @mouseover="mouseOver(i)" v-for="i in 5" :key="i">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue'

let props = defineProps({
  // value: Number,
  modelValue: Number,
  theme: { type: String, default: 'orange' },
})

// let rate = computed(() => '★★★★★☆☆☆☆☆'.slice(5 - props.value, 10 - props.value))

const themeObj = {
  black: '#000',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
}

const fontStyle = computed(() => {
  return `color: ${themeObj[props.theme]}`
})

let width = ref(props.modelValue)

function mouseOver(i) {
  width.value = i
}

function mouseOut() {
  width.value = props.modelValue
}

const fontWidth = computed(() => `width : ${(width.value / 5) * 100}%`)

// 定义 emits
// let emits = defineEmits(['update-rate'])
let emits = defineEmits(['update:modelValue'])

function onRate(i) {
  // emits('update-rate', i)
  emits('update:modelValue', i)
}
</script>

<style scoped>
.rate-wrap {
  font-size: 36px;
}
.rate {
  position: relative;
  display: inline-block;
  overflow: hidden;
}
.rate > span.hollow {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  display: inline-block;
  overflow: hidden;
  text-align: left;
}
</style>
