<template>
  <div class="progress-wrapper d-flex align-items-center">
    <!-- progress-address active -->
    <div v-if="stage === 'address'" class="progress-item progress-address d-flex">
      <div class="progress-item-number">
        1
      </div>
      <p>寄送地址</p>
    </div>
    <!-- progress-address complete -->
    <div v-else class="progress-item progress-address d-flex">
      <div class="progress-item-number number-complete">
        &#10003;
      </div>
      <p>寄送地址</p>
    </div>
    <!-- line 1 -->
    <div class="progress-line"></div>
    <!-- progress-shipping active -->
    <div v-if="stage === 'shipping'" class="progress-item progress-shipping d-flex">
      <div class="progress-item-number">
        2
      </div>
      <p>運送方式</p>
    </div>
    <!-- progress-shipping muted -->
    <div v-if="stage === 'address'" class="progress-item progress-shipping d-flex">
      <div class="progress-item-number number-muted">
        2
      </div>
      <p class="muted">運送方式</p>
    </div>
    <!-- progress-shipping complete -->
    <div v-if="stage === 'checkout'" class="progress-item progress-shipping d-flex">
      <div class="progress-item-number number-complete">
        &#10003;
      </div>
      <p>運送方式</p>
    </div>
    <!-- line 2 -->
    <div v-if="stage === 'checkout'" class="progress-line"></div>
    <!-- line 2 muted -->
    <div v-else class="progress-line line-muted"></div>
    <!-- progress-checkout active -->
    <div v-if="stage === 'checkout'" class="progress-item progress-checkout d-flex">
      <div class="progress-item-number">
        3
      </div>
      <p>付款資訊</p>
    </div>
    <!-- progress-checkout muted -->
    <div v-else class="progress-item progress-checkout d-flex">
      <div class="progress-item-number number-muted">
        3
      </div>
      <p class="muted">付款資訊</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['stage'])
  }
}
</script>

<style>
.progress-wrapper {
  height: 24px;
}
.progress-wrapper > * {
  margin-right: 32px;
}
.progress-item-number {
  width: 24px;
  height: 24px;
  border: 1px solid #000000;
  border-radius: 12px;
  text-align: center;
  margin-right: 8px;
  font-size: 12px;
  line-height: 24px;
}
.number-complete {
  background: #000000;
  color: #ffffff;
}
.number-muted {
  border: 1px solid #afb1bd;
  color: #afb1bd;
}
.muted {
  color: #afb1bd
}
.progress-line {
  width: 60px;
  height: 1px;
  background: #000000;
}
.line-muted {
  background: #afb1bd;
}
</style>