<template>
  <header class="me-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script lang="ts">
export default {
  name: 'MeHeader',
}
</script>
<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  height?: string
}

withDefaults(defineProps<Props>(), {
  height: '60px',
})
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
@include b(header) {
  padding: $--header-padding;
  flex-shrink: 0;
}
</style>
