import Vue from 'vue'
import VueRouter from 'vue-router'
import Address from './../views/Address.vue'

Vue.use(VueRouter)

const routes = [
  // root
  {
    name: 'root',
    path: '/',
    redirect: '/address'
  },
  // address
  {
    name: 'address',
    path: '/address',
    component: Address
  },
  // shipping
  {
    name: 'shipping',
    path: '/shipping',
    component: () => import('./../views/Shipping.vue')
  },
  // checkout
  {
    name: 'checkout',
    path: '/checkout',
    component: () => import('./../views/Checkout.vue')
  },
  // not found
  {
    name: 'not-found',
    path: '*',
    component: () => import('./../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router