import Vue from 'vue'
import Vuex from 'vuex'
import events from './modules/events'
import navigation from './modules/navigation'
import adverts from './modules/adverts'
import user from './modules/user'
import organization from './modules/organization'
import phonebook from './modules/phonebook'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    monthsDeclension: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
  },
  getters: {
    getMonthsDeclension: state => {
      return state.monthsDeclension
    }
  },
  mutations: {},
  actions: {},

  modules: {
    events,
    navigation,
    adverts,
    user,
    organization,
    phonebook
  }
})
