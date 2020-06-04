<template>
  <div
    class="form__flipper"
    :class="{ 'form__flipper_st2': showTasks, 'form__flipper_st3': showInformation  }"
  >
    <div class="form form_data">
      <div class="form__header">
        <router-link to="/">
          <img src="@/assets/logo.svg" alt="" class="logo">
        </router-link>
        <h2>Новая учетная запись</h2>
      </div>
      <div class="form__content">
        <div
          class="form__element"
          :class="[field.value ? 'form__element_filled' : '']"
          v-for="(field, index) in fields"
          :key="index"
        >
          <template v-if="(field.type === 'text')">
            <input
              type="text"
              :id="field.id"
              v-model="field.value"
            />
          </template>
          <template v-else-if="field.type === 'select'">
            <select
              :name="field.id"
              :id="field.id"
              v-model="field.value"
            >
              <option value="-1"></option>
              <option v-for="option in field.options" :value="option._id" :key="option.id">{{ option.name }}</option>
            </select>
          </template>
          <label :for="field.id">{{field.label}}</label>
        </div>
        <div class="form__notification">{{ formError }}</div>
      </div>
      <div class="form__buttons">
        <router-link to="/auth">У меня есть учетная запись</router-link>
        <button
          class="button button_primary"
          @click="showTasksForm"
          :disabled="!allFieldsAreFilled"
        >Продолжить &raquo;</button>
      </div>
    </div>
    <form
      class="form form_tasks"
      @submit.prevent
    >
      <div class="form__header">
        <h2>Выберите задачи</h2>
      </div>
      <div class="form__content"></div>
      <div class="form__buttons">
        <button class="button button_primary" @click="showDataForm">&laquo; Назад</button>
        <button class="button button_primary" @click="showInformationForm">Подать заявку</button>
      </div>
    </form>
    <div
      class="form form_information"
    >
      Заявка принята. Файл формируется...
    </div>
  </div>
</template>

<script>
// TODO:
// 1. Добавить задачи;
// 2. Добавить текст информации;
// 3. Отправка данных о регистрации на сервер;
// 4. Формирование PDF-файла.
import { mapGetters, mapMutations } from 'vuex'

import OrganizationService from '@/services/OrganizationService'

export default {
  name: 'RegForm',
  data: () => {
    return {
      fields: [
        {
          id: 'surname',
          label: 'Фамилия',
          type: 'text',
          value: ''
        },
        {
          id: 'name',
          label: 'Имя',
          type: 'text',
          value: ''
        },
        {
          id: 'patronymic',
          label: 'Отчество',
          type: 'text',
          value: ''
        },
        {
          id: 'department',
          label: 'Подразделение',
          type: 'select',
          options: {},
          value: ''
        },
        {
          id: 'position',
          label: 'Должность',
          type: 'select',
          options: {},
          value: ''
        }
      ],
      showTasks: false,
      showInformation: false,
      formError: ''
    }
  },
  computed: {
    ...mapGetters(['getPositions', 'getDepartments']),
    // Флаг заполненности всех полей формы
    allFieldsAreFilled: function () {
      const filledFields = this.fields.filter((item) => { return item.value })

      return (Object.keys(filledFields).length === this.fields.length)
    }
  },
  methods: {
    ...mapMutations(['setPositions', 'setDepartments']),
    showDataForm: function () {
      this.showTasks = false
    },
    showTasksForm: function () {
      if (this.allFieldsAreFilled) {
        this.showTasks = true
        this.showInformation = false
      }
    },
    showInformationForm: function () {
      this.showTasks = false
      this.showInformation = true
    }
  },
  mounted: async function () {
    const positions = await OrganizationService.getPositions()
    const departments = await OrganizationService.getDepartments()

    this.setDepartments(departments.data)
    this.fields[4].options = departments.data
    this.setPositions(positions.data)
    this.fields[3].options = positions.data
  }
}
</script>

<style lang="scss" scoped>
.form {
  backface-visibility: hidden;
  height: 30.75rem;
  left: 0;
  position: absolute;
  right: 0;
  transform: translateY(-50%);

  &__flipper {
    @include transition((transform, left));
    left: 10.5rem;
    position: relative;
    transform-style: preserve-3d;
    width: 33rem;

    &_st2 {
      transform: rotateY(-180deg);
    }

    &_st3 {
      transform: rotateY(-360deg);

      .form_data {
        z-index: -1;
      }

      .form_information {
        z-index: 2;
      }
    }
  }

  &_tasks {
    transform: rotateY(-180deg) translateY(-50%);
  }

  &_information {
    z-index: -1;
  }
}
</style>
