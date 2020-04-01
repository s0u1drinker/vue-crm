const state = {
  events: [
    {
      id: '1',
      timestamp: 1585200600,
      day: '26',
      month: 2,
      timeStart: '09:30',
      place: 'Конференцзал',
      title: 'Общебольничная планерка',
      descr: 'Еженедельная общебольничная планерка.',
      type: 'high'
    },
    {
      id: '2',
      timestamp: 1585216800,
      day: '26',
      month: 2,
      timeStart: '14:00',
      place: 'Конференцзал',
      title: 'Врачебная комиссия',
      descr: 'Заседание врачебной комиссии',
      type: 'med'
    },
    {
      id: '3',
      timestamp: 1585220400,
      day: '26',
      month: 2,
      timeStart: '15:00',
      place: 'Конференцзал',
      title: 'Телемедицинская консультация с ФГБУ "НМИЦ им. В. А. Алмазова" МЗ РФ',
      descr: '',
      type: 'low'
    },
    {
      id: '4',
      timestamp: 1585303200,
      day: '27',
      month: 2,
      timeStart: '14:00',
      place: 'Конференцзал',
      title: 'Врачебная комиссия',
      descr: 'Заседание врачебной комиссии',
      type: 'med'
    },
    {
      id: '5',
      timestamp: 1585306800,
      day: '27',
      month: 2,
      timeStart: '15:00',
      place: 'Конференцзал',
      title: 'Обучение английскому языку',
      descr: '',
      type: 'low'
    },
    {
      id: '6',
      timestamp: 1587965400,
      day: '27',
      month: 3,
      timeStart: '09:00',
      place: '',
      title: 'День открытых дверей',
      descr: '',
      type: 'med'
    }
  ]
}

const getters = {
  getEvents: state => {
    return state.events
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
