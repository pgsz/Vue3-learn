<template>
  <main class="me-main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
export default {
  name: 'MeMain',
}
</script>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '@/style/mixin';
@include b(main) {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: hidden;
  padding: $--main-padding;
}
</style>
