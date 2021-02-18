<template>
 <div class="cart-list">
  <div v-for="(item, index) in this.$store.state.cartList" :key="index" >
   <cart-list-item :cart-item="item"></cart-list-item>
  </div>
 </div>
</template>
<script>
import CartListItem from "./CartListItem.vue";
export default {
 components: { CartListItem },
 name: "CartList",
 data(){
   return{}
 },

};
</script>
<style scoped>
</style>