<template>
  <main-layout>
    <QuickAccessLinks
      offset="5"
    />
    <PageHeader
      title="Поиск данных (документооборот)"
      :logo="true"
    />
    Search data
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import PageHeader from '@/components/PageHeader'
import QuickAccessLinks from '@/components/QuickAccessLinks'

export default {
  name: 'DocManagementSearch',
  components: {
    MainLayout,
    PageHeader,
    QuickAccessLinks
  }
}
</script>

<style lang="scss" scoped>
</style>
