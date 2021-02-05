<template>
 <div id="tabBar">
   <slot></slot>
 </div>
</template>
<script>

export default {
 name: "TabBar",
 
};
</script>
<style scoped>
#tabBar {
  display: flex;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 10px rgba(100, 100, 100, 0.2);
}
</style>