import api from './Api'

export default {
  getDocumentsForMainPage () {
    return api().get('documents/getDocumentsForMainPage')
  },
  getDocumentsByText (text, limit, skip) {
    return api().post('documents/getDocumentsByText', { text, limit, skip })
  },
  updateViewsCountOfDocument (id) {
    return api().post('documents/updateViewsCountOfDocument', { id })
  }
}
