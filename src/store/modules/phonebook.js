const state = {
  phonebook: {
    data: {},
    empty: true,
    searchText: '',
    searchDepartment: '-1'
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

    state.phonebook.data.forEach((department) => {
      let cabinetsFalseCount = 0

      if ((state.phonebook.searchDepartment === '-1') || ((state.phonebook.searchDepartment !== '-1') && (department._id === state.phonebook.searchDepartment))) {
        department.cabinets.forEach((cabinet) => {
          if ((~cabinet.cabinet_name.toLowerCase().indexOf(state.phonebook.searchText)) ||
              (~cabinet.cabinet_num.indexOf(state.phonebook.searchText)) ||
              (cabinet.employees.some(empl => ~empl.toLowerCase().indexOf(state.phonebook.searchText))) ||
              (~cabinet.phone_outer.indexOf(state.phonebook.searchText)) ||
              (~cabinet.phone_inner.indexOf(state.phonebook.searchText))) {
            cabinet.show = true
          } else {
            cabinet.show = false
            cabinetsFalseCount++
          }
        })
      } else {
        cabinetsFalseCount = department.cabinets.length
      }

      if (cabinetsFalseCount === department.cabinets.length) {
        department.show = false
        departmentsFalseCount++
      } else {
        department.show = true
      }
    })

    state.phonebook.empty = (departmentsFalseCount === state.phonebook.data.length)
  },
  // Сброс фильтров
  resetFilterPhonebook: (state) => {
    state.phonebook.searchText = ''
    state.phonebook.searchDepartment = '-1'
    state.phonebook.empty = false

    state.phonebook.data.forEach((department) => {
      department.show = true

      department.cabinets.forEach((cabinet) => {
        cabinet.show = true
      })
    })
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
