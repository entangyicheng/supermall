<template>
<div class="cate-nav">
  <nav-bar class="nav">
    <div slot="center">商业分类</div>
  </nav-bar>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
 components: { NavBar },
name:'categorynavbar'
}
</script>
<style scoped>
.nav{
  background-color: var(--color-tint);
  color: white;
}
</style>