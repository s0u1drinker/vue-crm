const state = {
  navLinks: [
    {
      id: '1',
      moduleName: 'Main',
      title: 'Главная',
      quickAccess: true,
      icon: 'home'
    },
    {
      id: '2',
      moduleName: 'Events',
      title: 'Список мероприятий',
      quickAccess: true,
      icon: 'calendar'
    },
    {
      id: '3',
      moduleName: 'Phonebook',
      title: 'Телефонный справочник',
      quickAccess: true,
      icon: 'phonebook'
    }
  ]
}

const getters = {
  getNavLinks: state => {
    return state.navLinks
  },
  getQuickAccessLinks: state => {
    return state.navLinks.filter(link => link.quickAccess)
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
