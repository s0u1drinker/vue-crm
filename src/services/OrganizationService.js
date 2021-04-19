import api from './Api'

export default {
  getPositions () {
    return api().get('organization/getPositions')
  },
  getDepartments () {
    return api().get('organization/getDepartmentsForRegistration')
  },
  getRegistrationTasks () {
    return api().get('organization/getRegistrationTasks')
  },
  addNewApplicationForRegistration (info) {
    return api().post('organization/addNewApplicationForRegistration', info)
  },
  getDataForRegistration () {
    return api().get('organization/getDataForRegistration')
  }
}
