<template>
  <div class="address">
    <div class="main-container">
      <!-- menu -->
      <div class="menu-container mb-5">
        <Menu/>
      </div>
      <!-- title -->
      <h2 class="mb-5">結帳</h2>
      <!-- main content -->
      <div class="row main-content d-flex justify-content-between">
        <!-- content left -->
        <div class="content-left">
          <!-- progress -->
          <div class="progress-container mb-5">
            <Progress/>
          </div>
          <!-- form -->
          <form class="form w-100 mb-5">
            <h4 class="title mb-3">
              運送方式
            </h4>
            <!-- option standard -->
            <label
            for="standard"
            class="option d-flex justify-content-between"
            :class="{ 'option-active': option === 'standard' }"
            @click.stop="switchToStandard"
            >
              <div class="option-left form-check d-flex align-items-center">
                <input class="form-check-input" type="radio" name="gridRadios" id="standard" value="option1" checked>
                <div class="form-check-label">
                  <p>標準運送</p>
                  <p>約 3~7 個工作天</p>
                </div>
              </div>
              <div class="option-right">
                <p>免費</p>
              </div>
            </label>
            <!-- option DHL -->
            <label
            for="dhl"
            class="option d-flex justify-content-between"
            :class="{ 'option-active': option === 'dhl' }"
            @click.stop="switchToDHL"
            >
              <div class="option-left form-check d-flex align-items-center">
                <input class="form-check-input" type="radio" name="gridRadios" id="dhl" value="option1">
                <div class="form-check-label">
                  <p>DHL 貨運</p>
                  <p>約 3~7 個工作天</p>
                </div>
              </div>
              <div class="option-right">
                <p>&#3647; 500</p>
              </div>
            </label>
          </form>
          <!-- sep line -->
          <div class="divider w-100 mb-3"></div>
          <!-- button -->
          <div class="button-wrapper">
            <Button/>
          </div>
        </div>
        <!-- content right -->
        <div class="content-right">
          <Cart/>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer/>
  </div>
</template>

<script>
import Menu from './../components/Menu.vue'
import Progress from './../components/Progress.vue'
import Cart from './../components/Cart.vue'
import Button from './../components/Button.vue'
import Footer from './../components/Footer.vue'

export default {
  data() {
    return {
      option: 'standard'
    }
  },
  components: {
    Menu,
    Progress,
    Cart,
    Button,
    Footer
  },
  methods: {
    switchToStandard() {
      this.option = 'standard'
      this.$store.commit('changeRemarkOption', 0)
    },
    switchToDHL() {
      this.option = 'dhl'
      this.$store.commit('changeRemarkOption', 500)
    }
  }
}
</script>

<style scoped>
/* main-container */
.main-container {
  margin-bottom: 124px
}
/* content-left */
.content-left {
  width: 540px;
}
/* content-right */
.content-right {
  width: 440px;
}
/* form */
form {
  min-height: 300px;
}
.option {
  width: 435px;
  height: 60px;
  padding: 10px 20px;
  margin-bottom: 24px;
  border: 1px solid #f0f0f5;
  border-radius: 4px;
  cursor: pointer;
}
.option-active {
  border-color: #2a2a2a;
}
.form-check-input {
  margin-right: 20px;
}
/* sep line */
.divider {
  background: #e6e6eb;
  height: 1px;
}
</style>
