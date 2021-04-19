import api from './Api'

export default {
  getRegisters () {
    return api().get('doc-management/getRegisters')
  },
  getRegisterData (registerID) {
    return api().post('doc-management/getRegisterData', { id: registerID })
  },
  saveRegisterData (regData) {
    return api().post('doc-management/saveRegisterData', regData)
  }
}
