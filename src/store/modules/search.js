const state = {
  searchText: ''
}

const getters = {
  getSearchText: state => {
    return state.searchText
  }
}

const mutations = {
  setSearchText: (state, text) => {
    state.searchText = text
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
