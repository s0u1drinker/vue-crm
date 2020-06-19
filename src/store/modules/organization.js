const state = {
  regData: [],
  positions: [],
  departments: [],
  regTasks: []
}

const getters = {
  getRegData: state => {
    return state.regData
  },
  getPositions: state => {
    return state.positions
  },
  getDepartments: state => {
    return state.departments
  },
  getRegistrationTasks: state => {
    return state.regTasks
  }
}

const mutations = {
  setRegData: (state, regData) => {
    state.regData = regData
  },
  setPositions: (state, positions) => {
    state.positions = positions
  },
  setDepartments: (state, departments) => {
    state.departments = departments
  },
  setRegistrationTasks: (state, tasks) => {
    state.regTasks = tasks
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
