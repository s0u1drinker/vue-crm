const state = {
  navLinks: [
    {
      id: '1',
      moduleName: 'Main',
      title: 'Главная',
      showMain: false
    },
    {
      id: '2',
      moduleName: 'Events',
      title: 'Список мероприятий',
      showMain: true
    },
    {
      id: '3',
      moduleName: 'Phonebook',
      title: 'Телефонный справочник',
      showMain: true
    }
  ]
}

const getters = {
  getNavLinks: state => {
    return state.navLinks
  },
  getInfoPanelLinks: state => {
    return state.navLinks.filter(link => link.showMain)
  }
}

const mutations = {}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
