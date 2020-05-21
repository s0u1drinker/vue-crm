<template>
  <div class="phonebook">
    <div class="phonebook__search-panel">
      <input
        type="text"
        class="phonebook__search"
        placeholder="Номер телефона/кабинет/ФИО"
        @keyup="setSearchText"
        v-model="searchText"
      >
      <select
        class="phonebook__select"
        v-model="searchDepartment"
        @change="setSearchDepartment"
      >
        <option value="-1">- Все отделения</option>
        <option v-for="department in getPhonebook.data" :value="department._id" :key="department._id">{{department.name}}</option>
      </select>
    </div>
    <div class="phonebook__table-wrapper">
      <table class="phonebook__table">
        <thead>
          <tr>
            <th>№ кабинета</th>
            <th>Кабинет</th>
            <th>Сотрудник(и)</th>
            <th>Городской</th>
            <th>Внутренний</th>
          </tr>
        </thead>
        <tbody v-for="department in getPhonebook.data" :key="department._id" v-show="department.show">
          <tr class="phonebook__table-body-header">
            <td colspan="5">{{department.name}}</td>
          </tr>
          <tr v-for="cabinet in department.cabinets" :key="cabinet._id" v-show="cabinet.show">
            <td>{{cabinet.cabinet_num}}</td>
            <td>{{cabinet.cabinet_name}}</td>
            <td v-html="cabinet.employees.join(',<br />')"></td>
            <td>
              <a :href="getOuterPhoneLink(cabinet.phone_outer)">{{cabinet.phone_outer}}</a>
            </td>
            <td>
              <a :href="['tel:+78442415' + cabinet.phone_inner]">{{cabinet.phone_inner}}</a>
            </td>
          </tr>
        </tbody>
        <tbody v-if="getPhonebook.empty">
          <tr class="phonebook__table-body-empty">
            <td colspan="5">Ничего не найдено =(</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PhonebookService from '@/services/PhonebookService'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Phonebook',
  data: () => {
    return {
      searchText: '',
      searchDepartment: '-1'
    }
  },
  computed: {
    ...mapGetters(['getPhonebook'])
  },
  methods: {
    ...mapMutations(['setPhonebook', 'setTextForSearch', 'setDepartmentForSearch']),
    setSearchText: function () {
      this.setTextForSearch(this.searchText.toLowerCase())
    },
    setSearchDepartment: function () {
      this.setDepartmentForSearch(this.searchDepartment)
    },
    getOuterPhoneLink: function (phone) {
      let phoneLink

      if (phone.length > 8) {
        // Номер мобильного телефона
        phoneLink = 'tel:+7' + phone.match(/\d+/g).join('').slice(1)
      } else {
        // Городской номер
        phoneLink = 'tel:+78442' + phone.split('-').join('')
      }

      return phoneLink
    }
  },
  created: async function () {
    let response = await PhonebookService.getPhonebook()

    if (Object.keys(response.data).length) {
      // Добавляем флаг для показа, а в последствии и фильтрации, элементов
      response = response.data.map(r => {
        r.cabinets = r.cabinets.map(c => ({ ...c, show: true }))

        return { ...r, show: true }
      })

      this.setPhonebook(response)
    }
  }
}
</script>

<style lang="scss" scoped>
.phonebook {
  margin-top: 3rem;

  a,
  a:visited {
    color: $primary_dark;

    &:hover {
      color: $cardio;
    }
  }

  &__search {
    @include def-border-gray;
    @include def-box-shadow;
    @include transition((color, border-color));
    width: 50%;

    &:hover,
    &:focus {
      border-color: $primary;
    }
  }

  &__search-panel {
    display: flex;
    justify-content: space-between;
  }

  &__select {
    @include def-border-gray;
    @include def-box-shadow;
    width: 40%;
  }

  &__table-wrapper {
    @include def-border-gray;
    @include def-box-shadow;
    margin-top: 1rem;
  }

  &__table {
    width: 100%;

    thead {

      th {
        background-color: $white;
        border-bottom: 1px solid $gray;
        position: sticky;
        top: 0;

        &:first-child {
          width: 11%;
        }

        &:nth-child(2) {
          width: 39%;
        }

        &:nth-child(4) {
          width: 13%;
        }

        &:last-child {
          width: 10%;
        }
      }
    }

    td,
    th {
      line-height: 1.5;
      padding: .5rem;
    }

    td {
      text-align: center;
    }

    tr {
      @include transition((background-color, color));
    }

    td:nth-child(2),
    td:nth-child(3) {
      text-align: left;
    }

    tbody {
      tr {
        &:nth-child(n+3) td{
          border-top: 1px solid $gray_light;
        }

        &:not(.phonebook__table-body-header):not(.phonebook__table-body-empty) {

          &:hover {
            background-color: $primary_lighten;
          }
        }
      }
    }

    &-body {
      &-header td {
        background-color: $gray;
        font-weight: bold;
        text-align: center;
      }

      &-empty td {
        color: $gray_dark;
        font-style: italic;
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
      }
    }
  }
}
</style>
