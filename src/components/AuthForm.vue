<template>
  <form class="form" @submit.prevent>
    <div class="form__header">
      <a href="/">
        <img src="@/assets/logo.svg" alt="" class="logo">
      </a>
      <h2>Вход в систему</h2>
    </div>
    <div class="form__content">
      <div class="form__element">
        <input type="text" id="login" />
        <label for="login">Логин</label>
      </div>
      <div class="form__element">
        <input type="text" id="pass" />
        <label for="pass">Пароль</label>
      </div>
      <div class="form__notification">{{ formError }}</div>
    </div>
    <div class="form__buttons">
      <a href="/registration">Зарегистрироваться</a>
      <button class="button button_primary" @click="auth">Войти</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AuthForm',
  data: () => {
    return {
      formError: ''
    }
  },
  methods: {
    auth: function () {
      this.formError = 'Don`t touch this button, dude!'
      alert('Don`t touch this!')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
