<template>
  <div class="footer-wrapper d-flex justify-content-between">
    <div class="logo h-100 d-flex align-items-center">
      <img src="./../images/logo.png" alt="logo">
      <span class="extra-bold">ALPHA Shop</span>
    </div>
    <div class="service h-100 ">
      <h5>客戶服務</h5>
      <ul>
        <li>運送說明</li>
        <li>退換貨相關</li>
        <li>付款相關</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div class="about">
      <h5>關於我們</h5>
      <ul>
        <li>品牌故事</li>
        <li>媒體聯繫</li>
        <li>Press kit</li>
      </ul>
    </div>
    <div class="info">
      <h5>資訊</h5>
      <ul>
        <li>隱私權政策</li>
        <li>Cookie</li>
        <li>GDPR</li>
      </ul>
    </div>
    <div class="follow">
      <h5>追蹤 ALPHA Shop</h5>
      <ul>
        <li>
          +886 02123-45678
        </li>
        <li>
          <img src="./../images/icons/instagram.png" alt="contact-instagram">
          <img src="./../images/icons/facebook.png" alt="contact-facebook">
          <img src="./../images/icons/tel.png" alt="contact-tel">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.footer-wrapper {
  position: relative;
  padding: 64px 165px;
  background: #f6f7f8;
  height: 284px;
}
.logo img {
  margin-right: 10px;
}
h5 {
  margin-bottom: 24px;
}
ul li {
  color:#808080;
  line-height: 16px;
  margin-bottom: 8px
}
li img {
  margin-right: 16px;
}
</style>