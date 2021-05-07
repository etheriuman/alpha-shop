import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // data
  state: {
    // 付費階段
    stage: 'address',
    // 購物車內容
    cart: [
      {
        productInfo: {
          name: '破壞補丁修身牛仔褲',
          price: 3999,
          img: 'https://i.imgur.com/GmYGOhn.png'
        },
        amount: 2
      },
      {
        productInfo: {
          name: '刷色直筒牛仔褲',
          price: 1299,
          img: 'https://i.imgur.com/MwNicmC.png'
        },
        amount: 1
      }
    ],
    // 運費
    remark: 0
  },
  // use state
  mutations: {
    changeRemarkOption(state, option) {
      state.remark = option
    }
  },
  actions: {

  },
  modules: {

  }
})