<template>
  <div class="navbar" >
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name:'NavBar',
}
</script>
<style scoped>
.navbar{
  display: flex;
  line-height: 44px; 
  box-shadow: 0 2px 10px rgba(100, 100, 100, 0.1);
  height: 44px;
}
.left,.right{
  width: 60px;
}
.center{
  flex: 1;
  text-align: center;
}
</style>