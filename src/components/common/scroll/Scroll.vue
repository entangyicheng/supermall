<template>
 <div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
 </div>
</template>
<script>
import Scroll from 'better-scroll'
export default {
name:'Scroll',
data(){
  return{
    sc:null
  }
},
props:{
  probeType:{
    type:Number,
    default:0
  },
  pullUpLoad:{
    type:Boolean,
    default:false
  }
},
mounted(){
  this.sc =new Scroll(this.$refs.wrapper,{
    click:true,
    probeType:this.probeType,
    pullUpLoad:this.pullUpLoad
  });
  // this.sc.scrollTo(0,0);
  this.sc.on('scroll',(position)=>{
    this.$emit('scroll',position)
  });
  this.sc.on('pullingUp',()=>{
    this.$emit('pullingUp')
  })
},
methods:{
  scrollTo(x,y,time){
    this.sc.scrollTo(x,y,time);
  },
  finishPullUp(){
    this.sc.finishPullUp();
  },
  refresh(){
    this.sc.refresh();
  },
  saveY(){
    return this.sc?this.sc.y:0;
  }
}
}
</script>
<style scoped>
</style>