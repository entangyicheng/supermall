<template>
 <div class="detail">
  <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
  <scroll class="content" ref="scroll" :probe-type="3"
   @scroll="contentScroll">
   <detai-swiper :topImages="topImage"></detai-swiper>
   <detail-base-info :goodsBaseInfo="goods"></detail-base-info>
   <detail-shop-info :shop="shop"></detail-shop-info>
   <detail-goods-info :detailInfo="detailInfo" @loadImgEvent="loadMore"></detail-goods-info>
   <detail-param :paramInfo="goodsParam" ref="params"></detail-param>
   <detail-comments :comment="commentInfo" ref="comment"></detail-comments>
   <goods-list :goods="recommend" ref="recommend"></goods-list>
  </scroll>
  <toast :message="toastMessage" :isShow="isShowMessage"></toast>
  <back-up @click.native="backClick" v-show="isShowBackTop"></back-up>
  <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
 </div>
</template>
<script>
import { getDetailData, goods,getRecommends, Shop,GoodsParam } from "network/detail.js";
import DetailNavBar from "./childcomps/DetailNavBar.vue";
import DetaiSwiper from "./childcomps/DetaiSwiper.vue";
import DetailBaseInfo from "./childcomps/DetailBaseInfo.vue";
import DetailShopInfo from "./childcomps/DetailShopInfo.vue";
import DetailGoodsInfo from './childcomps/DetailGoodsInfo.vue';
import DetailParam from './childcomps/DetailParam.vue';
import DetailComments from './childcomps/DetailComments.vue';
import DetailBottomBar from './childcomps/DetailBottomBar.vue';
import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from 'components/content/goods/GoodsList.vue';
import {debouce} from 'components/common/Utils/Utils.js'
import BackUp from 'components/common/backup/BackUp.vue';
import Toast from '../../components/common/toast/Toast.vue';
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
  DetailBottomBar,
  BackUp,
  Toast,
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
   currentIndex:0,
   isShowBackTop:false,
   toastMessage:'',
   isShowMessage:false
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
    if(data.rate.cRate!==0){
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
    // 0 ~13510 1
    // 13510~14509, 2
    // 14509~14842 3
    // 14842 4
    const length=this.themTop.length;
    const positionY= -position.y;
    // console.log(positionY);
    for(let i =0; i<length;i++){
      if((this.currentIndex !==i)&&((i<length-1 && positionY>=-this.themTop[i] && positionY<-this.themTop[i+1])||(i===length-1 &&positionY>=-this.themTop[i]))){
        this.currentIndex=i;
        // console.log(this.currentIndex);
        this.$refs.nav.currentIndex=this.currentIndex;
      }
    }
    this.isShowBackTop = -position.y > 650;
  },
  // detail-goods-info图片加载完毕
  loadMore(){
    this.$refs.scroll.refresh()
    //  获取每个主题的scrollTop
    this.themTop=[];
    this.themTop.push(0);
    this.themTop.push(-this.$refs.params.$el.offsetTop);
    this.themTop.push(-this.$refs.comment.$el.offsetTop);
    this.themTop.push(-this.$refs.recommend.$el.offsetTop);
    // console.log(this.themTop);
    
  },
  titleClick(index){
    this.$refs.scroll.scrollTo(0,this.themTop[index],500)
  },
  backClick(){
    this.$refs.scroll.scrollTo(0,0,100)
  },
  addCart(){
    // 获取购物车需要的信息
    const product={};
    product.iid=this.iid;
    product.image=this.topImage[0];
    product.title=this.goods.title;
    product.desc=this.goods.desc;
    product.price=this.goods.realPrice
    console.log(product);
    // 将信息传到vuex
    this.$store.dispatch("addCart",product).then(res=>{
      this.toastMessage=res;
      this.isShowMessage=true;
      setTimeout(() => {
        this.toastMessage='';
        this.isShowMessage=false;
      }, 1500);
    })
  }
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