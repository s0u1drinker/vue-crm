const state = {
  infoPanelLinks: [
    {
      id: '1',
      moduleName: 'Events',
      title: 'Список мероприятий'
    },
    {
      id: '2',
      moduleName: 'Phonebook',
      title: 'Телефонный справочник'
    }
  ]
}

const getters = {
  getLinks: state => {
    return state.infoPanelLinks
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
