<template>
  <div class="jsonp">
    <input type="text" v-model="keyWord" @keyup="getData" />
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyWord: '',
      list: [],
      timeId: null,
    }
  },
  methods: {
    getData() {
      if (this.keyWord === '') {
        this.list = []
        return
      }

      // 防抖
      if (this.timeId) clearTimeout(this.timeId)

      this.timeId = setTimeout(() => {
        let api = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${this.keyWord}`
        this.$fetchJsonp(api, {
          jsonpCallback: 'cb',
        })
          .then(response => {
            return response.json()
          })
          .then(data => {
            // console.log('parsed data', data.s)
            this.list = data.s
          })
          .catch(ex => {
            console.log('parsing failed', ex)
          })
      }, 200)
    },
  },
}
</script>
<style lang="scss" scoped>
ul {
  width: 500px;
  margin: 0 auto;
}
</style>
