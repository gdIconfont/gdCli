<template>
  <div class="app-view container">
    <transition name="fade">
      <keep-alive :exclude="['createKs', 'ksIndex', 'testDetail']">
		    <router-view />
      </keep-alive>
    </transition>
		<loading v-show="$store.state.showLoading"></loading>
  </div>
</template>

<script>
import loading from 'components/loading.vue'
import FastClick from 'fastclick'
export default {
  name: 'app',
  components: {
    loading
  },
  data () {
    return {
    }
  },
  mounted () {
    FastClick.attach(document.body)
  },
  methods: {
    getKsLx () {
      console.log('--getKsLx--', this.$store)
    }
  }
}
</script>
<style>
  @font-face {
    font-family: 'iconfont';  /* project id 1931383 */
    src: url('//at.alicdn.com/t/font_1931383_p9t1zx2e6rr.eot');
    src: url('//at.alicdn.com/t/font_1931383_p9t1zx2e6rr.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1931383_p9t1zx2e6rr.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1931383_p9t1zx2e6rr.woff') format('woff'),
    url('//at.alicdn.com/t/font_1931383_p9t1zx2e6rr.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1931383_p9t1zx2e6rr.svg#iconfont') format('svg');
  }
  body{
    background: #efefef;
    font-size: 14px;
  }
  .container {
    /* width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom); */
  }
  .iconfont{
    color: var(--main-color);
  }
  .app-view{
    color:#666;
    /* -webkit-overflow-scrolling: touch; */
  }
  .van-tabs__line{
    background: var(--main-color);
  }
  .van-tab--active{
    color: var(--main-color);
  }
  .footOpt{
    position: fixed;
    bottom: 0;
    width: 100%;
    /* height: calc(58px + env(safe-area-inset-bottom));
    height: calc(58px + constant(safe-area-inset-bottom)); */
    box-shadow: 0 0 10px #888;
    background: #fff;
    padding: 6px 15px;
    z-index: 1;
  }
  .footOpt button{
    width: 100%;
  }
</style>
