<template>
  <div class="info-panel">
    <ul class="info-panel__links">
      <li v-for="(link, linkIndex) in getInfoPanelLinks" :key="link.id">
        <router-link class="info-panel__link" :class="[ linkIndex === 0 ? 'info-panel__link_active' : '' ]" :to="{name: link.moduleName}">{{ link.title }}</router-link>
      </li>
    </ul>
    <div class="info-panel__body">
      <div class="info-panel__box" v-for="eventDay in getEvents" :key="eventDay.id">
        <h4>{{ eventDay.groupTitle }}</h4>
        <ul class="info-panel__events">
          <li class="info-panel__event" v-for="event in eventDay.events" :key="event.id">
            <span class="info-panel__event-time">{{ event.time }}</span>
            <span class="info-panel__event-place">{{ '(' + event.place + ')' }}</span>
            <span class="info-panel__event-title">{{ event.title }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="info-panel__adverts">
      <Advert v-for="advert in getAdverts" :key="advert.id" :content="advert" />
    </div>
  </div>
</template>

<script>
import Advert from '@/components/Advert'
import { mapGetters } from 'vuex'

export default {
  name: 'InfoPanel',
  components: {
    Advert
  },
  computed: {
    ...mapGetters(['getEvents', 'getInfoPanelLinks', 'getAdverts'])
  }
}
</script>

<style lang="scss" scoped>
.info-panel {
  margin-top: 4rem;

  &__links {
    display: flex;

    li {
      display: flex;
      overflow: hidden;
      position: relative;

      & + li {
        margin-left: 2rem;
      }
    }
  }

  &__link {
    color: $primary_dark;
    padding: .25rem 0;

    &_active {
      border-bottom: 2px solid $cardio;
    }

    &:hover {
      color: $cardio;
    }
  }

  &__body {
    margin-top: 2rem;
  }

  &__box {

    & + & {
      margin-top: 1rem;
    }
  }

  &__events {
    margin-top: .5rem;
  }

  &__event {
    display: flex;
    padding: .25rem 0;

    &:hover {
      cursor: default;

      .info-panel__event-time, .info-panel__event-place {
        color: $cardio;
      }
    }

    span {
      @include transition(color);
    }

    &-time {
      color: $gray_dark;
    }

    &-place {
      color: $gray_dark;
      margin-left: .25rem;
    }

    &-title {
      margin-left: 1rem;
    }
  }

  &__adverts {
    display: flex;
    flex-wrap: wrap;
    margin-top: 4rem;

    .advert {
      margin-left: 4%;
      width: 30%;

      &:nth-child(3n+1) {
        margin-left: 0;
      }

      &:nth-child(n+4) {
        margin-top: 4%;
      }
    }
  }
}
</style>
