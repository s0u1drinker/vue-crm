import Vue from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import AuthService from '@/services/AuthService'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  AuthService.check()
    .then((res) => {
      if (res.data.auth) {
        store.commit('userLogIn', res.data.username)
      }

      if ((to.meta.notAuth) && (store.getters.getUserAuth)) {
        // Если переход осуществляется авторизованным пользователем на страницу авторизации или регистрации
        router.push('/')
      }
    })
    .finally(() => {
      next()
    })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
