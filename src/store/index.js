import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // data
  state: {
    // 付費階段
    stage: 'address',
    // 使用者付款資訊
    userData: {
        appellation: '',
        userName: '',
        tel: '',
        email: '',
        city: '',
        address: '',
        ccName: '',
        number: '',
        expired: '',
        code: ''
    },
    // 購物車內容
    cart: [
      {
        productInfo: {
          id: 0,
          name: '破壞補丁修身牛仔褲',
          price: 3999,
          img: 'https://i.imgur.com/GmYGOhn.png'
        },
        amount: 2
      },
      {
        productInfo: {
          id: 1,
          name: '刷色直筒牛仔褲',
          price: 1299,
          img: 'https://i.imgur.com/MwNicmC.png'
        },
        amount: 1
      }
    ],
    // 運費
    shippingFee: 0,
    totalPrice: 9297
  },
  // use state
  mutations: {
    getStorageData(state, storageData) {
      const { appellation, userName, tel, email, city, address, ccName, number, expired, code } = storageData
      state.userData = {
        ...state.userData,
        appellation,
        userName,
        tel,
        email,
        city,
        address,
        ccName,
        number,
        expired,
        code
      }
      state.shippingFee = storageData.shippingFee
      state.totalPrice = storageData.totalPrice
    },
    setStage(state, stage) {
      state.stage = stage
    },
    setShippingFee(state, price) {
      state.shippingFee = price
      const storageData = {
        ...state.userData,
        totalPrice: state.totalPrice,
        shippingFee: state.shippingFee
      }
      localStorage.setItem('userData', JSON.stringify(storageData))
    },
    setUserData(state, data) {
      state.userData = {
        ...state.userData,
        ...data
      }
      const storageData = {
        ...state.userData,
        totalPrice: state.totalPrice,
        shippingFee: state.shippingFee
      }
      localStorage.setItem('userData', JSON.stringify(storageData))
    },
    setCart(state, payLoad) {
      const { productId, amountChange } = payLoad
      state.cart = state.cart.map(product => {
        if (product.productInfo.id === productId) {
          return {
            ...product,
            amount: product.amount + amountChange
          }
        }
        return product
      })
    },
    removeProduct(state, productId) {
      state.cart = state.cart.filter(product => 
        product.productInfo.id !== productId
      )
    },
    setTotalPrice(state, price) {
      state.totalPrice = price
      const storageData = {
        ...state.userData,
        totalPrice: state.totalPrice,
        shippingFee: state.shippingFee
      }
      localStorage.setItem('userData', JSON.stringify(storageData))
    }
  },
  actions: {
  },
  modules: {
  }
})