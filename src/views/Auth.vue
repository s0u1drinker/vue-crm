<template>
  <auth-reg-layout bg-type="auth">
    <Form form-title="Вход в систему">
      <template v-slot:content>
        <div class="form__element">
          <input type="text" id="login" v-model="guest.login" />
          <label for="login">Логин</label>
        </div>
        <div class="form__element">
          <input type="text" id="pass" v-model="guest.pass" />
          <label for="pass">Пароль</label>
        </div>
      </template>
      <template v-slot:buttons>
        <a href="/registration">Зарегистрироваться</a>
        <button class="button button_primary">Войти</button>
      </template>
    </Form>
  </auth-reg-layout>
</template>

<script>
import AuthRegLayout from '@/layouts/AuthRegLayout'
import Form from '@/components/Form'

export default {
  name: 'Auth',
  data () {
    return {
      guest: {
        login: '',
        pass: ''
      }
    }
  },
  components: {
    AuthRegLayout,
    Form
  }
}
</script>

<style lang="scss" scoped>

</style>
