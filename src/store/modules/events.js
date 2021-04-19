const state = {
  events: {}
}

const getters = {
  getEvents: state => {
    return state.events
  }
}

const mutations = {
  setEvents: (state, events) => {
    state.events = events
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
