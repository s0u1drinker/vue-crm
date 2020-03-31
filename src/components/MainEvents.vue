<template>
  <div class="m-events">
    <ul class="m-events__list">
      <li class="m-events__item" v-for="event in getEvents" :key="event.id">
        <span class="m-events__day">{{ getEventDatetime(event.id).day }}</span>
        <span class="m-events__month">{{ getEventDatetime(event.id).month }}</span>
        <span class="m-events__title">{{ event.title }}</span>
        <span class="m-events__place">{{ event.place }}</span>
        <span class="m-events__time">{{ getEventDatetime(event.id).timeStart }}</span>
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
      event: {}
    }
  },
  computed: {
    ...mapGetters(['getEvents', 'getEventDatetime'])
  }
}
</script>

<style lang="scss" scoped>
.m-events {}
</style>
