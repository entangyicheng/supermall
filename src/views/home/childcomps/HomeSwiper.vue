<template>
  <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt=""  @load="imgaeLoad">
        </a>
      </swiper-item>
    </swiper>
</template>
<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index.js'
export default {
  name:'HomeSwiper',
  components:{
    Swiper, 
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad:true
    }
  },
  methods:{
    imgaeLoad(){
      if(this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad=false;
      }
      
    }
  }
}
</script>