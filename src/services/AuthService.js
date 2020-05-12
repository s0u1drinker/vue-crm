import api from './Api'

export default {
  auth (body) {
    return api().post('auth', body)
  }
}
