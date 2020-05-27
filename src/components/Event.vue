<template>
  <div
    class="event"
    :class="[ event.type ? `event_${event.type}` : '' ]"
  >
    <span class="event__time">{{ getPrettyTime(event.eventDate) }}</span>
    <h3 class="event__title">{{ event.title }}</h3>
    <p class="event__descr" v-if="event.description">{{ event.description }}</p>
    <p class="event__place" v-if="event.place">Место проведения: {{ event.place }}</p>
    <p class="event__duration" v-if="event.duration">Продолжительность: ~{{ getPrettyDuration(event.duration) }}</p>
    <i
      class="icon"
      :class="[ event.icon ? `icon-${event.icon}` : '' ]"
    ></i>
  </div>
</template>

<script>
// TODO:
// 1. Индикация продолжительности события;
// 2. Новый дизайн для событий на главной.
export default {
  name: 'Event',
  props: ['event'],
  methods: {
    // Возвращает время в красивом формате
    getPrettyTime: function (date) {
      const currentDate = new Date(date)
      let hours = currentDate.getHours()
      let minutes = currentDate.getMinutes()

      hours = (hours < 10) ? `0${hours}` : hours
      minutes = (minutes < 10) ? `0${minutes}` : minutes

      return `${hours}:${minutes}`
    },
    // Возвращает продолжительность в красивом виде
    getPrettyDuration: function (minutes) {
      return minutes
    }
  }
}
</script>

<style lang="scss" scoped>
.event {
  $color_high: $cardio;
  $color_med: $warning;
  $color_low: $success;
  border-left: .25rem solid;
  position: relative;

  &_high {
    border-left-color: $color_high;

    .icon {
      color: $color_high;
    }
  }

  &_med {
    border-left-color: $color_med;

    .icon {
      color: $color_med;
    }
  }

  &_low {
    border-left-color: $color_low;

    .icon {
      color: $color_low;
    }
  }

  &__place,
  &__duration {
    color: $gray_dark;
    font-style: italic;
  }

  .main-events & {
    padding: 1rem 4.5rem 1rem 7rem;

    &:hover {
      .icon {
        right: 1rem;
      }
    }

    &__time {
      @include vertical-centering;
      font-size: 2rem;
      left: 1rem;
      position: absolute;
    }

    &__descr {
      margin-top: .25rem;
    }

    &__place {
      margin-top: .5rem;
    }

    .icon {
      @include transition(right);
      @include vertical-centering;
      font-size: 2.5rem;
      position: absolute;
      right: -4.5rem;
    }
  }

  .events & {
    $bgEvent: $white;
    @include def-border-radius;
    @include def-box-shadow;
    background-color: $bgEvent;
    padding: 2rem 1rem 1rem;

    &:hover {
      .icon {
        opacity: 1;
      }
    }

    &__time {
      @include def-border-gray;
      @include def-border-radius;
      @include def-box-shadow;
      background-color: $bgEvent;
      font-size: 1.5rem;
      left: -1.5rem;
      padding: .5rem .75rem;
      position: absolute;
      top: -1.5rem;
    }

    &__descr {
      margin-top: .5rem;
    }

    &__place {
      margin-top: 1rem;
    }

    .icon {
      @include transition(opacity);
      bottom: .5rem;
      font-size: 3rem;
      opacity: .25;
      position: absolute;
      right: .5rem;
    }
  }
}
</style>
