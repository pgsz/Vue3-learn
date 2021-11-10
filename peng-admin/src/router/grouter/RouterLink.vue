<template>
  <a :href="'#' + props.to">
    <slot></slot>
  </a>
</template>

<script setup>
let props = defineProps({
  to: { type: String, required: true },
})
</script>

<style lang="scss" scoped></style>
