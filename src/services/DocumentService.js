import api from './Api'

export default {
  getDocumentsForMainPage () {
    return api().get('documents/getDocumentsForMainPage')
  },
  updateViewsCountOfDocument (id) {
    return api().post('documents/updateViewsCountOfDocument', { id })
  }
}
