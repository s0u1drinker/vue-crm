const state = {
  navLinks: [
    {
      id: '1',
      moduleName: 'Main',
      title: 'Главная',
      showMain: false,
      icon: 'home'
    },
    {
      id: '2',
      moduleName: 'Events',
      title: 'Список мероприятий',
      showMain: true,
      icon: 'calendar'
    },
    {
      id: '3',
      moduleName: 'Phonebook',
      title: 'Телефонный справочник',
      showMain: true,
      icon: 'phonebook'
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
