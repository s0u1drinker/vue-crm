<template>
  <fragment>
    <Placeholder text="Ищем события..." v-if="dataIsUpdated" />
    <div
      :class="eventsClass"
      v-else-if="!dataIsUpdated && Object.keys(getEvents).length"
    >
      <div
        :class="`${eventsClass}__item`"
        v-for="event in getEvents"
        :key="event._id"
      >
        <Event :event="event" />
      </div>
    </div>
    <EmptyData v-else/>
  </fragment>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import EventService from '@/services/EventService'

import Event from '@/components/Event'
import Placeholder from '@/components/Placeholder'
import EmptyData from '@/components/EmptyData'

export default {
  name: 'Events',
  data: function () {
    return {
      dataIsUpdated: true
    }
  },
  props: {
    eventDate: Date,
    showOnMainPage: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Event,
    Placeholder,
    EmptyData
  },
  computed: {
    ...mapGetters(['getEvents']),
    eventsClass: function () {
      return this.showOnMainPage ? 'main-events' : 'events'
    }
  },
  watch: {
    eventDate: function () {
      this.getEventListToDate()
    }
  },
  methods: {
    ...mapMutations(['setEvents']),
    // Обновляет данные списка событий в соответствии с выбранной датой
    getEventListToDate: async function () {
      let listOfEvents = {}

      this.dataIsUpdated = true
      listOfEvents = (await EventService.getEventsForDay({ eventDate: this.eventDate })).data
      this.dataIsUpdated = false
      this.setEvents(listOfEvents)
    }
  },
  created: function () {
    this.getEventListToDate(this.eventDate)
  }
}
</script>

<style lang="scss" scoped>
.events {
  display: flex;
  flex-direction: column;

  .calendar {
    margin-left: 3rem;
  }

  &__item {
    overflow: hidden;
    padding: 2.5rem 1.5rem 1.5rem 2.5rem;
    position: relative;

    &:hover {
      background-color: $gray_light;
    }
  }
}

.main-events {
  $border_color: $gray;
  @include def-border-radius;
  @include def-box-shadow;
  border: 1px solid $border_color;
  margin-top: 4rem;
  overflow: hidden;

  &__item {
    & + & {
      border-top: 1px solid $border_color;
    }
  }
}
</style>
