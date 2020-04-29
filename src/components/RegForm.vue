<template>
  <form class="form" @submit.prevent>
    <div class="form__header">
      <a href="/">
        <img src="@/assets/logo.svg" alt="" class="logo">
      </a>
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
        <Select
          id="position"
          label="Должность"
          :list="getPositions"
        />
      </div>
      <div class="form__element">
        <Select
          id="department"
          label="Подразделение"
          :list="getDepartments"
        />
      </div>
      <span class="form__notification"></span>
    </div>
    <div class="form__buttons">
      <a href="/auth">У меня есть учетная запись</a>
      <button class="button button_primary" @click="reg">Подать заявку</button>
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

import Select from '@/components/Select'

export default {
  name: 'RegForm',
  components: {
    Select
  },
  computed: {
    ...mapGetters(['getPositions', 'getDepartments'])
  },
  methods: {
    reg: () => {
      alert('No vacancy!')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
