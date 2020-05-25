<template>
  <div class="phonebook">
    <div class="phonebook__placeholder" v-if="dataIsUpdated">
      <i class="icon icon-update"></i>
      <span>Ждем, пока сервер соизволит передать данные...</span>
    </div>
    <template v-else>
      <div class="phonebook__search-panel">
        <div class="phonebook__search-wrapper">
          <input
            type="text"
            class="phonebook__search"
            placeholder="Номер телефона/кабинет/ФИО"
            @keyup="setTextForSearch(searchText.toLowerCase())"
            v-model="searchText"
          >
          <button
            class="button"
            v-show="this.searchText.length"
          >
            <i class="icon icon-clear" @click="clearSearchText"></i>
          </button>
        </div>
        <select
          class="phonebook__select"
          v-model="searchDepartment"
          @change="setDepartmentForSearch(searchDepartment)"
        >
          <option value="-1">- Все отделения</option>
          <option v-for="department in getPhonebook.data" :value="department._id" :key="department._id">{{department.name}}</option>
        </select>
        <button
          class="button button_inline"
          @click="clearFilter"
          v-show="searchText.length || searchDepartment !== '-1'"
        >Сбросить фильтр</button>
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
          <tbody
            v-for="department in getPhonebook.data"
            :key="department._id"
            v-show="department.show"
          >
            <tr class="phonebook__table-body-header">
              <td colspan="5">{{department.name}}</td>
            </tr>
            <tr
              v-for="cabinet in department.cabinets"
              :key="cabinet._id"
              v-show="cabinet.show"
            >
              <td>{{cabinet.cabinet_num}}</td>
              <td>{{cabinet.cabinet_name}}</td>
              <td v-html="cabinet.employees.join(',<br />')"></td>
              <td>
                <a :href="getOuterPhoneLink(cabinet.phone_outer)">{{cabinet.phone_outer}}</a>
              </td>
              <td>
                <template v-if="typeof cabinet.phone_inner !== 'string'">
                  <div class="flexbox flexbox_column flexbox_align_center">
                    <a
                      :href="['tel:+78442415' + phone]"
                      v-for="(phone, index) in cabinet.phone_inner"
                      :key="index"
                    >{{phone}}</a>
                  </div>
                </template>
                <template v-else>
                  <a :href="['tel:+78442415' + cabinet.phone_inner]">{{cabinet.phone_inner}}</a>
                </template>
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
    </template>
  </div>
</template>

<script>
import PhonebookService from '@/services/PhonebookService'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Phonebook',
  data: () => {
    return {
      dataIsUpdated: true,
      searchText: '',
      searchDepartment: '-1'
    }
  },
  computed: {
    ...mapGetters(['getPhonebook'])
  },
  methods: {
    ...mapMutations(['setPhonebook', 'setTextForSearch', 'setDepartmentForSearch', 'resetFilterPhonebook']),
    // В зависимости от типа (мобильный или городской) возвращает корректный номер телефона для ссылки.
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
    },
    // Очищает поле поиска
    clearSearchText: function () {
      this.searchText = ''
      this.setTextForSearch('')
    },
    // Очищает данные фильтра
    clearFilter: function () {
      this.searchText = ''
      this.searchDepartment = '-1'
      this.resetFilterPhonebook()
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
      this.dataIsUpdated = false
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

  &__placeholder {
    align-items: center;
    color: $gray;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;

    .icon {
      font-size: 3rem;
      animation: loop 1.5s infinite ease;
    }

    span {
      font-style: italic;
      margin: 2rem;
    }
  }

  &__search {
    $focusColor: $gray_dark;
    @include def-border-gray;
    @include def-box-shadow;
    @include transition((color, border-color));
    padding-right: 4.75rem;
    width: 100%;

    &:focus {
      border-color: $focusColor;

      & ~ button {
        border-color: $focusColor;
      }
    }

    &-wrapper {
      display: flex;
      position: relative;
      width: 40%;

      &:hover {
        .phonebook__search {
          border-color: $focusColor;
        }

        button {
          border-color: $focusColor;
        }
      }

      button {
        $shift: 1px;
        @include transition((background-color, border-color));
        border-left: 1px solid $gray;
        border-radius: 0 $border-radius $border-radius 0;
        bottom: $shift;
        padding-left: 1rem;
        padding-right: 1rem;
        position: absolute;
        right: $shift;
        top: $shift;

        &:hover {
          background-color: $gray_light;
        }
      }
    }
  }

  &__search-panel {
    align-items: center;
    display: flex;

    & > button {
      margin-left: auto;

      &:hover {
        color: $cardio;
      }
    }
  }

  &__select {
    @include def-border-gray;
    @include def-box-shadow;
    margin-left: 4%;
    width: 40%;
  }

  &__table-wrapper {
    @include def-border-gray;
    @include def-box-shadow;
    margin-top: 2rem;
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

      &:nth-child(2),
      &:nth-child(3) {
        text-align: left;
      }
    }

    tr {
      @include transition((background-color, color));
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
