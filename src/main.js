import Vue from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import AuthService from '@/services/AuthService'

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  // Если переход осуществлялся напрямую
  if (from.name === null) {
    // Проверяем авторизован ли пользователь
    const check = await AuthService.check()

    if (check.data.err) {
      // Если проверка по какой-то причине не удалась
      // TODO: Ошибку необходимо записать в БД
    }

    if (check.data.auth) {
      // Если пользователь авторизован - запускаем соответствующую мутацию
      store.commit('userLogIn', check.data.username)
    }
  }

  // Если переход осуществляется авторизованным пользователем на страницу авторизации или регистрации
  if ((to.meta.notAuth) && (store.getters.getUserAuth)) {
    router.push('/')
  }

  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
