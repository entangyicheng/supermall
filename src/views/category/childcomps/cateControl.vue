<template>
<div class="cate-control">
  <div v-for="(item,index) in cates" :key="index" class="cate-item" @click="controlClick(index)" :class="{curr:currentIndex==index}">
    {{item.title}}
  </div>
</div>
</template>
<script>
export default {
name:'App',
data(){
  return{
    currentIndex:0
  }
},
props:{
  cates:Array,
  default(){
    return[]
  }
},
methods:{
  controlClick(index){
    this.currentIndex=index;
    this.$emit("whichindex",index)
  }
}
}
</script>
<style scoped>
.cate-control{
  width: 100%;
  display: flex;
  flex-direction:column;
  /* margin-top: 10px; */
  background-color: #f6f6f6;
}
.cate-item{
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.curr{
  color: var(--color-high-text);
  border-left: 2px var(--color-tint) solid;
  background-color: white;
}
</style>