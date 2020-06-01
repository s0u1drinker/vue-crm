<template>
  <main-layout>
    <QuickAccessLinks offset="8" />
    <SearchForm />
    <MainDocuments />
    <Adverts />
    <Events :showOnMainPage="true" :eventDate="new Date()" />
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import QuickAccessLinks from '@/components/QuickAccessLinks'
import SearchForm from '@/components/SearchForm'
import Events from '@/components/Events'
import Adverts from '@/components/Adverts'
import MainDocuments from '@/components/MainDocuments'

export default {
  components: {
    MainLayout,
    QuickAccessLinks,
    SearchForm,
    Events,
    Adverts,
    MainDocuments
  }
}
</script>
