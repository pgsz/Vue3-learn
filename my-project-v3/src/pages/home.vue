<template>
  <div class="home">
    <header>
      <span>人脸识别应用管理系统</span>
    </header>
    <main>
      <ul class="content">
        <li v-for="(item, index) in menuList" :key="index" @click="goToDetail(item)" class="item">
          <!-- 避免超出8个 -->
          <img :src="bgLists[index % 8]" alt="" />
          <div class="item-text" :title="item.name">{{ item.name }}</div>
        </li>
      </ul>
    </main>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { getMenus } from '@/api/api.js'
import icon1 from '@/assets/icon/icon_1.png'
import icon2 from '@/assets/icon/icon_2.png'
import icon3 from '@/assets/icon/icon_3.png'
import icon4 from '@/assets/icon/icon_4.png'
import icon5 from '@/assets/icon/icon_5.png'
import icon6 from '@/assets/icon/icon_6.png'
import icon7 from '@/assets/icon/icon_7.png'
import icon8 from '@/assets/icon/icon_8.png'

const menuList = ref([])

const bgLists = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8]

onBeforeMount(() => {
  getMenu()
})

function getMenu() {
  getMenus().then(res => {
    menuList.value = res.data || []
  })
}

function goToDetail(item) {
  window.open(item.url)
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  header {
    width: 100%;
    height: 100px;
    text-align: center;
    font-size: 28px;
    line-height: 80px;
    color: #000;
  }
  main {
    width: 100%;
    height: calc(100% - 100px);
    overflow: auto;
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #535353;
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      background: #808080;
    }
    .content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .item {
      width: 134px;
      height: 134px;
      text-align: center;
      padding-top: 16px;
      cursor: pointer;
      border-radius: 2px;
      background: #f9f9f9;
      box-shadow: 0px 1px 2px #ccc;
      margin: 14px 16px 16px 0;
      transition: 0.3s;
      &:hover {
        box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
        background: #fff;
      }
      > img {
        width: 72px;
        height: 72px;
      }
      .item-text {
        width: 100%;
        padding: 0 8px;
        margin-top: 10px;
        color: #4c4c4c;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
      }
    }
  }
}
</style>
