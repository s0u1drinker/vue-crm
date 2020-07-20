const state = {
  user: {
    auth: false,
    name: '',
    config: {
      pinNavigation: true
    }
  }
}

const getters = {
  // Имя пользователя
  getUsername: state => {
    return state.user.name
  },

  // Конфиг пользователя
  getUserConfig: state => {
    return state.user.config
  },

  // Флаг авторизации
  getUserAuth: state => {
    return state.user.auth
  }
}

const mutations = {
  // Пользователь авторизовался
  userLogIn (state, name) {
    state.user.auth = true
    state.user.name = name
  },

  // Пользователь вышел из системы
  userLogOut (state) {
    state.user.auth = false
    state.user.name = ''
  },

  // Фиксация меню
  togglePinNavigation (state) {
    state.user.config.pinNavigation = !state.user.config.pinNavigation
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
