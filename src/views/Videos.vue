<template>
  <main-layout>
    <QuickAccessLinks
      offset="5"
    />
    <PageHeader
      title="Видео"
      :logo="true"
    />
    <VideoContent />
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

import PageHeader from '@/components/PageHeader'
import QuickAccessLinks from '@/components/QuickAccessLinks'
import VideoContent from '@/components/VideoContent'

export default {
  name: 'Videos',
  components: {
    MainLayout,
    PageHeader,
    QuickAccessLinks,
    VideoContent
  }
}
</script>

<style lang="scss" scoped>

</style>
