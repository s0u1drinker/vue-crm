const state = {
  adverts: []
}

const getters = {
  getAdverts: state => {
    return state.adverts
  }
}

const mutations = {
  setAdverts: (state, adverts) => {
    state.adverts = adverts
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
