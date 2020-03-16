<template>
  <div class="info-panel">
    <ul class="info-panel__links">
      <li><router-link to="/events">События</router-link></li>
      <li><router-link :to="{name: 'Phonebook'}">Телефонный справочник</router-link></li>
    </ul>
    <div class="info-panel__body">
      <li v-for="eventDay in getEvents" :key="eventDay.id">{{ eventDay.groupTitle }}</li>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoPanel',
  computed: {
    ...mapGetters(['getEvents'])
  }
}
</script>

<style lang="scss" scoped>
.info-panel {
  background-color: $primary;
  padding: 1rem;
}
</style>
