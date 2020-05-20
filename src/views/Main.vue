<template>
  <main-layout>
    <QuickAccessLinks offset="8" />
    <SearchForm />
    <MainEvents />
    <Adverts />
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import QuickAccessLinks from '@/components/QuickAccessLinks'
import SearchForm from '@/components/SearchForm'
import MainEvents from '@/components/MainEvents'
import Adverts from '@/components/Adverts'

export default {
  components: {
    MainLayout,
    QuickAccessLinks,
    SearchForm,
    MainEvents,
    Adverts
  }
}
</script>
