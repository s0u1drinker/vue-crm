import Vue from 'vue'
import Vuex from 'vuex'
import events from './modules/events'
import navigation from './modules/navigation'
import adverts from './modules/adverts'
import user from './modules/user'
import organization from './modules/organization'
import phonebook from './modules/phonebook'
import search from './modules/search'
import video from './modules/video'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    monthsDeclension: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    filesIcons: {
      rar: 'winrar',
      zip: 'winrar',
      pdf: 'acrobat',
      doc: 'word',
      docx: 'word',
      xls: 'excel',
      xlsx: 'excel',
      ppt: 'powerpoint',
      pptx: 'powerpoint'
    },
    fileServerIP: 'localhost:8081'
  },
  getters: {
    getMonthsDeclension: state => {
      return state.monthsDeclension
    },
    getFilesIcons: state => {
      return state.filesIcons
    },
    getFileServerIP: state => {
      return state.fileServerIP
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
    phonebook,
    search,
    video
  }
})
