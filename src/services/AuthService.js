import api from './Api'

export default {
  login (body) {
    return api().post('user/auth', body)
  },
  logout () {
    return api().post('user/logout')
  },
  check () {
    return api().post('user/check')
  }
}
