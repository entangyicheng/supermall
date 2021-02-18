<template>
<div id="category">
  <category-navbar class="cate-nav"></category-navbar>
 <div class="cate-content">
    <scroll class="content-left" ref="scroll1">
      <cate-control :cates="cate" ref="catecontrol" @whichindex="whichindex"></cate-control>
    </scroll>
    <scroll class="content-right" ref="scroll2">
      <cate-content :subcate="subcate" @imageLoad="imageLoad"></cate-content>
    </scroll>
 </div>
</div>
</template>
<script>
import {getCategory,getSubCategory} from "network/category.js"
import categoryNavbar from './childcomps/categoryNavbar.vue'
import CateControl from './childcomps/cateControl.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import CateContent from './childcomps/cateContent.vue'
export default {
 components: { categoryNavbar, CateControl, Scroll, CateContent, },
name:'Category',
data(){
  return{
    cate:[],
    currentIndex:0,
    maitKey:3627, 
    subcate:[],
  }
},
created(){
  this.Category();
  this.getSubCategory();
},
methods:{
  Category(){
    getCategory().then(res=>{
      const data =res.data.category;
      this.cate=data.list;
    })
  },
  getSubCategory(){
    getSubCategory(this.maitKey).then(res=>{
      // console.log(res);
      this.subcate=res.data.list;
      console.log(this.subcate);
    })
  },
  whichindex(index){
    this.currentIndex=index;
    this.maitKey=this.cate[this.currentIndex].maitKey;
    this.getSubCategory();
  },
  imageLoad(){
    this.$refs.scroll2.refresh();
  }
},
updated(){
  this.$refs.scroll1.refresh();
  this.$refs.scroll2.refresh();
}
}
</script>
<style scoped>
#category{
  width: 100%;
  height: 100vh;
  position: relative;
}
.cate-nav{
  height: 44px;
   position: relative;
  z-index: 9;
}
.cate-content{
  width: 100%;
  height: calc(100% - 93px);
  display: flex;
  overflow: hidden;
}
.content-left{
  width: 30%;
  /* height: calc(100% - 93px); */
  height: 100%;
}
.content-right{
  width: 70%;
  height: 100%;
  /* height: calc(100% - 93px); */
}
</style>