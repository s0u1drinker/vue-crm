<template>
  <form class="form" @submit.prevent>
    <div class="form__header">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="" class="logo">
      </router-link>
      <h2>Вход в систему</h2>
    </div>
    <div class="form__content">
      <div class="form__element" :class="[login.length > 0 ? 'form__element_filled' : '']">
        <input type="text" id="login" v-model.trim="login" />
        <label for="login">Логин</label>
      </div>
      <div class="form__element" :class="[pass.length > 0 ? 'form__element_filled' : '']">
        <input type="password" id="pass" v-model.trim="pass" />
        <label for="pass">Пароль</label>
      </div>
      <div class="form__notification">{{ formError }}</div>
    </div>
    <div class="form__buttons">
      <router-link to="/registration">Зарегистрироваться</router-link>
      <button class="button button_primary" @click="logIn">Войти</button>
    </div>
  </form>
</template>

<script>
import AuthService from '@/services/AuthService'

import { mapActions } from 'vuex'

export default {
  name: 'AuthForm',
  data: () => {
    return {
      login: '',
      pass: '',
      formError: ''
    }
  },
  methods: {
    ...mapActions(['setUserData']),
    // Вход в систему
    logIn: async function () {
      const response = await AuthService.login({
        login: this.login,
        pass: this.pass
      })

      if (response.data.err) {
        this.formError = response.data.descr
      } else {
        if (response.data.auth) {
          this.setUserData(response.data)
          this.$router.push('/')
        } else {
          this.formError = 'Что-то пошло не так. Повторите запрос.'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
