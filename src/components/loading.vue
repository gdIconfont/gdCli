<template>
  <div class="loading">
    <div class="loadEffect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading'
  }
</script>
<style scoped>
  .loading{
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:rgba(0,0,0,.09);
    z-index:9999;
  }
  .loadEffect{
    width: 50px;
    height: 50px;
    position: relative;
    margin: 0 auto;
    top:40%;
  }
  .loadEffect span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--main-color);
    position: absolute;
    animation: load 1.04s ease infinite;
    transform: scale(.5);
    opacity:.5;
  }
  .loadEffect span:first-child{
    transform: scale(1.2);
    opacity:1;
  }
  @keyframes load{
    0%{
      transform: scale(1.2);
      opacity: 1;
    }
    100%{
      transform: scale(.5);
      opacity: 0.5;
    }
  }
  .loadEffect span:nth-child(1){
    left: 0;
    top: calc(50% - 5px);
    animation-delay:0.13s;
  }
  .loadEffect span:nth-child(2){
    left: 14%;
    top: 14%;
    animation-delay:0.26s;
  }
  .loadEffect span:nth-child(3){
    left: calc(50% - 5px);
    top: 0;
    animation-delay:0.39s;
  }
  .loadEffect span:nth-child(4){
    top: 14%;
    right:14%;
    animation-delay:0.52s;
  }
  .loadEffect span:nth-child(5){
    right: 0;
    top: calc(50% - 5px);
    animation-delay:0.65s;
  }
  .loadEffect span:nth-child(6){
    right: 14%;
    bottom:14%;
    animation-delay:0.78s;
  }
  .loadEffect span:nth-child(7){
    bottom: 0;
    left: calc(50% - 5px);
    animation-delay:0.91s;
  }
  .loadEffect span:nth-child(8){
    bottom: 14%;
    left: 14%;
    animation-delay:1.04s;
  }
  </style>
