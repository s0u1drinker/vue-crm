import Vue from 'vue'
import Vuex from 'vuex'
import events from './modules/events'
import navigation from './modules/navigation'
import adverts from './modules/adverts'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  },
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    events,
    navigation,
    adverts,
    user
  }
})
