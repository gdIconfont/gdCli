<template>
  <div class="page">
    {{name}}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name: '首页',
        userName: '10610ADM',
        userpwd: '67890'
      }
    },
    mounted () {
      this.login()
    },
    methods: {
      login () {
        return this.$http('/user/login', {
          data: [this.userName, this.userpwd]
        }).then(data => {
          return data
        })
      }
    }
  }
</script>
<style scoped>
  .page{
    font-size:32px;
  }
</style>