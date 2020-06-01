import api from './Api'

export default {
  getDocumentsForMainPage (body) {
    return api().get('documents/getDocumentsForMainPage')
  }
}
