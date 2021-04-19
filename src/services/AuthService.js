import api from './Api'

export default {
  login (body) {
    return api().post('user/login', body)
  },
  logout () {
    return api().post('user/logout')
  }
}
