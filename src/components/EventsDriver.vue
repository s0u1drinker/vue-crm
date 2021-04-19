<template>
  <div class="events-wrapper">
    <div class="events-wrapper__box">
      <Events :eventDate="dateForEvents" />
    </div>
    <Calendar v-on:selectdate="setDateForEvents" />
  </div>
</template>

<script>
import Calendar from '@/components/Calendar'
import Events from '@/components/Events'

export default {
  name: 'EventsDriver',
  data: () => {
    return {
      dateForEvents: new Date()
    }
  },
  components: {
    Calendar,
    Events
  },
  methods: {
    setDateForEvents: function (date) {
      this.dateForEvents = date
    }
  }
}
</script>

<style lang="scss" scoped>
.events-wrapper {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  &__box {
    width: 100%;
  }

  .calendar {
    margin-left: 3rem;
  }
}
</style>
