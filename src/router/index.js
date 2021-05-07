import Vue from 'vue'
import VueRouter from 'vue-router'
import Address from './../views/Address.vue'

Vue.use(VueRouter)

const routes = [
  // root
  {
    path: '/',
    name: 'root',
    redirect: '/address'
  },
  // address
  {
    path: '/address',
    name: 'address',
    component: Address
  },
  // shipping
  {
    path: '/shipping',
    name: 'shipping',
    component: () => import('./../views/Shipping.vue')
  },
  // checkout
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('./../views/Checkout.vue')
  },
  // not found
  {
    name: 'not-found',
    path: '*',
    component: () => import('./../views/NotFound.vue')
  }
]