<template>
  <main-layout>
    <QuickAccessLinks
      offset="5"
    />
    <PageHeader
      title="Добавить журнал (документооборот)"
      :logo="true"
    />
    Add new register
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import PageHeader from '@/components/PageHeader'
import QuickAccessLinks from '@/components/QuickAccessLinks'

export default {
  name: 'DocManagementAddRegister',
  components: {
    MainLayout,
    PageHeader,
    QuickAccessLinks
  }
}
</script>

<style lang="scss" scoped>
</style>
