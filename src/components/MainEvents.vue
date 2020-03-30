<template>
  <div class="m-events">
    <ul class="m-events__list">
      <li class="m-events__item" v-for="event in getEvents" :key="event.id">
        <span>{{ getEventDay(event.timestamp) }}</span>
        <span>{{ getEventMonth(event.timestamp) }}</span>
        <span class="m-events__title">{{ event.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'MainEvents',
  methods: {
    getEventDay (timestamp) {
      return new Date(timestamp * 1000).getDate()
    },
    getEventMonth (timestamp) {
      return this.months[new Date(timestamp * 1000).getMonth()]
    }
  },
  computed: {
    ...mapState(['months']),
    ...mapGetters(['getEvents']),
    eventDay: function (id) {
      return this.getEvents
    }
  }
}
</script>

<style lang="scss" scoped>
.m-events {}
</style>
