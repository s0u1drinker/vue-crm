<template>
  <div class="events">
    <div class="events__list">
      {{getEvents}}
    </div>
    <Calendar v-on:selectdate="getEventListToDate" />
  </div>
</template>

<script>
// TOOD:
// 1. Placeholder для списка событий;
// 2. Заглушка на случай, если событий нет.
import { mapGetters, mapMutations } from 'vuex'

import EventService from '@/services/EventService'

import Calendar from '@/components/Calendar'

export default {
  name: 'EventsDriver',
  data: function () {
    return {
      listOfEvents: []
    }
  },
  computed: {
    ...mapGetters(['getEvents'])
  },
  components: {
    Calendar
  },
  methods: {
    ...mapMutations(['setEvents']),
    // Обновляет данные списка событий в соответствии с выбранной датой
    getEventListToDate: async function (eventDate) {
      const listOfEvents = (await EventService.getEventsForDay({ eventDate })).data

      this.setEvents(listOfEvents)
    }
  }
}
</script>

<style lang="scss" scoped>
.events {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}
</style>
