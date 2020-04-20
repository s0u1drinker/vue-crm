<template>
  <div class="m-events">
    <ul class="m-events__list">
      <li class="m-events__item" :class="['m-events__item_' + event.type]" v-for="event in getEventsToday" :key="event.id" :data-time="event.timestamp">
        <div class="m-events__time">{{ event.timeStart }}</div>
        <div class="m-events__event">
          <span class="m-events__title">{{ event.title }}</span>
          <span class="m-events__descr" v-if="event.descr">{{ event.descr }}</span>
          <span class="m-events__place" v-if="event.place">{{ event.place }}</span>
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
    ...mapGetters(['getEventsToday'])
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
    @include transition(padding);
    display: flex;
    padding: 1rem;
    position: relative;

    &:hover {

      &::before {
        width: 6.5rem;
      }

      .m-events__time {
        color: $white;
      }
    }

    &::before {
      @include transition(width);
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      top: 0;
      width: .5rem;
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

  &__time {
    @include transition(color);
    align-items: center;
    display: flex;
    font-size: 1.75rem;
    justify-content: center;
    position: relative;
    width: 4.5rem;
    z-index: 1;
  }

  &__event {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }

  &__title {
    font-weight: bold;
  }

  &__descr {
    margin-top: .25rem;
  }

  &__place {
    color: $gray_dark;
    font-style: italic;
    margin-top: .25rem;
  }
}
</style>
