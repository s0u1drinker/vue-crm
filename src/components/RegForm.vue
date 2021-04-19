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
          :class="[surname ? 'form__element_filled' : '']"
        >
          <input
            type="text"
            id="surname"
            v-model="surname"
          />
          <label for="surname">Фамилия</label>
        </div>
        <div
          class="form__element"
          :class="[name ? 'form__element_filled' : '']"
        >
          <input
            type="text"
            id="name"
            v-model="name"
          />
          <label for="name">Имя</label>
        </div>
        <div
          class="form__element"
          :class="[patronymic ? 'form__element_filled' : '']"
        >
          <input
            type="text"
            id="patronymic"
            v-model="patronymic"
          />
          <label for="patronymic">Отчество</label>
        </div>
        <div
          class="form__element"
          :class="[department ? 'form__element_filled' : '']"
        >
          <select
            id="department"
            v-model="department"
            @change="setPositions"
          >
            <option value=""></option>
            <option
              v-for="(dep, index) in getRegData"
              :value="dep._id.id"
              :key="index"
            >{{ dep._id.name }}</option>
          </select>
          <label for="department">Подразделение</label>
        </div>
        <div
          class="form__element"
          :class="[position ? 'form__element_filled' : '']"
        >
          <select
            id="position"
            v-model="position"
            :disabled="!department"
            @change="setTasks"
          >
            <option value=""></option>
            <option
              v-for="(pos, index) in positions"
              :value="pos._id"
              :key="index"
            >{{ pos.name }}</option>
          </select>
          <label for="position">Должность</label>
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
            v-for="task in tasks"
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
          <li>Подписать у руководителя;</li>
          <li>Отдать заявку в каб. 2.093.</li>
        </ol>
      </div>
      <div class="form__buttons form__buttons_center">
        <button
          class="button button_primary"
          @click.prevent="generatePDF"
        >Скачать файл-заявку</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import PDFmake from 'pdfmake/build/pdfmake'
import PDFfonts from 'pdfmake/build/vfs_fonts'

import OrganizationService from '@/services/OrganizationService'
import LogService from '@/services/LogService'

import BlankISPDN from '@/templates/Blank_ISPDN.js'

PDFmake.vfs = PDFfonts.pdfMake.vfs

export default {
  name: 'RegForm',
  data: () => {
    return {
      surname: '',
      name: '',
      patronymic: '',
      department: '',
      position: '',
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
      positions: [],
      tasks: []
    }
  },
  computed: {
    ...mapGetters(['getRegData', 'getMonthsDeclension']),
    // Флаг заполненности всех полей формы
    allFieldsAreFilled: function () {
      return (this.surname && this.name && this.patronymic && this.department && this.position)
    },
    // Название подразделения
    selectedDepartment: function () {
      return this.getRegData.filter(item => { return item._id.id === this.department })[0]
    },
    // Название должности
    selectedPosition: function () {
      return this.positions.filter(item => { return item._id === this.position })[0]
    },
    // Список задач в строке
    selectedTasks: function () {
      return this.tasks.filter(item => { return this.checkedTasks.includes(item._id) })
    }
  },
  methods: {
    ...mapMutations(['setRegData']),
    // Показывает форму с данными пользователя
    showDataForm: function () {
      this.forms.tasks.show = false
      this.checkedTasks = []
      this.forms.tasks.error = ''
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
      if (!this.checkedTasks.length) {
        this.forms.tasks.error = 'Выберите минимум одну задачу!'
      } else {
        this.forms.information.error = ''
        this.forms.tasks.show = false
        this.forms.information.show = true
        this.sendRegistrationInfo()
      }
    },
    // Отправляет информацию о регистрации пользователя
    sendRegistrationInfo: async function () {
      await OrganizationService.addNewApplicationForRegistration({
        surname: this.surname,
        name: this.name,
        patronymic: this.patronymic,
        department: this.department,
        position: this.position,
        tasks: this.checkedTasks
      })

      await LogService.addLog({
        surname: this.surname,
        name: this.name,
        patronymic: this.patronymic,
        department: this.selectedDepartment._id.abbr,
        position: this.selectedPosition.name,
        tasks: this.selectedTasks.map(task => { return `${task.task[0].toLowerCase()}${task.task.slice(1)}` }).join(', ')
      })
    },
    // Возвращает картинку в base64
    imageToBase64: function (url) {
      return new Promise((resolve, reject) => {
        var img = new Image()
        img.setAttribute('crossOrigin', 'anonymous')
        img.onload = () => {
          var canvas = document.createElement('canvas')
          canvas.width = img.width
          canvas.height = img.height
          var ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0)
          var dataURL = canvas.toDataURL('image/png')
          resolve(dataURL)
        }
        img.onerror = error => {
          reject(error)
        }
        img.src = url
      })
    },
    // Возвращает слово с заглавной буквы
    capitalLetter: function (text) {
      return text[0].toUpperCase() + text.slice(1)
    },
    // Формирование PDF-документа
    generatePDF: async function () {
      const sign = await this.imageToBase64('img/blanks/sign.png')
      const print = await this.imageToBase64('img/blanks/print.png')

      BlankISPDN.setData({
        user: `${this.capitalLetter(this.surname)} ${this.capitalLetter(this.name)} ${this.capitalLetter(this.patronymic)}`,
        position: this.selectedPosition.name,
        department: this.selectedDepartment._id.abbr,
        tasks: this.selectedTasks,
        headDepartment: {
          name: (this.selectedPosition._id === '5ee888b8d0a9df15a486a0d7') ? 'Дворецкая М.С.' : this.selectedDepartment._id.head.name,
          position: (this.selectedPosition._id === '5ee888b8d0a9df15a486a0d7') ? 'Зам. гл. врача по мед. части' : this.selectedDepartment._id.head.position
        },
        date: {
          day: new Date().getDate(),
          month: this.getMonthsDeclension[new Date().getMonth()].toLowerCase(),
          year: new Date().getFullYear()
        },
        sign,
        print
      })

      PDFmake.createPdf(BlankISPDN.getData()).download('blank_ISPDN.pdf')
    },
    // Подгружает список должностей в зависимости от выбранного подразделения
    setPositions: function () {
      this.position = ''
      this.positions = this.getRegData.filter(item => { return item._id.id === this.department })[0].positions
    },
    // Подгружает список задач в зависимости от выбранной должности
    setTasks: function () {
      this.tasks = this.positions.filter(item => { return item._id === this.position })[0].tasks
    }
  },
  mounted: async function () {
    const regData = await OrganizationService.getDataForRegistration()

    this.setRegData(regData.data)
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
