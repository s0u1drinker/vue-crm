import Vue from 'vue'
import Vuex from 'vuex'
import events from './modules/events'
import infoPanel from './modules/infoPanel'
import adverts from './modules/adverts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    events,
    infoPanel,
    adverts
  }
})
