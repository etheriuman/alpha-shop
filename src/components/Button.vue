<template>
  <div class="btn-wrapper w-100">
    <!-- prev button -->
    <div
    v-if="stage !== 'address'"
    class="btn prev d-flex justify-content-start align-items-center"
    @click.prevent.stop="prevOnclick"
    >
      <span class="prev-arrow">&#10141;</span>
      <p>上一步</p>
    </div>
    <!-- next button -->
    <div
    v-if="stage!== 'checkout'"
    class="btn next d-flex justify-content-center align-items-center"
    @click.prevent.stop="nextOnclick"
    >
      <p>下一步</p>
      <span class="next-arrow">&#10141;</span>
    </div>
    <!-- checkout button -->
    <button
    v-else
    type="button"
    class="btn check d-flex justify-content-center align-items-center"
    data-toggle="modal" data-target="#checkoutModal"
    @click="submitOnclick"
    >
      <p>確認下單</p>
    </button>
    <!-- Modal -->
    <div class="modal fade" id="checkoutModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content" ref="modalContent">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['stage', 'userData', 'shippingFee', 'totalPrice'])
  },
  methods: {
    prevOnclick() {
      if (this.$route.name === 'shipping') {
        this.$router.push('/address')
        return
      }
      if (this.$route.name === 'checkout') {
        this.$router.push('/shipping')
      }
    },
    nextOnclick() {
      if (this.$route.name === 'address') {
        this.$router.push('/shipping')
        return
      }
      if (this.$route.name === 'shipping') {
        this.$router.push('/checkout')
      }
    },
    submitOnclick() {
      const data = {
        ...this.userData,
        shippingFee: this.shippingFee,
        totalPrice: this.totalPrice
      }
      this.printModal()
      console.log(data)
    },
    printModal() {
      const modalContent = {
        ...this.userData,
        shippingFee: this.shippingFee,
        totalPrice: this.totalPrice
      }
      let rawHTML = ''
      Object.keys(modalContent).forEach(key => {
        rawHTML += `${key}: ${modalContent[key] || null},<br/>`
      })
      this.$refs.modalContent.innerHTML = rawHTML
    }
  }
}
</script>

<style scoped>
.btn-wrapper {
  position: relative;
  height: 72px;
}
.btn {
  position: absolute;
  width: 174px;
  height: 46px;
  border-radius: 8px;
  gap: 14px;
}
.prev {
  left: 0;
}
.next,
.check {
  right: 0;
  align-self: flex-end;
  background: #f67599;
  color: #ffffff;
}
.btn p {
  font-size: 12px;
}
.prev-arrow {
  display: block;
  transform: rotate(180deg);
}
.modal-content {
  padding: 24px;
  margin: 200px auto;
}
</style>