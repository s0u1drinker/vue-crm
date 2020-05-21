<template>
  <div class="events">
    <div class="events__list">
      List of events
    </div>
    <Calendar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Calendar from '@/components/Calendar'

export default {
  name: 'EventsDriver',
  computed: {
    ...mapGetters(['getEvents'])
  },
  components: {
    Calendar
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
