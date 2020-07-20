const state = {
  coreNavLinks: [
    {
      module_name: 'Main',
      title: 'Главная',
      quick_access: true,
      icon: 'home'
    },
    {
      module_name: 'Events',
      title: 'Список мероприятий',
      quick_access: true,
      icon: 'calendar'
    },
    {
      module_name: 'Phonebook',
      title: 'Телефонный справочник',
      quick_access: true,
      icon: 'phonebook'
    }
  ],
  userLinks: []
}

const getters = {
  getNavLinks: state => {
    return state.userLinks
  },
  getQuickAccessLinks: state => {
    const links = (state.userLinks.length) ? state.userLinks : state.coreNavLinks

    return links.filter(link => link.quick_access)
  }
}

const mutations = {
  updateNavigation: (state, modules) => {
    state.userLinks = state.coreNavLinks.concat(modules)
  },
  clearNavigation: (state) => {
    state.userLinks = []
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
