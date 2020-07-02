<template>
  <main-layout>
    <QuickAccessLinks offset="8" />
    <SearchForm />
    <SearchData />
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import QuickAccessLinks from '@/components/QuickAccessLinks'
import SearchForm from '@/components/SearchForm'
import SearchData from '@/components/SearchData'

export default {
  name: 'Search',
  components: {
    MainLayout,
    QuickAccessLinks,
    SearchForm,
    SearchData
  }
}
</script>
