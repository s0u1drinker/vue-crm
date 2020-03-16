const state = {
  eventsBus: [
    {
      id: '1',
      groupTitle: 'Сегодня',
      events: [
        {
          id: '1',
          time: '09:30',
          place: 'Конференцзал',
          title: 'Общебольничная планерка',
          descr: 'Еженедельная общебольничная планерка.'
        },
        {
          id: '2',
          time: '14:00',
          place: 'Конференцзал',
          title: 'Врачебная комиссия',
          descr: 'Заседание врачебной комиссии'
        },
        {
          id: '3',
          time: '15:00',
          place: 'Конференцзал',
          title: 'Телемедицинская консультация с ФГБУ "НМИЦ им. В. А. Алмазова" МЗ РФ',
          descr: ''
        }
      ]
    },
    {
      id: '2',
      groupTitle: 'Завтра',
      events: [
        {
          id: '4',
          time: '14:00',
          place: 'Конференцзал',
          title: 'Врачебная комиссия',
          descr: 'Заседание врачебной комиссии'
        },
        {
          id: '5',
          time: '15:00',
          place: 'Конференцзал',
          title: 'Обучение английскому языку',
          descr: ''
        }
      ]
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
