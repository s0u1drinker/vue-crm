<template>
  <div
    class="calendar"
    :class="[ cls ]"
  >
    <div class="calendar__header">
      <span class="calendar__header-weekday" :class="[selectedDate.getDay() > 5 ? 'color_cardio' : 'color_gray']">{{ days[selectedDate.getDay()] }}</span>
      <span class="calendar__header-day">{{ `${selectedDate.getDate()} ${monthsDeclension[selectedDate.getMonth()].toLowerCase()} ${selectedDate.getFullYear()}` }}</span>
    </div>
    <div class="calendar__selector">
      <button class="button calendar__selector-arrow" @click="toggleMonth(-1)"><i class="icon icon-chevron"></i></button>
      <button class="button calendar__selector-date" @click="showPanel = !showPanel">{{ months[showDate.getMonth()] }}</button>
      <button class="button calendar__selector-date" @click="showPanel = !showPanel">{{ showDate.getFullYear() }}</button>
      <button class="button calendar__selector-arrow" @click="toggleMonth(1)"><i class="icon icon-chevron icon-chevron_right"></i></button>
    </div>
    <div class="calendar__weekdays">
      <div
        class="calendar__weekday"
        :class="[(index > 4) ? 'calendar__day_weekend' : '']"
        v-for="(day, index) in daysAttr"
        :key="index"
      >{{day}}</div>
    </div>
    <div class="calendar__days">
      <div
        class="calendar__day"
        :class="getDayClasses(day)"
        v-for="(day, index) in daysInMonthWithNeighbors"
        @click="selectThisDay(day)"
        :key="index"
      >{{ day.getDate() }}</div>
    </div>
    <div class="calendar__footer">
      <button class="button calendar__selector-date" @click="selectThisDay(today)">Сегодня</button>
    </div>
    <div
      class="calendar__panel"
      v-show="showPanel"
    >
      <div class="calendar__selector">
        <button class="button calendar__selector-arrow" @click="toggleYear(-1)"><i class="icon icon-chevron"></i></button>
        <span>{{ newYear }}</span>
        <button class="button calendar__selector-arrow" @click="toggleYear(1)"><i class="icon icon-chevron icon-chevron_right"></i></button>
      </div>
      <div
        class="calendar__panel-item"
        :class="{ 'calendar__panel-item_current': checkCurrentMonth(index), 'calendar__panel-item_today': checkTodayMonth(index) }"
        v-for="(month, index) in months"
        :key="index"
        @click="setNewDate(index)"
      >{{ month }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
    cls: {
      type: Array,
      default: () => {
        return ['']
      }
    }
  },
  data: () => {
    return {
      days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      daysAttr: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthsDeclension: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      selectedDate: new Date(),
      showDate: new Date(),
      today: new Date(),
      showPanel: false,
      newYear: ''
    }
  },
  watch: {
    showPanel: function () {
      if (this.showPanel) {
        this.newYear = this.showDate.getFullYear()
      }
    }
  },
  computed: {
    // Формирует массив с днями месяца, включая соседние
    daysInMonthWithNeighbors: function () {
      const daysArray = []
      const previousMonth = this.showDate.getMonth() - 1
      const dayOfPreviousMonth = new Date(this.showDate.getFullYear(), previousMonth, 1)
      const previousMonthDays = this.numberOfDaysInMonth(dayOfPreviousMonth)
      const currentMonthDays = this.numberOfDaysInMonth(this.showDate)
      const endDay = new Date(this.showDate.getFullYear(), this.showDate.getMonth(), currentMonthDays).getDay()
      const nextMonth = this.showDate.getMonth() + 1

      let startDay = new Date(this.showDate.getFullYear(), this.showDate.getMonth(), 1).getDay()
      let i

      if (startDay === 0) {
        startDay = 6
      } else if (startDay === 1) {
        startDay = 7
      } else {
        startDay--
      }

      // Заполняем дни предыдущего месяца
      for (i = 0; i < startDay; i++) {
        daysArray.unshift(new Date(this.showDate.getFullYear(), previousMonth, previousMonthDays - i))
      }

      // Заполняем дни текущего месяца
      for (i = 1; i <= currentMonthDays; i++) {
        daysArray.push(new Date(this.showDate.getFullYear(), this.showDate.getMonth(), i))
      }

      // Заполняем дни следующего месяца
      for (i = 1; i <= (7 - endDay); i++) {
        daysArray.push(new Date(this.showDate.getFullYear(), nextMonth, i))
      }

      if (daysArray.length < 42) {
        for (let j = 0; j < 7; j++) {
          daysArray.push(new Date(this.showDate.getFullYear(), nextMonth, i + j))
        }
      }

      return daysArray
    }
  },
  methods: {
    // Возвращает количество дней в месяце
    numberOfDaysInMonth: function (date) {
      return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate()
    },
    // "Переключает" месяц в календаре
    toggleMonth: function (direction) {
      this.showDate = new Date(this.showDate.getFullYear(), this.showDate.getMonth() + direction, 1)
    },
    // Возвращает актуальные классы для текущей даты
    getDayClasses: function (day) {
      const classes = []

      if (this.selectedDate.toDateString() === day.toDateString()) {
        classes.push('calendar__day_selected')
      }

      if (this.showDate.getMonth() !== day.getMonth()) {
        classes.push('calendar__day_neighbor')
      } else {
        const weekDay = day.getDay()

        if (!weekDay || weekDay === 6) { classes.push('calendar__day_weekend') }
      }

      if (this.today.toDateString() === day.toDateString()) { classes.push('calendar__day_today') }

      return classes
    },
    // Выбирает день
    selectThisDay: function (day) {
      if (day.getMonth() !== this.showDate.getMonth()) {
        this.showDate = day
      }

      this.selectedDate = day
      this.$emit('selectdate', day)
    },
    // Устанавливает месяц
    setNewDate: function (month) {
      this.showDate = new Date(this.newYear, month, 1)
      this.showPanel = false
    },
    // "Переключает" год в календаре
    toggleYear: function (direction) {
      this.newYear = (this.newYear ? this.newYear : this.showDate) + direction
    },
    // Флаг для выделения выбранного в календаре месяца
    checkCurrentMonth: function (month) {
      return ((month === this.showDate.getMonth()) && (this.newYear === this.showDate.getFullYear()))
    },
    // Флаг для выделения текущего месяца
    checkTodayMonth: function (month) {
      return ((month === this.today.getMonth()) && (this.newYear === this.today.getFullYear()))
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  $padding: 1rem;
  @include def-border-gray;
  @include def-border-radius;
  @include def-box-shadow;
  background-color: $white;
  position: relative;
  width: calc(40px * 7 + 32px);

  button {
    &:hover {
      background-color: $primary_lighten;
    }
  }

  &__header {
    align-items: center;
    border-bottom: 1px solid $gray;
    display: flex;
    flex-direction: column;
    padding: $padding;

    &-weekday {
      font-style: italic;
    }

    &-day {
      font-size: 1.25rem;
      margin-top: .25rem;
    }
  }

  &__selector {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: $padding;

    &-arrow {
      @include flex-content-center;
      border-radius: 50%;
      height: 2.25rem;
      padding: 0;
      width: 2.25rem;
    }

    &-date {
      background-color: $gray_light;
      padding: .5rem $padding;
    }
  }

  &__weekdays,
  &__days{
    display: flex;
  }

  &__weekdays {
    border-bottom: 1px solid $gray_light;
    border-top: 1px solid $gray_light;
    padding: 0 $padding;
    cursor: default;
  }

  &__weekday,
  &__day {
    $size: 2.5rem;
    @include flex-content-center;
    height: $size;
    width: $size;
  }

  &__days {
    flex-wrap: wrap;
    padding: $padding;
  }

  &__day {
    @include def-border-radius;
    background-color: transparent;
    box-sizing: border-box;
    border: 1px solid transparent;

    &:hover {
      border-color: $cardio;
      cursor: pointer;
    }

    &_neighbor {
      color: $gray;
    }

    &_weekend {
      color: $cardio;
    }

    &_today {
      background-color: $primary_lighten;
    }

    &_selected {
      background-color: $cardio;
      color: $white;
      cursor: default;

      &:hover {
        pointer-events: none;
      }

      &.calendar__day_neighbor {
        background-color: $gray;
      }
    }
  }

  &__footer {
    justify-content: center;
    border-top: 1px solid $gray_light;
    display: flex;
    padding: $padding;
  }

  &__panel {
    align-content: space-between;
    background-color: $white;
    border-radius: inherit;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    left: 0;
    padding: $padding*2 $padding;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;

    &-item {
      @include transition(background-color);
      border: 1px solid transparent;
      border-radius: inherit;
      box-sizing: border-box;
      padding: .5rem 0;
      text-align: center;
      width: 40%;

      &:hover {
        background-color: $gray_light;
        cursor: pointer;
      }

      &_current {
        border-color: $cardio;
      }

      &_today {
        background-color: $primary_lighten;
      }
    }

    .calendar__selector {
      width: 100%;
    }
  }
}
</style>
