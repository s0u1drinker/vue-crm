import api from './Api'

export default {
  getDocumentsForMainPage () {
    return api().get('documents/getDocumentsForMainPage')
  },
  getDocumentsByText (text) {
    return api().post('documents/getDocumentsByText', { text })
  },
  updateViewsCountOfDocument (id) {
    return api().post('documents/updateViewsCountOfDocument', { id })
  }
}
