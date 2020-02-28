import Vue from 'vue'
import VueRouter from 'vue-router'
import { Plugin } from 'vue-fragment'
import Main from '../views/Main.vue'

Vue.use(VueRouter)
Vue.use(Plugin)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/phonebook',
    name: 'Phonebook',
    component: () => import('../views/Phonebook.vue')
  },
  {
    path: '*',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: '',
  linkExactActiveClass: 'navigation__link_active'
})

export default router
