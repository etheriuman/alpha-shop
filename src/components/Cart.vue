<template>
  <div class="cart-wrapper d-flex flex-column card">
    <h5 class="title bold mb-3">
      購物籃
    </h5>
    <!-- products in cart -->
    <div class="product-wrapper">
      <ProductCard
      v-for="product in cart"
      :key="product.productInfo.name"
      :product="product"
      />
    </div>
    <!-- divider -->
    <div class="divider w-100 mb-3"></div>
    <!-- remark -->
    <div class="remark w-100 d-flex justify-content-between mb-3">
      <p>運費</p>
      <p class="bold">{{ remark }}</p>
    </div>
    <!-- divider -->
    <div class="divider w-100 mb-3"></div>
    <!-- total -->
    <div class="total w-100 d-flex justify-content-between mb-3">
      <p>小計</p>
      <p class="bold">&#3647; {{ total | commaSetter }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { priceCommaSetter } from './../utils/mixins'
import ProductCard from './../components/ProductCard.vue'

export default {
  data() {
    return {
      total: 0
    }
  },
  components: {
    ProductCard
  },
  computed: {
    ...mapState(['cart', 'remark'])
  },
  methods: {
    getCartTotal(cart) {
      let sum = 0
      cart.forEach(product => {
        sum += product.amount * product.productInfo.price
      })
      return sum
    },
    getAllTotal(cart, remark) {
      return this.getCartTotal(cart) + remark
    }
  },
  mixins: [priceCommaSetter],
  mounted() {
    this.total = this.getAllTotal(this.cart, this.remark)
  },
  watch: {
    cart(data) {
      this.total = this.getAllTotal(data, this.remark)
    },
    remark(data) {
      this.total = this.getAllTotal(this.cart, data)
    }
  }
}
</script>

<style scoped>
.cart-wrapper {
  padding: 32px 24px;
}
.divider {
  background: #f0f0f5;
  height: 1px;
}
</style>