<template>
  <div class="address">
    <div class="main-container">
      <!-- menu -->
      <div class="menu-container">
        <Menu/>
      </div>
      <!-- title -->
      <h2 class="mt-5">結帳</h2>
      <!-- progress -->
      <div class="progress-container mt-5">
        <Progress/>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './../components/Menu.vue'
import Progress from './../components/Progress.vue'
// import Cart from './../components/Cart.vue'
// import Button from './../components/Button.vue'
// import Footer from './../components/Footer.vue'

export default {
  components: {
    Menu,
    Progress,
    // Cart,
    // Button,
    // Footer
  }
}
</script>
