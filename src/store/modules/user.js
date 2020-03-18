const state = {
  user: {
    name: 'Иван Иванов',
    email: ''
  }
}

const getters = {
  getUsername: state => {
    return state.user.name
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
