<template>
<div class="CheckButtom" :class="{check:isChecked}">
  <img src="~assets/img/cart/tick.svg" alt="">
</div>
</template>
<script>
export default {
name:'checkButtom',
data(){
  return{
  }
},
props:{
  isChecked:{
    type:Boolean,
    default:false
  }
},
methods:{

}
}
</script>
<style scoped>
.CheckButtom {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #808080;
  display: flex;
}
.CheckButtom img{
  width: 18px;
  height: 18px;
}
.check{
  border: red;
  background-color: red;
}
</style>