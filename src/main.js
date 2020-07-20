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
    const check = await AuthService.login({ checkUser: true })

    if (check.data.err) {
      // Если проверка по какой-то причине не удалась
      // TODO: Ошибку необходимо записать в БД
    }

    if (check.data.auth) {
      // Если пользователь авторизован - запускаем соответствующую мутацию
      store.commit('userLogIn', check.data.username)
      store.commit('updateNavigation', check.data.modules)
    }
  }

  // Если переход осуществляется:
  // 1. Авторизованным пользователем на страницу авторизации или регистрации;
  // 2. Неавторизованным пользователем на страницу только для авторизованных пользователей.
  if (((to.meta.onlyAuth) && (!store.getters.getUserAuth)) || ((to.meta.notAuth) && (store.getters.getUserAuth))) {
    // Отправляем на главную
    next({
      name: 'Main'
    })
  } else {
    // Иначе далее по списку
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
