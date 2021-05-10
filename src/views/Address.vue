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
              寄送地址
            </h4>
            <!-- form row1 -->
            <div class="form-row d-flex justify-content-between flex-nowrap">
              <!-- appellation -->
              <div class="input-appellation form-group mb-3">
                <label for="appellation">稱謂</label>
                <select v-model="appellation" id="appellation" class="custom-select">
                  <option value="" selected disabled>請選擇稱謂</option>
                  <option value="mr">先生</option>
                  <option value="ms">小姐</option>
                </select>
              </div>
              <!-- name -->
              <div class="input-name mb-3">
                <label for="userName">姓名</label>
                <input v-model="userName" type="text" class="form-control" id="userName" placeholder="請輸入姓名" required>
              </div>
            </div>
            <!-- form row2 -->
            <div class="form-row d-flex justify-content-between flex-nowrap">
              <!-- tel -->
              <div class="input-tel mb-3">
                <label for="tel">電話</label>
                <input v-model="tel" type="text" class="form-control" id="tel" placeholder="請輸入行動電話" required>
              </div>
              <!-- email -->
              <div class="input-email mb-3">
                <label for="email">Email</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="請輸入電子郵件" required>
              </div>
            </div>
            <!-- form row3 -->
            <div class="form-row d-flex justify-content-between flex-nowrap">
              <!-- city -->
              <div class="input-city form-group mb-3">
                <label for="city">縣市</label>
                <select v-model="city" id="city" class="custom-select">
                  <option value="" disabled selected>請選擇縣市</option>
                  <option value="taipei">台北</option>
                  <option value="nantao">南投</option>
                </select>
              </div>
              <!-- address -->
              <div class="input-address mb-3">
                <label for="address">地址</label>
                <input v-model="address" type="text" class="form-control" id="address" placeholder="請輸入地址" required>
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
      appellation: 'mr',
      userName: '',
      tel: '',
      email: '',
      city: '',
      address: ''
    }
  },
  computed: {
    ...mapState(['userData'])
  },
  methods: {
    getData() {
      const { appellation, userName, tel, email, city, address } = this.userData
      this.appellation = appellation
      this.userName = userName
      this.tel = tel
      this.email = email
      this.city = city
      this.address = address
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
.custom-select {
  width: 160px;
  height: 38px;
  padding: .375rem .75rem;
  border: 1px solid #000000;
  border-radius: .25rem;
  margin-right: 30px;
}
.input-appellation {
  width: 160px;
  margin-right: 30px;
}
.input-name {
  width: 350px;
}
.input-tel {
  width: 255px;
  margin-right: 30px;
}
.input-email {
  width: 266px;
}
.input-city {
  width: 160px;
  margin-right: 30px
}
.input-address {
  width: 350px;
}
/* sep line */
.divider {
  background: #e6e6eb;
  height: 1px;
}
</style>
