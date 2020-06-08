<template>
  <div
    class="form__flipper"
    :class="{ 'form__flipper_st2': forms.tasks.show, 'form__flipper_st3': forms.information.show  }"
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
        <div class="form__notification">{{ forms.data.error }}</div>
      </div>
      <div class="form__buttons">
        <router-link to="/auth">У меня есть учетная запись</router-link>
        <button
          class="button button_primary"
          @click="showTasksForm"
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
      <div class="form__content">
        <ul class="form__tasks-list">
          <li
            class="form__task"
            v-for="task in getRegistrationTasks"
            :key="task._id"
          >
            <label class="form__task-label">
              <input
                type="checkbox"
                :value="task._id"
                v-model="checkedTasks"
              />
              <i class="icon icon-check"></i>
              {{ task.task }}
            </label>
          </li>
          <li class="form__task">
            <label class="form__task-label">
              <input
                type="checkbox"
                value="other"
                v-model="otherTasks.show"
              />
              <i class="icon icon-check"></i>
              Иное
            </label>
            <textarea
              :class="{ 'no-text': (otherTasks.show && !otherTasks.text.length) }"
              placeholder="Опишите задачу"
              v-show="otherTasks.show"
              v-model="otherTasks.text"
            ></textarea>
          </li>
        </ul>
        <div class="form__notification">{{ forms.tasks.error }}</div>
      </div>
      <div class="form__buttons">
        <button class="button button_primary" @click="showDataForm">&laquo; Назад</button>
        <button class="button button_primary" @click="showInformationForm">Подать заявку</button>
      </div>
    </form>
    <div
      class="form form_information"
    >
      <div class="form__header">
        <h2>Почти готово</h2>
      </div>
      <div class="form__content">
        <p>Осталось дело за малым:</p>
        <ol>
          <li>Распечатать файл по ссылке ниже;</li>
          <li>Подписать у зав. отеделнием;</li>
          <li>Подписать на обороте;</li>
          <li>Отдать заявку в каб. 2.093.</li>
        </ol>
      </div>
      <div class="form__buttons form__buttons_center">
        <Placeholder
          text="Формируется файл"
          typeButton
          v-show="!fileLink"
        />
        <a
          :href="fileLink"
          class="button button_primary"
          v-show="fileLink"
        >Скачать файл-заявку</a>
      </div>
    </div>
  </div>
</template>

<script>
// TODO:
// 1. Сохранение в логи информации о заявке;
// 2. Формирование PDF-файла.
import { mapGetters, mapMutations } from 'vuex'

import OrganizationService from '@/services/OrganizationService'

import Placeholder from '@/components/Placeholder'

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
      otherTasks: {
        show: false,
        text: ''
      },
      forms: {
        data: {
          error: ''
        },
        tasks: {
          show: false,
          error: ''
        },
        information: {
          show: false
        }
      },
      checkedTasks: [],
      fileLink: false
    }
  },
  components: {
    Placeholder
  },
  computed: {
    ...mapGetters(['getPositions', 'getDepartments', 'getRegistrationTasks']),
    // Флаг заполненности всех полей формы
    allFieldsAreFilled: function () {
      const filledFields = this.fields.filter((item) => { return item.value })

      return (Object.keys(filledFields).length === this.fields.length)
    },
    // Флаг заполненного поля "Иное"
    otherTasksTextFilled: function () {
      return this.otherTasks.text.length > 0
    }
  },
  methods: {
    ...mapMutations(['setPositions', 'setDepartments', 'setRegistrationTasks']),
    // Показывает форму с данными пользователя
    showDataForm: function () {
      this.forms.tasks.show = false
    },
    // Показывает форму с задачами
    showTasksForm: function () {
      if (this.allFieldsAreFilled) {
        this.forms.data.error = ''
        this.forms.tasks.show = true
        this.forms.information.show = false
      } else {
        this.forms.data.error = 'Необходимо заполнить все поля!'
      }
    },
    // Показывает форму с информацией о сформированном файле
    showInformationForm: function () {
      if (!this.otherTasks.show && !this.checkedTasks.length) {
        this.forms.tasks.error = 'Выберите минимум одну задачу!'
      } else if (this.otherTasks.show && !this.otherTasksTextFilled) {
        this.forms.tasks.error = 'Необходимо указать иные задачи!'
      } else {
        this.forms.information.error = ''
        this.forms.tasks.show = false
        this.forms.information.show = true
        this.sendRegistrationInfo()
      }
    },
    // Отправляет информацию о регистрации пользователя
    sendRegistrationInfo: async function () {
      const info = {}
      let response = {}

      this.fields.forEach((field) => {
        info[field.id] = field.value
      })

      info.tasks = this.checkedTasks

      if (this.otherTasksTextFilled) {
        info.otherTasks = this.otherTasks.text
      }

      response = await OrganizationService.addNewApplicationForRegistration(info)

      this.fileLink = `files/${response.data}`
    }
  },
  mounted: async function () {
    const positions = await OrganizationService.getPositions()
    const departments = await OrganizationService.getDepartments()
    const regTasks = await OrganizationService.getRegistrationTasks()

    this.setDepartments(departments.data)
    this.fields[3].options = departments.data
    this.setPositions(positions.data)
    this.fields[4].options = positions.data
    this.setRegistrationTasks(regTasks.data)
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

  &_tasks {
    transform: rotateY(-180deg) translateY(-50%);
  }

  &_information {
    z-index: -1;

    a {
      color: $white;

      &:hover,
      &:visited {
        color: $white;
      }
    }
  }

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

  &__task {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    & + & {
      margin-top: .5rem;
    }

    input[type="checkbox"] {
      display: none;

      &:checked ~ .icon {
        border-color: transparent;
        color: $cardio;
      }
    }

    textarea {
      @include def-border-gray;
      @include def-border-radius;
      @include transition(border-color);
      margin: .25rem 0 0 2.5rem;
      width: 100%;

      &:focus {
        border-color: $primary;
      }

      &.no-text {
        border-color: $cardio;
      }
    }

    &-label {
      align-items: center;
      display: flex;
      padding: .25rem 0;

      &:hover {
        cursor: pointer;

        .icon {
          border-color: $cardio;
        }
      }

      .icon {
        @include transition((color, border-color));
        background-color: $white;
        border: 1px solid $gray;
        border-radius: .25rem;
        color: $white;
        margin-right: .75rem;
        padding: .25rem;
      }
    }
  }

  &__content {
    ol {
      margin-top: .75rem;

      li {
        @include transition(background-color);
        padding: .5rem;

        &::marker {
          color: $primary;
        }

        &:hover {
          background-color: $gray_light;
        }
      }
    }
  }
}
</style>
