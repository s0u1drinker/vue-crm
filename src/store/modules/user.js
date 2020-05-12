const state = {
  user: {
    auth: false,
    name: '',
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
  },

  getUserAuth: state => {
    return state.user.auth
  }
}

const mutations = {
  addUserInfo (state, name) {
    state.user.auth = true
    state.user.name = name
  },
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
