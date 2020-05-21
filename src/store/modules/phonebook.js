const state = {
  phonebook: {
    data: {},
    wasReset: false,
    empty: true,
    searchText: '',
    searchDepartment: false
  }
}

const getters = {
  getPhonebook: state => {
    return state.phonebook
  }
}

const mutations = {
  // Записываем данные в хранилище
  setPhonebook: (state, data) => {
    state.phonebook.data = data
    state.phonebook.empty = false
  },
  // Выбор отделения для просмотра
  setDepartmentForSearch: (state, id) => {
    state.phonebook.searchDepartment = id

    mutations.setFilterPhonebook(state)
  },
  // Установка строки поиска
  setTextForSearch: (state, text) => {
    state.phonebook.searchText = text

    mutations.setFilterPhonebook(state)
  },
  // Поиск в хранилище
  setFilterPhonebook: (state) => {
    let departmentsFalseCount = false

    mutations.resetFilterPhonebook(state)

    state.phonebook.data.forEach((department) => {
      let cabinetsFalseCount = 0

      department.cabinets.forEach((cabinet) => {
        if (~cabinet.cabinet_name.toLowerCase().indexOf(state.phonebook.searchText)) {
          return true
        } else if (~cabinet.cabinet_num.indexOf(state.phonebook.searchText)) {
          return true
        } else if (cabinet.employees.some(empl => ~empl.toLowerCase().indexOf(state.phonebook.searchText))) {
          return true
        } else if (~cabinet.phone_outer.indexOf(state.phonebook.searchText)) {
          return true
        } else if (~cabinet.phone_inner.indexOf(state.phonebook.searchText)) {
          return true
        } else {
          cabinet.show = false
          cabinetsFalseCount++
        }
      })

      if ((department.cabinets.length === cabinetsFalseCount) || ((state.phonebook.searchDepartment !== '-1') && (department._id !== state.phonebook.searchDepartment))) {
        console.log((department.cabinets.length === cabinetsFalseCount) + '-' + (state.phonebook.searchDepartment !== '-1') + '-' + (department._id !== state.phonebook.searchDepartment))
        department.show = false
        departmentsFalseCount++
      }
    })

    if (state.phonebook.data.length === departmentsFalseCount) {
      state.phonebook.empty = true
    }
  },
  // Сброс фильтров
  resetFilterPhonebook: (state) => {
    state.phonebook.data.forEach((department) => {
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
