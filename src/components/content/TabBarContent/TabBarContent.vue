<template>
  <div>
    <keep-alive exclude="Detail"><router-view/></keep-alive>
    <tab-bar>
      <tab-bar-item fontC="#d81e06" path='/home'>
        <img slot="item-icon" src="~assets/img/TabBarImg/home .png" alt="" >
        <img slot="item-icon-active" src="~assets/img/TabBarImg/home-active.png" alt="">
        <div slot="item-text" >首页</div>
      </tab-bar-item>
      <tab-bar-item fontC="#d81e06" path='/category'>
        <img slot="item-icon" src="~assets/img/TabBarImg/Category.png" alt="" >
        <img slot="item-icon-active" src="~assets/img/TabBarImg/Category-active.png" alt="">
        <div slot="item-text" >分类</div>
      </tab-bar-item>
      <tab-bar-item fontC="#d81e06" path='/cart'>
        <img slot="item-icon" src="~assets/img/TabBarImg/cart.png" alt="">
        <img slot="item-icon-active" src="~assets/img/TabBarImg/cart-active.png" alt="">
        <div slot="item-text" >购物车</div>
      </tab-bar-item>
      <tab-bar-item fontC="#d81e06" path='/profile'>
        <img slot="item-icon" src="~assets/img/TabBarImg/Profile.png" alt="">
        <img slot="item-icon-active" src="~assets/img/TabBarImg/Profile-active.png" alt="">
        <div slot="item-text" >用户</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style>
</style>