<template>
 <div id="home">
  <nav-bar class="home-nav">
   <div slot="center">购物街</div>
  </nav-bar>
  <tab-control
   :titles="['流行', '新款', '精选']"
   @tabClick="tabClick"
   ref="tabControl1"
   class="tabControl"
   v-show="tabFixed"
  />
  <scroll
   class="content"
   ref="scroll"
   :probe-type="3"
   @scroll="contentScroll"
   :pull-up-load="true"
   @pullingUp="loadMore"
  >
   <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
   <home-recommend :recommends="recommends" />
   <home-feature></home-feature>
   <tab-control
    :titles="['流行', '新款', '精选']"
    @tabClick="tabClick"
    ref="tabControl2"
   />
   <goods-list :goods="goods[currentIndex].list"></goods-list>
  </scroll>
  <back-up @click.native="backClick" v-show="isShowBackTop"></back-up>
 </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childcomps/HomeSwiper";
import HomeRecommend from "./childcomps/HomeRecommend";
import HomeFeature from "./childcomps/HomeFeature.vue";
import TabControl from "components/content/tabControl/tabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackUp from "components/common/backup/BackUp.vue";
import { debouce } from "components/common/Utils/Utils.js";
import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
 name: "Home",
 components: {
  NavBar,
  HomeSwiper,
  HomeRecommend,
  HomeFeature,
  TabControl,
  GoodsList,
  Scroll,
  BackUp,
 },
 data() {
  return {
   banners: [],
   recommends: [],
   goods: {
    pop: { page: 0, list: [] },
    new: { page: 0, list: [] },
    sell: { page: 0, list: [] },
   },
   currentIndex: "pop",
   isShowBackTop: false,
   tabOffsetTop: 0,
   tabFixed: false,
   saveY: 0,
  };
 },
 created() {
  // 请求多个数据
  this.getHomeMultidata();

  // 请求商品数据
  this.getHomeGoods("pop");
  this.getHomeGoods("new");
  this.getHomeGoods("sell");
 },
 mounted() {
  //监听item图片的加载
  const refresh = debouce(this.$refs.scroll.refresh, 50);
  this.$bus.$on("homeitemImageLoad", () => {
   // 防抖
   refresh();
  });
 },
 activated() {
   this.$refs.scroll.sc.scrollTo(0,this.saveY,0);
  //  刷新防止scroll卡顿
   this.$refs.scroll.refresh();
 },
 deactivated() {
   this.saveY=this.$refs.scroll.saveY();
 },
 methods: {
  /**
   * 网络请求
   */
  getHomeMultidata() {
   getHomeMultidata().then((res) => {
    this.banners = res.data.banner.list;
    // console.log(this.banners);
    this.recommends = res.data.recommend.list;
   });
  },
  getHomeGoods(type) {
   const page = this.goods[type].page + 1;
   getHomeGoods(type, page).then((res) => {
    this.goods[type].list.push(...res.data.list);
    // console.log(res);
    this.goods[type].page++;
    this.$refs.scroll.finishPullUp();
   });
  },
  /**
   * 事件监听
   */
  tabClick(index) {
   switch (index) {
    case 0:
     this.currentIndex = "pop";
     break;
    case 1:
     this.currentIndex = "new";
     break;
    case 2:
     this.currentIndex = "sell";
     break;
   }
   this.$refs.tabControl1.currentIndex = index;
   this.$refs.tabControl2.currentIndex = index;
  },
  backClick() {
   this.$refs.scroll.sc.scrollTo(0, 0, 500);
  },
  contentScroll(position) {
  //  console.log(position);
   this.isShowBackTop = -position.y > 650;
   this.tabFixed = -position.y > this.tabOffsetTop;
  },
  loadMore() {
   // console.log("上拉加载更多");
   this.getHomeGoods(this.currentIndex);
   // console.log(this.currentIndex);
   // console.log(this.goods['pop'].page);
  },
  swiperImageLoad() {
   this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
  },
 },
};
</script>
<style scoped>
#home {
 /* padding-top: 44px; */
 padding-bottom: 49px;
 height: 100vh;
 position: relative;
}
.home-nav {
 background-color: var(--color-tint);
 color: #fff;
 /* position: fixed;
 top: 0;
 left: 0;
 right: 0;
 z-index: 99; */
}
.content {
 overflow: hidden;
 height: 100%;
 position: absolute;
 top: 44px;
 bottom: 100px;
 right: 0;
 left: 0;
}
/* .fixed {
 position: fixed;
 right: 0;
 left: 0;
 margin-top: 44px;
 background-color: rgb(250, 247, 247);
} */
.tabControl {
 position: relative;
 background-color: rgb(250, 247, 247);
 z-index: 9;
}
</style>