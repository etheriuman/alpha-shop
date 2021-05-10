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
              付款資訊
            </h4>
            <!-- form row1 -->
            <div class="form-row d-flex justify-content-between flex-nowrap">
              <!-- name -->
              <div class="input-name mb-3">
                <label for="ccname">持卡人姓名</label>
                <input
                type="text"
                class="form-control"
                id="ccname"
                placeholder="John Doe"
                required
                v-model="ccName"
                >
              </div>
            </div>
            <!-- form row2 -->
            <div class="form-row d-flex justify-content-between flex-nowrap">
              <!-- number -->
              <div class="input-number mb-3">
                <label for="number">卡號</label>
                <input
                type="text"
                class="form-control"
                id="number"
                placeholder="1111 2222 3333 4444"
                required
                v-model="number"
                >
              </div>
            </div>
            <!-- form row3 -->
            <div class="form-row d-flex justify-content-between flex-nowrap">
              <!-- expired -->
              <div class="input-expired mb-3">
                <label for="expired">有效期限</label>
                <input
                type="text"
                class="form-control"
                id="expired"
                placeholder="MM/YY"
                required
                v-model="expired"
                >
              </div>
              <!-- code -->
              <div class="input-code mb-3">
                <label for="code">CVC/CCV</label>
                <input
                type="text"
                class="form-control"
                id="code"
                placeholder="123"
                required
                v-model="code"
                >
              </div>
            </div>
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
import { mapState } from 'vuex'

export default {
  components: {
    Menu,
    Progress,
    Cart,
    Button,
    Footer
  },
  data() {
    return {
      ccName: '',
      number: '',
      expired: '',
      code: ''
    }
  },
  computed: {
    ...mapState(['userData'])
  },
  methods: {
    getData() {
      const { ccName, number, expired, code } = this.userData
      this.ccName = ccName
      this.number = number
      this.expired = expired
      this.code = code
    }
  },
  created() {
    this.$store.commit('setStage', this.$route.name)
    this.getData()
  },
  updated() {
    this.$store.commit('setUserData', this.$data)
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
label {
  font-size: 12px;
  color: #808080;
  margin-bottom: 8px;
}
.input-name {
  width: 350px;
}
.input-number {
  width: 350px;
}
.input-expired {
  width: 255px;
  margin-right: 30px;
}
.input-code {
  width: 255px;
}
/* sep line */
.divider {
  background: #e6e6eb;
  height: 1px;
}
</style>
