<template>
 <div v-if="Object.keys(goodsBaseInfo).length !== 0" class="DetailBaseInfo">
  <div class="info-title">{{ goodsBaseInfo.title }}</div>
  <div class="info-price">
   <span class="n-Price">{{ goodsBaseInfo.newPrice }}</span>
   <span class="o-price">{{ goodsBaseInfo.oldPrice }}</span>
   <span class="discount">{{ goodsBaseInfo.discount }}</span>
  </div>
  <div class="info-other">
   <span>{{ goodsBaseInfo.columns[0] }}</span>
   <span>{{ goodsBaseInfo.columns[1] }}</span>
   <span>{{
    goodsBaseInfo.services[goodsBaseInfo.services.length - 1].name
   }}</span>
  </div>
  <div class="info-service">
   <span v-for="index in goodsBaseInfo.services.length - 1" :key="index">
    <img :src="goodsBaseInfo.services[index - 1].icon" alt="" />
    <span class="serve-name">{{ goodsBaseInfo.services[index - 1].name }}</span>
   </span>
  </div>
 </div>
</template>
<script>
export default {
 name: "DetailBaseInfo",
 props: {
  goodsBaseInfo: {
   type: Object,
   default() {
    return {};
   },
  },
 },
};
</script>
<style scoped>
.DetailBaseInfo {
 padding: 8px;
}
.info-title {
 font-size: 0.768rem;
 font-weight: 550;
}
.info-price {
  margin: 0.42rem 0;
 position: relative;
}
.n-Price {
 color: var(--color-high-text);
  font-size: 0.85rem;
}
.o-price {
 color: var(--color-text);
 font-size: 0.512rem;
 text-decoration: line-through;
}
.discount {
 display: inline-block;
 border-radius: 8px;
 color: white;
 background-color: var(--color-high-text);
 font-size: 0.6rem;
 margin-left: 10px;
 padding: 0 3px 0 3px;
 position: absolute;
 top: 0;
}
.info-other {
 display: flex;
 justify-content: space-between;
 padding-bottom: 0.42rem;
 border-bottom: 0.042rem solid rgba(128, 128, 128, 0.3);
 /* 孩子span继承下面2个样式 */
 font-size: 0.6rem;
 color: gray;
}

.info-service {
 display: flex;
 font-size: 0.6rem;
 justify-content: space-between;
 padding: 0.85rem 0;
 border-bottom: 0.128rem solid rgba(128, 128, 128, 0.2);
}
.info-service span {
 flex: 1;
}
.info-service img {
 width: 0.512rem;
}
.serve-name {
 margin-top: -10px;
}
</style>