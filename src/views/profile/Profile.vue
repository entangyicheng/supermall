<template>
<div class="Profile">
  <nav-bar class="nav-profile">
    <div slot="center">我的档案</div>
  </nav-bar>
  <user-info></user-info>

  <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ListView from './childComps/ListView.vue'
import UserInfo from './childComps/UserInfo.vue'
export default {
 components: { NavBar,ListView,UserInfo },
name:'Profile',
data: function () {
		  return {
		    orderList: [
          {icon: require('@/assets/img/profile/message.svg'), info: '我的消息'},
          {icon: require('@/assets/img/profile/shopping.svg'), info: '积分商城'},
          {icon: require('@/assets/img/profile/vip.svg'), info: '会员卡'},
        ],
        serviceList: [
          {icon: require('@/assets/img/profile/cart.svg'), info: '我的购物车'},
          {icon: require('@/assets/img/profile/pointer.svg'), info: '下载购物APP'},
        ]
      }
    },
}
</script>
<style scoped>
.nav-profile{
  background-color: var(--color-tint);
  color: white;
}
.account {
    display: flex;
  }
  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }
  .account-item:last-of-type {
    margin-right: 0;
  }
  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }
  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }
  .account-info {
    margin-top: 6px;
  }
  .order-list, .service-list {
    margin-top: 12px;
  }
</style>