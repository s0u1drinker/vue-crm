import api from './Api'

export default {
  getAdverts () {
    return api().get('adverts')
  }
}
