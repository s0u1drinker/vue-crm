const state = {
  positions: [],
  departments: []
}

const getters = {
  getPositions: state => {
    return state.positions
  },
  getDepartments: state => {
    return state.departments
  }
}

const mutations = {
  setPositions: (state, positions) => {
    state.positions = positions
  },
  setDepartments: (state, departments) => {
    state.departments = departments
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
