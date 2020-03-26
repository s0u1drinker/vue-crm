const state = {
  events: [
    {
      id: '1',
      date: '26.03.2020',
      time: '09:30',
      place: 'Конференцзал',
      title: 'Общебольничная планерка',
      descr: 'Еженедельная общебольничная планерка.'
    },
    {
      id: '2',
      date: '26.03.2020',
      time: '14:00',
      place: 'Конференцзал',
      title: 'Врачебная комиссия',
      descr: 'Заседание врачебной комиссии'
    },
    {
      id: '3',
      date: '26.03.2020',
      time: '15:00',
      place: 'Конференцзал',
      title: 'Телемедицинская консультация с ФГБУ "НМИЦ им. В. А. Алмазова" МЗ РФ',
      descr: ''
    },
    {
      id: '4',
      date: '27.03.2020',
      time: '14:00',
      place: 'Конференцзал',
      title: 'Врачебная комиссия',
      descr: 'Заседание врачебной комиссии'
    },
    {
      id: '5',
      date: '27.03.2020',
      time: '15:00',
      place: 'Конференцзал',
      title: 'Обучение английскому языку',
      descr: ''
    },
    {
      id: '6',
      date: '27.04.2020',
      time: '10:00',
      place: 'ГБУЗ &laquo;ВОККЦ&raquo;',
      title: 'День открытых дверей',
      descr: ''
    }
  ]
}

const getters = {
  getEvents: state => {
    return state.eventsBus
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
