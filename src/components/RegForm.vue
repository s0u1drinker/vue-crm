<template>
  <form class="form" @submit.prevent>
    <div class="form__header">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="" class="logo">
      </router-link>
      <h2>Новая учетная запись</h2>
    </div>
    <div class="form__content">
      <div class="form__element">
        <input type="text" id="surname" />
        <label for="surname">Фамилия</label>
      </div>
      <div class="form__element">
        <input type="text" id="name" />
        <label for="name">Имя</label>
      </div>
      <div class="form__element">
        <input type="text" id="patronymic" />
        <label for="patronymic">Отчество</label>
      </div>
      <div class="form__element">
        <select name="position" id="position">
          <option value="-1"></option>
          <option v-for="position in getPositions" :value="position.id" :key="position.id">{{ position.name }}</option>
        </select>
        <label for="position">Должность</label>
      </div>
      <div class="form__element">
        <select name="department" id="department">
          <option value="-1"></option>
          <option v-for="department in getDepartments" :value="department.id" :key="department.id">{{ department.name }}</option>
        </select>
        <label for="department">Подразделение</label>
      </div>
      <div class="form__notification">{{ formError }}</div>
    </div>
    <div class="form__buttons">
      <router-link to="/auth">У меня есть учетная запись</router-link>
      <button class="button button_primary" @click="reg">Подать заявку</button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RegForm',
  data: () => {
    return {
      formError: ''
    }
  },
  computed: {
    ...mapGetters(['getPositions', 'getDepartments'])
  },
  methods: {
    reg: function () {
      this.formError = 'No vacancy!'
      alert('No vacancy!')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
