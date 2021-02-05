<template>
 <div class="detail">
  <detail-nav-bar @titleClick="titleClick"></detail-nav-bar>
  <scroll class="content" ref="scroll" :probe-type="3"
   @scroll="contentScroll">
   <detai-swiper :topImages="topImage"></detai-swiper>
   <detail-base-info :goodsBaseInfo="goods"></detail-base-info>
   <detail-shop-info :shop="shop"></detail-shop-info>
   <detail-goods-info :detailInfo="detailInfo" @loadImgEvent="loadMore"></detail-goods-info>
   <detail-param :paramInfo="goodsParam" ref="params"></detail-param>
   <detail-comments :comment="commentInfo" ref="comment"></detail-comments>
   <goods-list :goods="recommend" ref="recommend">
   </goods-list>
  </scroll>
 </div>
</template>
<script>
import { getDetailData, goods,getRecommends, Shop,GoodsParam } from "network/detail.js";
import DetailNavBar from "./childcomps/DetailNavBar.vue";
import DetaiSwiper from "./childcomps/DetaiSwiper.vue";
import DetailBaseInfo from "./childcomps/DetailBaseInfo.vue";
import DetailShopInfo from "./childcomps/DetailShopInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailGoodsInfo from './childcomps/DetailGoodsInfo.vue';
import DetailParam from './childcomps/DetailParam.vue';
import DetailComments from './childcomps/DetailComments.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import {debouce} from 'components/common/Utils/Utils.js'
export default {
 components: {
  DetailNavBar,
  DetaiSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  Scroll,
  DetailGoodsInfo,
  DetailParam,
  DetailComments,
  GoodsList,
 },
 name: "Detail",
 data() {
  return {
   iid: null,
   topImage: [],
   goods: {},
   shop: {},
   detailInfo:{},
   goodsParam:{},
   commentInfo:{},
   recommend:[],
   themTop:[],
  };
 },
 created() {
  this.iid = this.$route.params.iid;
  this.getDetailData(this.iid);
  this.getRecommend();
 },
 mounted(){
   this.loadMore();
   const refresh = debouce(this.$refs.scroll.refresh, 50);
   this.$bus.$on('detailImageLoad',()=>{
     refresh();
   });
 },
 methods: {
  getDetailData(iid) {
   getDetailData(iid).then((res) => {
    const data = res.result;
    // 顶部轮播图图片 
    this.topImage = data.itemInfo.topImages;
    // 商品信息
    this.goods = new goods(data.itemInfo, data.columns, data.shopInfo.services);
    // 店铺信息
    this.shop = new Shop(data.shopInfo);
    // 商品详细数据
    this.detailInfo=data.detailInfo;
    // 商品参数
    this.goodsParam=new GoodsParam(data.itemParams.info,data.itemParams.rule);
    // 评论信息
    if(data.rate.list.length!==0){
      this.commentInfo=data.rate.list[0];
    }
   });
  },
  getRecommend(){
    getRecommends().then(res=>{
      // console.log(res);
      this.recommend=res.data.list;
      // console.log(this.recommend);
    })
  },
  contentScroll(position){
    const positionY= -position.y;
    for(let i =0; i<this.themTop.length;i++){
      if(positionY>this.themTop[i+1]){
        console.log(i);
  console.log(-position.y);
      }
    }
  },
  loadMore(){
    this.$refs.scroll.refresh()
    //  获取每个主题的scrollTop
    this.themTop=[];
    this.themTop.push(0);
    this.themTop.push(-this.$refs.params.$el.offsetTop);
    this.themTop.push(-this.$refs.comment.$el.offsetTop);
    this.themTop.push(-this.$refs.recommend.$el.offsetTop);
    console.log(this.themTop);
  },
  titleClick(index){
    this.$refs.scroll.scrollTo(0,this.themTop[index],500)
  },
  
 },
};
</script>
<style scoped>
.detail {
 position: relative;
 z-index: 99;
 background-color: white;
 height: 100vh;
}
.content{
  /* position: absolute;
  overflow: hidden;
  height: 100%;
  top:44px;
  left: 0;
  bottom: 0;
  right: 0; */
  height: calc(100% - 44px);
}
</style>