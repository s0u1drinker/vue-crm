<template>
  <main-layout>
    <QuickAccessLinks
      offset="5"
    />
    <PageHeader
      title="Список мероприятий"
      :logo="true"
    />
    <EventsDriver />
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import PageHeader from '@/components/PageHeader'
import QuickAccessLinks from '@/components/QuickAccessLinks'
import EventsDriver from '@/components/EventsDriver'

export default {
  name: 'Events',
  components: {
    MainLayout,
    PageHeader,
    QuickAccessLinks,
    EventsDriver
  }
}
</script>

<style lang="scss">

</style>
