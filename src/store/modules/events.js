const state = {
  events: {},
  falseEvents: [
    {
      id: '1',
      timestamp: 1585200600,
      day: '26',
      month: 2,
      timeStart: '09:30',
      place: 'Конференцзал',
      title: 'Еженедельная общебольничная планерка',
      descr: '',
      type: 'high',
      icon: 'planning_meeting'
    },
    {
      id: '2',
      timestamp: 1585220400,
      day: '26',
      month: 2,
      timeStart: '11:00',
      place: 'Конференцзал',
      title: 'Телеконференция с ФГБУ "НМИЦ им. ак. Е.Н.Мешалкина" МЗ РФ',
      descr: 'Лекция: Современные стратегии профилактики кардиотоксичности противоопухолевой терапии',
      type: 'low',
      icon: 'teleconference'
    },
    {
      id: '3',
      timestamp: 1585216800,
      day: '26',
      month: 2,
      timeStart: '14:00',
      place: 'Конференцзал',
      title: 'Заседание врачебной комиссии',
      descr: '',
      type: 'med',
      icon: 'conversation'
    },
    {
      id: '4',
      timestamp: 1585220400,
      day: '26',
      month: 2,
      timeStart: '15:00',
      place: 'Конференцзал',
      title: 'Телемедицинская консультация с ФГБУ "НМИЦ им. В. А. Алмазова" МЗ РФ',
      descr: 'Пациент: Иванов И.В.',
      type: 'low',
      icon: 'conference'
    },
    {
      id: '5',
      timestamp: 1585303200,
      day: '27',
      month: 2,
      timeStart: '14:00',
      place: 'Конференцзал',
      title: 'Врачебная комиссия',
      descr: 'Заседание врачебной комиссии',
      type: 'med',
      icon: ''
    },
    {
      id: '6',
      timestamp: 1585306800,
      day: '27',
      month: 2,
      timeStart: '15:00',
      place: 'Конференцзал',
      title: 'Обучение английскому языку',
      descr: '',
      type: 'low',
      icon: ''
    },
    {
      id: '7',
      timestamp: 1587965400,
      day: '27',
      month: 3,
      timeStart: '09:00',
      place: '',
      title: 'День открытых дверей',
      descr: '',
      type: 'med',
      icon: ''
    }
  ]
}

const getters = {
  getEventsToday: state => {
    return state.falseEvents.filter(event => event.day === '26')
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
