import api from './Api'

export default {
  getPhonebook () {
    return api().get('phonebook')
  }
}
