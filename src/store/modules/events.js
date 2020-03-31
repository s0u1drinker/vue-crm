const state = {
  events: [
    {
      id: '1',
      timestamp: 1585200600,
      place: 'Конференцзал',
      title: 'Общебольничная планерка',
      descr: 'Еженедельная общебольничная планерка.'
    },
    {
      id: '2',
      timestamp: 1585216800,
      place: 'Конференцзал',
      title: 'Врачебная комиссия',
      descr: 'Заседание врачебной комиссии'
    },
    {
      id: '3',
      timestamp: 1585220400,
      place: 'Конференцзал',
      title: 'Телемедицинская консультация с ФГБУ "НМИЦ им. В. А. Алмазова" МЗ РФ',
      descr: ''
    },
    {
      id: '4',
      timestamp: 1585303200,
      place: 'Конференцзал',
      title: 'Врачебная комиссия',
      descr: 'Заседание врачебной комиссии'
    },
    {
      id: '5',
      timestamp: 1585306800,
      place: 'Конференцзал',
      title: 'Обучение английскому языку',
      descr: ''
    },
    {
      id: '6',
      timestamp: 1587965400,
      place: '',
      title: 'День открытых дверей',
      descr: ''
    }
  ],
  months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
}

const getters = {
  getEvents: state => {
    return state.events
  },
  getEventDatetime: state => id => {
    const event = state.events.find(evt => evt.id === id)
    const eventDatetime = new Date(event.timestamp * 1000)
    const hours = eventDatetime.getHours()
    const minutes = eventDatetime.getMinutes()

    return {
      day: eventDatetime.getDate(),
      month: state.months[eventDatetime.getMonth()],
      timeStart: (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes)
    }
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
