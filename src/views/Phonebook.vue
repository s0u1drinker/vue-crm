<template>
  <main-layout>
    <table>
      <thead>
        <tr>
          <th>№ кабинета</th>
          <th>Кабинет</th>
          <th>Сотрудник(и)</th>
          <th>Городской</th>
          <th>Внутренний</th>
        </tr>
      </thead>
      <tbody v-for="department in getPhonebook" :key="department._id">
        <tr>{{department.name}}</tr>
        <tr v-for="cabinet in department.cabinets" :key="cabinet._id">
          <td>{{cabinet.cabinet_num}}</td>
          <td>{{cabinet.cabinet_name}}</td>
          <td v-html="cabinet.employees.join(',<br />')"></td>
          <td>
            <a :href="['tel:+78442' + cabinet.phone_outer.split('-').join('')]">{{cabinet.phone_outer}}</a>
          </td>
          <td>
            <a :href="['tel:+78442415' + cabinet.phone_inner]">{{cabinet.phone_inner}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import PhonebookService from '@/services/PhonebookService'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Phonebook',
  computed: {
    ...mapGetters(['getPhonebook'])
  },
  methods: {
    ...mapMutations(['setPhonebook'])
  },
  created: async function () {
    const response = await PhonebookService.getPhonebook()

    this.setPhonebook(response.data)
  },
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">

</style>
