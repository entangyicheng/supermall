<template>
  <div class="goods-item" @click="detail">
      <img :src="imgsrc" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
name:'GoodsListItem',
props:{
  goodsitem:{
    type:Object,
    default(){
      return{}
    }
  }
},
computed:{
  imgsrc(){
    return this.goodsitem.image || this.goodsitem.show.img  
  }
},
methods:{
  imageLoad(){
    if(this.$route.path.indexOf('/home')!==-1){
    this.$bus.$emit('homeitemImageLoad')
    }else if(this.$route.path.indexOf('/detail')!==-1){
      this.$bus.$emit('detailImageLoad')
    }
  },
  detail(){
    this.$router.push('/detail/'+this.goodsitem.iid)
  },
  
}
}
</script>
<style scoped>
.goods-item{
  position: relative;
  padding-bottom: 30px;
  width: 48%;
  
}
.goods-item img{
  border-radius: 5px;
  width: 100%;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price{
  color: var(--color-high-text);
  margin-right:20px ;
}
.goods-info .collect{
  position: relative;
}
.goods-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>