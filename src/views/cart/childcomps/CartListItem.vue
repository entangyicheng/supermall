<template>
  <div class="cart-item">
    <div class="check-buttom" >
      <check-buttom  :isChecked="this.cartItem.checked" @click.native="checkClick()"></check-buttom>
    </div>
  <div class="item-img"> <img :src="cartItem.image" alt=""></div>
  <div class="item-info">
    <div class="item-title"><p>{{cartItem.title}}</p></div>
    <div class="item-desc"><p>{{cartItem.desc}}</p></div>
    <div class="item-n">
      <span class="item-price">￥{{cartItem.price}}</span>
      <span class="item-count">x{{cartItem.count}}</span>
    </div>
  </div>
  
</div>
</template>
<script>
import CheckButtom from 'components/content/checkButtom/CheckButtom.vue';
export default {
 components: { CheckButtom },
name:'CartListItem',
data(){
  return{
  }
},
props:{
  cartItem:{
    type:Object,
    default(){
      return {};
    }
  }
},
methods:{
 checkClick(){
   this.cartItem.checked=!this.cartItem.checked
 }
}
}
</script>
<style scoped>

.cart-item{
  display: flex;
  width: 100%;
  height: 120px;
  position: relative;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: rgb(235, 234, 234) solid 2px;
}
.check-buttom{
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img{
  height: 100%;
  float: right;
  width: 30%;
  margin-bottom: 10px;
}
img{
  height: 100%;
  border-radius: 10px;
}
.item-info{
  float: right;
  width: 60%;
}
.item-title{
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 25px;
}
.item-title p{
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item-desc p{
  width: 100%;
  white-space: nowrap;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 15px;
}
.item-n{
  font-size: 18px;
  margin-top: 20px;
}
.item-price{
  color: var(--color-high-text);
}
.item-count{
  float: right;
  margin-right: 10px;
}
</style>