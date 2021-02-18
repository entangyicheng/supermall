import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addcount(state,payload){
      payload.count+=1;
    },
    addToCart(state,payload){
      payload.checked=true
      state.cartList.push(payload);
    },
    
  },
  actions: {
    addCart(context,payload){
      // state.cartList.push(payload);
     return new Promise((resolve,reject)=>{
      let oldProduct=null;
      for(let item of context.state.cartList){
        if(item.iid===payload.iid){
          oldProduct=item;
        }
      }
      if(oldProduct){
        context.commit('addcount',oldProduct);
        resolve("添加商品成功!*"+oldProduct.count)
      }else{
        payload.count=1;
        context.commit('addToCart',payload);
        resolve("添加商品成功！")
      }
     })
    }
  },
  modules: {
  }
})
