<template>
  <div class="wrap w-100 d-flex justify-content-between align-items-center">
    <div class="menu h-100">
      <ul class="menu-wrapper d-flex justify-content-between">
        <li class="menu-item bold text-nowrap">男款</li>
        <li class="menu-item bold text-nowrap">女款</li>
        <li class="menu-item bold text-nowrap">最新消息</li>
        <li class="menu-item bold text-nowrap">客製商品</li>
        <li class="menu-item bold text-nowrap">聯絡我們</li>
      </ul>
    </div>
    <div class="logo">
      <img src="./../images/logo.png" alt="logo">
      <span class="extra-bold">ALPHA Shop</span>
    </div>
    <div class="icons">
      <ul class="icons-wrapper d-flex justify-content-between">
        <li class="icon">
          <img src="./../images/icons/search.png" alt="">
        </li>
        <li class="icon">
          <img src="./../images/icons/cart.png" alt="">
        </li>
        <li class="icon">
          <img src="./../images/icons/color.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.wrap {
  position: relative;
  width: 100%;
  height: 60px;
}
/* menu */
.menu-item {
  line-height: 60px;
  margin-right: 32px;
}
/* logo */
.logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  line-height: 30px;
}
.logo img {
  margin-right: 10px;
}
/* icons */
.icon {
  margin-left: 30px;
}

/* media query */
@media screen and (max-width: 1300px) {
.logo {
  display: none;
}
}
</style>