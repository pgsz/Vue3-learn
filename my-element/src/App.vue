<template>
  <me-container>
    <me-header>Header</me-header>
    <me-main>Main</me-main>
    <me-footer>Footer</me-footer>
  </me-container>

  <hr />

  <me-container>
    <me-header>Header</me-header>
    <me-container>
      <me-aside width="200px">Aside</me-aside>
      <me-main>Main</me-main>
    </me-container>
  </me-container>

  <hr />

  <me-container>
    <me-aside width="200px">Aside</me-aside>
    <me-container>
      <me-header>Header</me-header>
      <me-main>Main</me-main>
      <me-footer>Footer</me-footer>
    </me-container>
  </me-container>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
hr {
  margin: 16px 0;
}
.me-header,
.me-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.me-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.me-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.me-container:nth-child(5) .me-aside,
.me-container:nth-child(6) .me-aside {
  line-height: 260px;
}

.me-container:nth-child(7) .me-aside {
  line-height: 320px;
}
</style>
