<template>
	<div class="login-page">
    <div class="content">
      <div class="c-r">
        <div class="logo">
          易阅卷
          <!-- <img src="../../../static/images/yyjlogo.png" alt=""> -->
        </div>
        <div class="form">
          <div class="row">
            <div class="input">
              <i class="iconfont icon-rentou"></i>
              <input type="text" placeholder="请输入账号" v-model="userName">
            </div>
          </div>
          <div class="row">
            <div class="input">
              <i class="iconfont icon-suotou-moren"></i>
              <input type="password" placeholder="请输入密码" v-model="password" @keyup.enter="login">
            </div>
          </div>
          <div class="row">
            <button class="login" @click="login">登录</button>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    getUrlParams (url) {
      let newHref = url || location.href
      let obj = {}
      if (!~newHref.indexOf('?')) {
        if (~newHref.indexOf('&')) {
          newHref = '?' + newHref
        } else {
          return obj
        }
      }
      let paramStr = newHref.split('?')[1]
      let paramArr = paramStr.split('&')
      for (let i = 0; i < paramArr.length; i++) {
        let param = paramArr[i].split('=')
        obj[param[0]] = unescape(param[1])
      }
      return obj
    },
    login () {
      this.$http('/user/login.jsmeb', {
        data: [this.userName, this.password],
        next: true
      }).then(res => {
        if (res && res.result && res.result.code * 1 === 0) {
          this.$router.push({name: 'index', params: {upDate: true}})
        }
      })
    }
  }
}
</script>
<style scoped>
	.login-page{
    display:flex;
    flex-direction:column;
    height:100vh;
    /* background:#2D9AD3 !important; */
    background: #fff;
    overflow:hidden;
  }
  .content{
    display:flex;
    position:relative;
    z-index:1;
    flex:1;
  }
  .content>div{
    flex:1;
  }
  .content .c-l{
    display:flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:20px;
  }
  .content .c-l img{
    width:calc(514 / 1920 * 100)vw;
  }
  .content .c-r{
    display:flex;
    /* justify-content: center;  */
    margin-top: 60px;
    vertical-align: text-bottom;
    align-items: center;
    flex-direction: column;
  }
  @supports (bottom: env(safe-area-inset-bottom)) {
    .content .c-r{
      margin-top: calc(60px + env(safe-area-inset-top));
    }
  }
  .logo{
    font-size: 24px;
    color:#333;
    display:flex;
    align-items: center;
    margin-bottom: 30px;
    font-weight: bold;
    color: #666;
  }
  .logo img{
    /* width:10vw; */
    margin-right:10px;
  }
  .form {
    width: 100%;
    padding: 0 30px;
  }
  .form .row{
    margin-bottom: var(--num-15px);
  }
  .form .input{
    /* width:70vw; */
    height:40px;
    position:relative;
    border-radius: 4px;
    flex: 1;
  }
  .input i{
    font-size: 14px;
    margin-right:10px;
    color: var(--main-color);
    position:absolute;
    left:12px;
    top:50%;
    transform:translate(0, -50%);
    color: #fff;
  }
  .input input{
    color: #999;
    background: #fff;
    border:0;
    border-radius: 40px;
    height: 100%;
    width: 100%;
    border: 1px solid #ddd;
    outline: none;
    padding-left:36px;
    font-size: 14px;
  }
  /* .input input::-webkit-input-placeholder {
    color: #fff;
  } */
  .input input:focus{
    border:1px solid var(--main-color);
  }
  .opts{
    display:flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .opts .remmenber{
    color:#999;
    display:flex;
    align-items: center;
  }
  .opts .remmenber input[type="checkbox"]{
    margin-right:6px;
  }
  .opts .forgot{
    color:var(--main-color);
    /*margin-right:30px;*/
  }
  .login{
    width:100%;
    height:40px;
    background: var(--main-color);
    border:0;
    color:#fff;
    border-radius: 100px;
    font-size: 16px;
    margin-top: 10px;
  }
  .row{
    font-size: 16px;
    display: flex;
    & label{
      width: 70px;
      color: #999;
      margin-right: 15px;
    }
  }
</style>
