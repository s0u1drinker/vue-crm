import api from './Api'

export default {
  getListDepartments () {
    return api().get('deps/getListDepartments')
  },
  getDepartmentCabinets (id) {
    return api().post('deps/getDepartmentCabinets', { id })
  }
}
