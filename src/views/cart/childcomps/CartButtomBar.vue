<template>
 <div class="checkBar">
  <div class="check-content" @click="checkClick()">
   <check-buttom class="check-buttom" :isChecked="checkedAll" />
   <span>全选</span>
  </div>
  <span class="check-count">合计:{{totalPrice}}</span>
  <div class="check-account">去结算（{{checkedLength}}）</div>
 </div>
</template>
<script>
import CheckButtom from "components/content/checkButtom/CheckButtom.vue";
export default {
 components: { CheckButtom },
 name: "CartButtomBar",
 computed:{
   totalPrice(){
     return "￥"+this.$store.state.cartList.filter(item=>{
        return item.checked;
      }).reduce((preValue,item)=>{
        return preValue+item.count*item.price;
      },0).toFixed(2);
   },
   checkedLength(){
     return this.$store.state.cartList.filter(item=>{
       return item.checked
     }).length
   },
   checkedAll(){
     if(this.$store.state.cartList.length===0)return false
     return !this.$store.state.cartList.filter(item=>!item.checked).length
   }
 },
 methods:{
   checkClick(){
     if(this.checkedAll==true){
       this.$store.state.cartList.forEach(item => {
         item.checked=false
       })
     }
     else {
         this.$store.state.cartList.forEach(item => {
         item.checked=true
       })
       }
   }
 }
};
</script>
<style scoped>
.checkBar {
 height: 40px;
 width: 100%;
 background-color: #eee;
 line-height: 40px;
 display: flex;
 justify-content: space-between;
}
.check-content {
 display: flex;
 align-items: center;
}
.check-buttom {
 margin-left: 20px;
}
.check-count {
 width: 120px;
}
.check-account {
 width: 100px;
 height: 100%;
 background-color: orange;
 text-align: center;
 color: white;
}
</style>