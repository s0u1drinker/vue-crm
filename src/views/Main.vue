<template>
  <main-layout>
    <SearchForm />
    <Sidebar />
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import Sidebar from '@/components/Sidebar'
import SearchForm from '@/components/SearchForm'

export default {
  components: {
    MainLayout,
    Sidebar,
    SearchForm
  }
}
</script>

<style lang="scss">

</style>
