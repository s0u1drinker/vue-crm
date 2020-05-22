<template>
  <div class="calendar">
    <div class="calendar__header">
      <div class="calendar__header-day">{{ selectedDate.getDate() }}</div>
      <div class="calendar__header-day-info">
        <span class="calendar__header-weekday">{{ days[selectedDate.getDay()] }}</span>
        <span class="calendar__header-month">{{ monthsDeclension[selectedDate.getMonth()] }} {{ selectedDate.getFullYear() }}</span>
      </div>
    </div>
    <div class="calendar__selector">
      <button
        class="button"
        @click="toggleMonth(-1)"
      ><i class="icon icon-chevron"></i></button>
      <button class="button">{{ selectedDate.getFullYear() }}</button>
      <button class="button">{{ months[selectedDate.getMonth()] }}</button>
      <button
        class="button"
        @click="toggleMonth(1)"
      ><i class="icon icon-chevron icon-chevron_right"></i></button>
    </div>
    <div class="calendar__weekdays">
      <div
        class="calendar__day"
        :class="[(index > 4) ? 'calendar__day_weekend' : '']"
        v-for="(day, index) in daysAttr"
        :key="index"
      >{{day}}</div>
    </div>
    <div class="calendar__days">
      <div
        class="calendar__day"
        :class="[(index > 4) ? 'calendar__day_weekend' : '']"
        v-for="(day, index) in daysInMonthWithNeighbors"
        :key="index"
      >{{day}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data: () => {
    return {
      days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      daysAttr: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthsDeclension: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      selectedDate: new Date()
    }
  },
  computed: {
    daysInMonthWithNeighbors: function () {
      const daysArray = []
      const dayOfPreviousMonth = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() - 1, 1)
      const currentMonthDays = this.numberOfDaysInMonth(this.selectedDate)
      const previousMonthDays = this.numberOfDaysInMonth(dayOfPreviousMonth)

      let startDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1).getDay()
      const endDay = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), currentMonthDays).getDay()
      let i

      if (startDay === 0) {
        startDay = 6
      } else if (startDay === 1) {
        startDay = 7
      } else {
        startDay--
      }

      for (i = 0; i < startDay; i++) {
        daysArray.unshift(previousMonthDays - i)
      }

      for (i = 1; i <= currentMonthDays; i++) {
        daysArray.push(i)
      }

      for (i = 1; i <= (7 - endDay); i++) {
        daysArray.push(i)
      }

      if (daysArray.length < 42) {
        for (let j = 0; j < 7; j++) {
          daysArray.push(i + j)
        }
      }

      return daysArray
    }
  },
  methods: {
    numberOfDaysInMonth: function (date) {
      return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate()
    },
    toggleMonth: function (direction) {
      this.selectedDate = new Date(this.selectedDate.setMonth(this.selectedDate.getMonth() + direction, 1))
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {}
</style>
