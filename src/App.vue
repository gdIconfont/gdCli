<template>
  <div class="app-view">
		<keep-alive>
      <transition name="fade">
        <router-view />
      </transition>
		</keep-alive>
		<loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import loading from 'components/loading.vue'
export default {
  name: 'app',
  components: {
    loading
  },
  data () {
    return {
      showLoading: false
    }
  },
  mounted () {

  },
  methods: {

  },
  watch: {
    '$store.state.showLoading' () {
      this.showLoading = this.$store.state.showLoading
    }
  }
}
</script>
<style>
  .app-view{
    color:#666;
  }
  .cube-loading{
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content: center;
    background:rgba(0, 0, 0, .1);
  }
</style>
