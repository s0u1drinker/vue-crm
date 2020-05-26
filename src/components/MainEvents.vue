<template>
  <div class="m-events">
    <ul class="m-events__list">
      <li class="m-events__item" :class="['m-events__item_' + event.type]" v-for="event in getEvents" :key="event.id">
        <div class="m-events__time">{{ getPrettyTime(event.eventDate) }}</div>
        <div class="m-events__event">
          <span class="m-events__title">{{ event.title }}</span>
          <span class="m-events__descr" v-if="event.description">{{ event.description }}</span>
          <span class="m-events__place" v-if="event.place">{{ event.place }}</span>
        </div>
        <i class="icon" :class="['icon-' + event.icon]"></i>
      </li>
    </ul>
  </div>
</template>

<script>
// TODO:
// 1. Placeholder на события.
import { mapGetters, mapMutations } from 'vuex'

import EventService from '@/services/EventService'

export default {
  name: 'MainEvents',
  computed: {
    ...mapGetters(['getEvents'])
  },
  methods: {
    ...mapMutations(['setEvents']),
    // Возвращает время в красивом формате
    getPrettyTime: function (date) {
      const currentDate = new Date(date)
      let hours = currentDate.getHours()
      let minutes = currentDate.getMinutes()

      hours = (hours < 10) ? `0${hours}` : hours
      minutes = (minutes < 10) ? `0${minutes}` : minutes

      return `${hours}:${minutes}`
    }
  },
  created: async function () {
    const response = await EventService.getEventsForDay({
      eventDate: new Date()
    })

    this.setEvents(response.data)
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
    overflow: hidden;
  }

  &__item {
    @include transition(padding);
    display: flex;
    padding: 1rem 4.5rem 1rem 1rem;
    position: relative;

    &:hover {

      &::before {
        width: 6.5rem;
      }

      .m-events__time {
        color: $white;
      }

      .icon {
        right: 1rem;
      }
    }

    &::before {
      @include transition(width);
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      top: 0;
      width: 0;
      z-index: -1;
    }

    & + & {
      border-top: 1px solid $border_color;
    }

    &_high {

      &::before {
        background-color: $cardio;
      }

      .icon {
        color: $cardio;
      }
    }

    &_med {

      &::before {
        background-color: $warning;
      }

      .icon {
        color: $warning;
      }
    }

    &_low {

      &::before {
        background-color: $success;
      }

      .icon {
        color: $success;
      }
    }

    .icon {
      @include transition(right);
      font-size: 2.5rem;
      position: absolute;
      right: -4.5rem;
      top: 50%;
      transform: translateY(-50%);
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
