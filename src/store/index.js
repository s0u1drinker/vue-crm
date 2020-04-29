import Vue from 'vue'
import Vuex from 'vuex'
import events from './modules/events'
import navigation from './modules/navigation'
import adverts from './modules/adverts'
import user from './modules/user'
import organization from './modules/organization'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    events,
    navigation,
    adverts,
    user,
    organization
  }
})
