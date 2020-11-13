<template>
  <div class="app-view container">
    <transition name="fade">
      <keep-alive>
		    <router-view />
      </keep-alive>
    </transition>
		<loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import loading from 'components/loading.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {
    loading
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'showLoading'
    ])
  },
  mounted () {
  },
  methods: {
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
  }
  .iconfont{
    color: var(--main-color);
  }
</style>
