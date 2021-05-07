<template>
  <div class="btn-wrapper w-100">
    <!-- prev button -->
    <div v-if="stage !== 'address'" class="btn prev d-flex justify-content-start align-items-center">
      <span class="prev-arrow">&#10141;</span>
      <p>上一步</p>
    </div>
    <!-- next button -->
    <div v-if="stage !== 'checkout'" class="btn next d-flex justify-content-center align-items-center">
      <p>下一步</p>
      <span class="next-arrow">&#10141;</span>
    </div>
    <!-- checkout button -->
    <div v-else class="btn check d-flex justify-content-center align-items-center">
      <p>確認下單</p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['stage'])
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
</style>