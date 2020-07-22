const state = {
  coreNavLinks: [
    {
      _id: '1',
      module_name: 'Main',
      title: 'Главная',
      quick_access: true,
      icon: 'home'
    },
    {
      _id: '2',
      module_name: 'Events',
      title: 'Список мероприятий',
      quick_access: true,
      icon: 'calendar'
    },
    {
      _id: '3',
      module_name: 'Phonebook',
      title: 'Телефонный справочник',
      quick_access: true,
      icon: 'phonebook'
    }
  ],
  userNavLinks: [],
  maxQuickAccessLinks: 3
}

const getters = {
  getNavLinks: state => {
    return state.userNavLinks
  },
  getQuickAccessLinks: state => {
    return state.userNavLinks.filter(item => +item.quick_access)
  }
}

const mutations = {
  updateNavLinks: (state, modules = false) => {
    state.userNavLinks = (modules && (modules.length > 0)) ? [...state.coreNavLinks, ...modules] : [...state.coreNavLinks]
  },
  updateQuickAccessLinks: (state, links) => {
    state.userNavLinks.forEach(item => {
      if (item._id !== '1') {
        item.quick_access = links.includes(item._id)
      }
    })
  },
  resetNavLinks: state => {
    state.coreNavLinks.forEach(item => {
      item.quick_access = true
    })

    state.userNavLinks = [...state.coreNavLinks]
  }
}

const actions = {
  setUserData: ({ commit }, userdata) => {
    commit('userLogIn', userdata.username)
    commit('updateNavLinks', userdata.modules)

    if ((userdata.settings) && (typeof userdata.settings.quick_access === 'object') && (userdata.settings.quick_access.length > 0)) {
      commit('updateQuickAccessLinks', userdata.settings.quick_access)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
