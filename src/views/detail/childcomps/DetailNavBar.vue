<template>
 <div>
  <nav-bar class="detail-nav">
   <div slot="left" class="back" @click="backClick">
     <img src="~assets/img/common/back.svg" alt="">
   </div>
   <div slot="center" class="center-detail">
    <span v-for="(item,index) in titles" :key="index" :class="{active:currentIndex==index}" @click="titleClick(index)">{{item}}</span>
   </div>
  </nav-bar>
 </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
 name: "DetailNavBar",
 data(){
   return{
     titles:['商品','参数','评论','推荐'],
     currentIndex:0
   }
 },
 components: {
  NavBar,
 },
 props:{
   
 },
 methods:{
   titleClick(index){
     this.currentIndex=index;
     this.$emit('titleClick',index)
   },
   backClick(){
     this.$router.go(-1);
   }
 }
};
</script>
<style scoped>
.detail-nav{
  position: relative;
  z-index: 100;
  background-color: #fff;
}
.center-detail{
  display: flex;
  font-size: 13px;
}
.center-detail span{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.back img{
  margin-top: 10px;
  margin-left: 10px;
}
</style>