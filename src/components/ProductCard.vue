<template>
  <div class="product-card d-flex justify-content-between">
    <div class="card-left d-flex">
      <div class="image">
        <img :src="product.productInfo.img" alt="product-image">
      </div>
      <div class="count d-flex flex-column">
        <p class="mb-3">{{ product.productInfo.name }}</p>
        <div class="amount d-flex justify-content-between">
          <p class="count-symbol">&#8722;</p>
          <p>{{ product.amount }}</p>
          <p class="count-symbol">&#43;</p>
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
  mixins: [priceCommaSetter]
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
  line-height: 26px;
}
</style>