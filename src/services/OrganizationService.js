import api from './Api'

export default {
  getPositions () {
    return api().get('organization/getPositions')
  },
  getDepartments () {
    return api().get('organization/getDepartmentsForRegistration')
  }
}
