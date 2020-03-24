const state = {
  user: {
    name: 'Иван Иванов',
    email: '',
    config: {
      pinNavigation: false
    }
  }
}

const getters = {
  getUsername: state => {
    return state.user.name
  },

  getUserConfig: state => {
    return state.user.config
  }
}

const mutations = {
  togglePinNavigation (state) {
    state.user.config.pinNavigation = !state.user.config.pinNavigation
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
