import api from './Api'

export default {
  getEventsForDay (body) {
    return api().post('events/forDate', body)
  }
}
