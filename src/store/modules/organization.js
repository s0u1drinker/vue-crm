const state = {
  positions: [
    { id: 0, name: 'Бухгалтер' },
    { id: 1, name: 'Врач-сердечно-сосудистый хирург' },
    { id: 2, name: 'Врач анестезиолог-реаниматолог' },
    { id: 3, name: 'Врач-кардиолог' },
    { id: 4, name: 'Врач-рентгенолог' },
    { id: 5, name: 'Мед. сестра-анестезист' },
    { id: 6, name: 'Мед. сестра' },
    { id: 7, name: 'Мед. сестра палатная' },
    { id: 8, name: 'Мед. сестра приемного отделения' },
    { id: 9, name: 'Программист' }
  ],
  departments: [
    { id: 0, name: 'Первое кардиологическое отделение', abbr: '1 КО' },
    { id: 1, name: 'Второе кардиологическое отделение', abbr: '2 КО' },
    { id: 2, name: 'Третье кардиологическое отделение', abbr: '3 КО' },
    { id: 3, name: 'Четвертое кардиологическое отделение', abbr: '4 КО' },
    { id: 4, name: 'Первое консультативное кардиологическое отделение', abbr: '1 ККО' },
    { id: 5, name: 'Второе консультативное кардиологическое отделение', abbr: '2 ККО' },
    { id: 6, name: 'Бухгалтерия', abbr: 'Бухгалтерия' }
  ]
}

const getters = {
  getPositions: state => {
    return state.positions
  },
  getDepartments: state => {
    return state.departments
  }
}

const mutations = {}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
