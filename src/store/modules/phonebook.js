const state = {
  phonebook: {}
}

const getters = {
  getPhonebook: state => {
    return state.phonebook
  }
}

const mutations = {
  setPhonebook: (state, data) => {
    state.phonebook = data
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
