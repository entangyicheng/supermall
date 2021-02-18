<template>
 <div class="bottom-bar">
  <div class="bottom-bar-left">
   <center class="text">
    <i class="service"></i>
    <span>客服</span>
   </center>
   <center class="text">
    <i class="shop"></i>
    <span>店铺</span>
   </center>
   <center class="text">
    <i class="select"></i>
    <span>收藏</span>
   </center>
  </div>
  <div class="bottom-bar-right">
   <div class="cart" @click="addtoCart">
     加入购物车
     </div>
   <div class="buy">购买</div>
  </div>
 </div>
</template>
<script>
export default {
 name: "DetailBottomBar",
 methods:{
   addtoCart(){
     this.$emit("addCart")
   }
 }
};
</script>
<style scoped>
.bottom-bar {
 position: fixed;
 background-color: #fff;
 width: 100%;
 height: 49px;
 bottom: 0px;
 display: flex;
 font-size: 14px;
}
.bottom-bar div {
 flex: 1;
 display: flex;
}
.text {
 flex: 1;
 text-align: center;
 margin-top: 2px;
}
i {
 width: 22px;
 height: 22px;
 background: url("~assets/img/detail/detail_bottom.png") 0 0;
 background-size: 100%;
 margin: auto;
 display: block;
}
.text span {
 display: block;
 margin: auto;
 width: 44px;
 height: 22px;
}
.shop {
 background-position: 0 -53px;
}
.select {
 background-position: 0 -98px;
}
.bottom-bar-right div{
  font-size: 16px;
  line-height: 44px;
  flex: 1;
  align-items:center;
  justify-content:center;
}
.cart{
  background-color: rgb(255, 174, 0);
}
.buy{
  background-color: var(--color-tint);
  color: white;
  
}
</style>