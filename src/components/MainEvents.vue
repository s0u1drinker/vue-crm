<template>
  <div class="m-events">
    <ul class="m-events__list">
      <li class="m-events__item" :class="['m-events__item_' + event.type]" v-for="event in getEvents" :key="event.id" :data-time="event.timestamp">
        <div class="m-events__day-wrapper">
          <span class="m-events__day">{{ event.day }}</span>
          <span class="m-events__month">{{ months[event.month] }}</span>
        </div>
        <div class="m-events__event">
          <span class="m-events__title">{{ event.title }}</span>
          <span class="m-events__place" v-if="event.place">{{ event.place }}</span>
          <span class="m-events__time">Начало в: {{ event.timeStart }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainEvents',
  data: function () {
    return {
      months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    }
  },
  computed: {
    ...mapGetters(['getEvents'])
  }
}
</script>

<style lang="scss" scoped>
.m-events {
  $border_color: $gray;
  margin-top: 4rem;

  &__list {
    @include def-border-radius;
    @include def-box-shadow;
    border: 1px solid $border_color;
  }

  &__item {
    $hoverOffset: .5rem;
    $widthBefore: .25rem;
    @include transition(padding);
    display: flex;
    padding: 1rem 1rem 1rem calc(1rem + #{$widthBefore});
    position: relative;

    &:hover {
      padding-left: calc(1rem + #{$hoverOffset + $widthBefore});

      &::before {
        width: calc(#{$widthBefore + $hoverOffset});
      }
    }

    &::before {
      @include transition(width);
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      top: 0;
      width: $widthBefore;
    }

    & + & {
      border-top: 1px solid $border_color;
    }

    &_high {

      &::before {
        background-color: $cardio;
      }
    }

    &_med {

      &::before {
        background-color: $warning;
      }
    }

    &_low {

      &::before {
        background-color: $success;
      }
    }
  }

  &__day-wrapper {}

  &__day {}

  &__month {}

  &__event {}

  &__title {}

  &__place {}

  &__time {}
}
</style>
