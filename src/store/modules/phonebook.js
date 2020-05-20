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
  },
  setFilterPhonebook: (state, text) => {
    let departmentsFalseCount = false

    state.phonebook.forEach((department) => {
      let cabinetsFalseCount = 0

      department.cabinets.forEach((cabinet) => {
        if (~cabinet.cabinet_name.toLowerCase().indexOf(text)) {
          return true
        } else if (~cabinet.cabinet_num.indexOf(text)) {
          return true
        } else if (cabinet.employees.some(empl => ~empl.toLowerCase().indexOf(text))) {
          return true
        } else if (~cabinet.phone_outer.indexOf(text)) {
          return true
        } else if (~cabinet.phone_inner.indexOf(text)) {
          return true
        } else {
          cabinet.show = false
          cabinetsFalseCount++
        }
      })

      if (department.cabinets.length === cabinetsFalseCount) {
        department.show = false
        departmentsFalseCount++
      }
    })

    if (state.phonebook.length === departmentsFalseCount) {
      state.phonebook.empty = true
    }
  },
  resetFilterPhonebook: (state) => {
    state.phonebook.forEach((department) => {
      department.show = true

      department.cabinets.forEach((cabinet) => {
        cabinet.show = true
      })
    })

    state.phonebook.empty = false
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
