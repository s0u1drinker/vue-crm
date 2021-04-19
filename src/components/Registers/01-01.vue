<template>
  <div class="register-form">
    <h3>Добавить {{ formData.recordType !== '0' ? 'новое распоряжение' : 'новый приказ' }}</h3>
    <div class="register-form__group register-form__group_margin">
      <input
        class="register-form__input register-form__column"
        type="text"
        placeholder=",,,,,,,,,,,"
        v-model="formData.unknown"
      >
    </div>
    <div class="register-form__group">
      <div class="register-form__group-title">Дата регистрации:</div>
      <Datepicker
        :cls="'register-form__column'"
        :clearFlag="clearDatepickerFlag"
        v-on:setData="updateDateOfReg"
        v-on:clearFlagDown="clearDatepickerFlagDown"
      />
    </div>
    <div class="register-form__group">
      <div class="register-form__group-title">№</div>
      <select
        class="register-form__column"
        v-model="formData.recordType"
      >
        <option value="0">приказа</option>
        <option value="1">распоряжения</option>
      </select>
      <input
        class="register-form__column"
        type="text"
        v-model="formData.recordNumber"
      >
    </div>
    <div class="register-form__group">
      <div class="register-form__group-title">Содержание:</div>
      <textarea
        class="register-form__column_double"
        v-model="formData.content"
      ></textarea>
    </div>
    <div class="register-form__group">
      <div class="register-form__group-title">№ дела:</div>
      <select
        class="register-form__column"
        v-model="formData.caseNumber"
      >
        <option value="0"></option>
      </select>
    </div>
    <div class="register-form__group">
      <div class="register-form__group-title">Кол-во экземпляров:</div>
      <input
        class="register-form__column_half"
        type="text"
        v-model="formData.countCopy"
      >
    </div>
    <div class="register-form__group">
      <div class="register-form__group-title">Примечание:</div>
      <textarea
        class="register-form__column_double"
        v-model="formData.note"
      ></textarea>
    </div>
    <div class="register-form__group register-form__group_margin">
      <button
        class="button_primary"
        @click="addNewRecordInRegister"
      >Добавить</button>
      <button
        class="button_outline button_outline_gray"
        @click="clearForm"
      >Очистить</button>
    </div>
  </div>
</template>

<script>
import Datepicker from '@/components/Datepicker'

import DMService from '@/services/DocManagementService'

import { bus } from '../../main'

export default {
  data: function () {
    return {
      clearDatepickerFlag: false,
      formData: {
        unknown: '',
        dateOfReg: '',
        recordType: '0',
        recordNumber: '',
        content: '',
        caseNumber: '0',
        countCopy: 1,
        note: ''
      }
    }
  },
  components: {
    Datepicker
  },
  methods: {
    addNewRecordInRegister: async function () {
      const response = (await DMService.saveRegisterData({
        regId: this.$route.params.id,
        regData: this.formData
      })).data

      if (!response.flag) {
        bus.$emit('forceUpdateRegisterList')
      }
    },
    clearForm: function () {
      this.formData.unknown = ''
      this.formData.recordType = '0'
      this.formData.recordNumber = ''
      this.formData.content = ''
      this.formData.caseNumber = 0
      this.formData.countCopy = 1
      this.formData.note = ''
      this.formData.dateOfReg = ''

      this.clearDatepickerFlag = true
    },
    clearDatepickerFlagDown: function () {
      this.clearDatepickerFlag = false
    },
    updateDateOfReg: function (newDate) {
      this.formData.dateOfReg = newDate
    }
  }
}
</script>
