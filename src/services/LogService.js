import api from './Api'

export default {
  addLog (logData) {
    return api().post('log/addLog', logData)
  }
}
