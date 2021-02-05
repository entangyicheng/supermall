<template>
 <div class="tabBarItem" @click="itemClick">
  <div class="box">
   <div v-if="isActive"><slot name="item-icon"></slot></div>
   <div v-else><slot name="item-icon-active"></slot></div>
   <div :style="{ color: isColor }"><slot name="item-text"></slot></div>
  </div>
 </div>
</template>
<script>
export default {
 name: "TabBarItem",
 data() {
  return {
  //  isActive: true,
  };
 },
 props: {
  fontC: String,
  path:String
 },
 computed: {
  isColor() {
   if (this.isActive == false) {
    return this.fontC;
   }
  },
   isActive(){
    //  console.log(this.$route.path.indexOf(this.path));
     return this.$route.path.indexOf(this.path) ==-1
   }
 },
 methods:{
   itemClick(){
    //  console.log('itemClick');
    this.$router.replace(this.path).catch(err=>err);

   }
 }
};
</script>
<style scoped>
.tabBarItem {
 display: flex;
 flex: 1;
 text-align: center;
 height: 49px;
}
.box {
 width: 100%;
}
.tabBarItem img {
 width: 24px;
 height: 24px;
}
</style>