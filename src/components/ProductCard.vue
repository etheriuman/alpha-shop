<template>
  <div class="product-card d-flex justify-content-between">
    <div class="card-left d-flex">
      <div class="image">
        <img :src="product.productInfo.img" alt="product-image">
      </div>
      <div class="count d-flex flex-column">
        <p class="mb-3">{{ product.productInfo.name }}</p>
        <div v-if="product.amount" class="amount d-flex justify-content-between">
          <!-- minus 1 -->
          <p @click.prevent.stop="minusOne(product.productInfo.id)" class="count-symbol">&#8722;</p>
          <p>{{ product.amount }}</p>
          <!-- plus 1 -->
          <p @click.prevent.stop="plusOne(product.productInfo.id)" class="count-symbol">&#43;</p>
        </div>
        <div v-else class="remove-check d-flex">
          <button
          type="button"
          class="btn btn-sm btn-outline-dark noRemove"
          @click.prevent.stop="plusOne(product.productInfo.id)"
          >
          我後悔了
          </button>
          <button
          type="button"
          class="btn btn-sm btn-outline-danger remove"
          @click.prevent.stop="removeProduct(product.productInfo.id)"
          >
          刪除商品
          </button>
        </div>
      </div>
    </div>
    <div class="card-right bold">
      &#3647; {{ product.productInfo.price * product.amount | commaSetter }}
    </div>
  </div>
</template>

<script>
import { priceCommaSetter } from './../utils/mixins'

export default {
  props: {
    product: {
      type: Object,
      require: true
    }
  },
  mixins: [priceCommaSetter],
  methods: {
    minusOne(id) {
      const payLoad = {
        productId: id,
        amountChange: -1
      }
      this.$store.commit('setCart', payLoad)
    },
    plusOne(id) {
      const payLoad = {
        productId: id,
        amountChange: 1
      }
      this.$store.commit('setCart', payLoad)
    },
    removeProduct(id) {
      this.$store.commit('removeProduct', id)
    }
  }
}
</script>

<style scoped>
.product-card {
  margin-bottom: 34px;
}
.image {
  width: 100px;
  height: 100px;
  border-radius: 4px;
  margin-right: 20px;
}
.amount {
  width: 116px;
}
.count-symbol {
  width: 26px;
  height: 26px;
  background: #f0f0f5;
  border-radius: 13px;
  text-align: center;
  cursor: pointer;
}
.noRemove {
  margin-right: 10px;
}
</style>