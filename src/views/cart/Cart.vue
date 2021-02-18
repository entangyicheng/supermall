<template>
 <div class="cart">
  <nav-bar class="nav-cart">
   <div slot="center" class="nav-center">购物车({{ cartCount }})</div>
  </nav-bar>
  <scroll class="content" ref="scroll">
    <cart-list></cart-list>
  </scroll>
  <cart-buttom-bar  class="cart-bar" ></cart-buttom-bar>
 </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import CartList from "./childcomps/CartList"
import CartButtomBar from './childcomps/CartButtomBar.vue';

export default {
 components: {
  NavBar,
  Scroll,
  CartList,
  CartButtomBar,
 
 },
 name: "Cart",
 computed: {
  cartCount() {
   return this.$store.state.cartList.length;
  },
 },
 activated(){
   this.$refs.scroll.refresh();
 }
};
</script>
<style scoped>
.cart{
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.nav-cart {
 background-color: var(--color-tint);
 height: 44px;
 position: relative;
 z-index: 9;
}
.content{
  height: calc(100% - 133px);
  /* overflow: hidden;
  height: 100%;
  position: absolute;
  top:44px;
  bottom: 49px;
  right: 0;
  left: 0; */
}
.cart-bar{
  position: fixed;
  bottom: 50px;
}
</style>