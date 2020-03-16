<template>
  <main-layout>
    <SearchForm />
    <InfoPanel />
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import SearchForm from '@/components/SearchForm'
import InfoPanel from '@/components/InfoPanel'

export default {
  components: {
    MainLayout,
    SearchForm,
    InfoPanel
  }
}
</script>

<style lang="scss">

</style>
