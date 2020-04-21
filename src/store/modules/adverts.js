const state = {
  adverts: [
    {
      id: '1',
      type: 'attention',
      header: 'Внимание!',
      text: 'C 16.03.2020 в ГБУЗ "ВОККЦ" введен ряд ограничительных мероприятий в связи с распоряжением председателя комитета здравоохранения Волгоградской области А.И. Себелева.'
    },
    {
      id: '2',
      type: 'info',
      header: 'Обратите внимание!',
      text: 'Изменился официальный адрес электронной почты ГБУЗ "ВОККЦ" - <b>vokkc@volganet.ru</b>.'
    }
  ]
}

const getters = {
  getAdverts: state => {
    return state.adverts
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
