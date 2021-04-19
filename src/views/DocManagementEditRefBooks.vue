<template>
  <main-layout>
    <QuickAccessLinks
      offset="5"
    />
    <PageHeader
      title="Редактирование справочников (документооборот)"
      :logo="true"
    />
    Edit ref books
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import PageHeader from '@/components/PageHeader'
import QuickAccessLinks from '@/components/QuickAccessLinks'

export default {
  name: 'DocManagementEditRefBooks',
  components: {
    MainLayout,
    PageHeader,
    QuickAccessLinks
  }
}
</script>

<style lang="scss" scoped>
</style>
