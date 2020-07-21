<template>
  <div class="nodata">
    <div class="ndpic">
      <img v-bind:src="imgSrc" width="100%" />
    </div>
    <p class="f-tac nodatatxt f-fs2">{{warntxt}}</p>
  </div>
</template>
<script>
export default {
  name: 'nodata',
  props: {
    warntxt: {
      type: String,
      default: '暂无数据'
    }
  },
  data () {
    return {
      imgSrc: 'static/image/nodata.png'
    }
  }
}
</script>
<style scoped>
  .nodata {
    margin-top: 50%;
  }

  .ndpic {
    width: 40%;
    margin: 0 auto 0 auto;
  }

  .nodatatxt {
    color: #999;
    margin-top: 15px;
  }
</style>
