const state = {
  videoOwners: {}
}

const getters = {
  getVideoOwners: state => {
    return state.videoOwners
  }
}

const mutations = {
  setVideoOwners: (state, videoOwners) => {
    state.videoOwners = videoOwners
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
