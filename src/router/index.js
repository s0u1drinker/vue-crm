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
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/phonebook',
    name: 'Phonebook',
    component: () => import('../views/Phones.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      notAuth: true
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Reg.vue'),
    meta: {
      notAuth: true
    }
  },
  {
    path: '/registry',
    name: 'Registry',
    component: () => import('../views/Registry.vue'),
    meta: {
      onlyAuth: true
    }
  },
  {
    path: '/doc-management',
    name: 'DocManagement',
    component: () => import('../views/DocManagement.vue'),
    meta: {
      onlyAuth: true
    }
  },
  {
    path: '/stat',
    name: 'Stat',
    component: () => import('../views/Stat.vue'),
    meta: {
      onlyAuth: true
    }
  },
  {
    path: '/site',
    name: 'Site',
    component: () => import('../views/Site.vue'),
    meta: {
      onlyAuth: true
    }
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
