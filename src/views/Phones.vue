<template>
  <main-layout>
    <QuickAccessLinks
      offset="5"
    />
    <PageHeader
      title="Телефонный справочник"
      logo=true
    />
    <Phonebook />
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import PageHeader from '@/components/PageHeader'
import QuickAccessLinks from '@/components/QuickAccessLinks'
import Phonebook from '@/components/Phonebook'

export default {
  name: 'Phones',
  components: {
    MainLayout,
    PageHeader,
    QuickAccessLinks,
    Phonebook
  }
}
</script>

<style lang="scss" scoped>

</style>
