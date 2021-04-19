<template>
  <div
    class="datepicker"
    :class="[ cls ]"
  >
    <input
      id="datepicker__input"
      class="datepicker__input"
      type="text"
      v-model="dateInput"
      ref="datepicker__input"
      @focus="showDays=true"
      @blur="closeDays"
    >
    <i
      class="icon icon-datepicker"
      @click="setFocusToDatepickerInput"
    ></i>
    <Calendar
      :cls="[ 'datepicker__days', (showDays) ? 'datepicker__days_show' : '' ]"
      @selectdate="setDateValue"
    />
  </div>
</template>

<script>
import Calendar from './Calendar'

import functions from './../services/spartanFunctions'

export default {
  props: ['cls', 'clearFlag'],
  data: function () {
    return {
      daysArray: [],
      dateInput: '',
      showDays: false,
      closeDaysTimeOut: ''
    }
  },
  name: 'Datepicker',
  components: {
    Calendar
  },
  watch: {
    clearFlag: function (val) {
      if (val) {
        this.date = ''
        this.$emit('clearFlagDown')
      }
    }
  },
  methods: {
    // Прячет календарь
    closeDays: function () {
      this.closeDaysTimeOut = setTimeout(() => {
        this.$emit('setData', this.date)
        this.showDays = false
      }, 200)
    },
    // Показывает календарь и ставит фокус на поле ввода
    setFocusToDatepickerInput: function () {
      (this.showDays) ? clearTimeout(this.closeDaysTimeOut) : this.showDays = true
      this.$refs.datepicker__input.focus()
    },
    setDateValue: function (dateFromCalendar) {
      this.dateInput = functions.getPrettyDateAndTime(dateFromCalendar).date
    }
  },
  created: function () {
    this.setDateValue(new Date())
  }
}
</script>

<style lang="scss" scoped>
.datepicker {
  position: relative;

  &__input {
    @include def-border-gray;
    @include def-border-radius;
    padding-right: 3.5rem;
    width: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  .icon {
    font-size: 1rem;
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
      cursor: pointer;
    }
  }

  &__days {
    @include def-border-gray;
    @include def-border-radius;
    @include def-box-shadow-color($gray_dark);
    @include transition(opacity);
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: calc(100% + .25rem);
    z-index: -999;

    &_show {
      opacity: 1;
      z-index: 10;
    }
  }
}
</style>
