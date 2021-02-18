<template>
<div>
    <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcate">
      <div class="item" v-for="(item, index) in subcate" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" @load="imageLoad" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>
<script>
  import GridView from 'components/common/gridView/GridView'
export default {
name:'cateContent',
components: {
      GridView
    },
props:{
  subcate:{
    type:Array,
    default(){
      return[]
    }
  }
},
methods:{
  imageLoad(){
    this.$emit("imageLoad")
  }
}

}
</script>
<style scoped>
 .panel img {
    width: 100%;
  }
  .item {
    text-align: center;
    font-size: 12px;
  }
  .item-img {
    width: 80%;
  }
  .item-text {
    margin-top: 15px;
  }
</style>