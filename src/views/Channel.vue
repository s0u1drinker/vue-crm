<template>
  <main-layout>
    <QuickAccessLinks
      offset="5"
    />
    <PageHeader
      :title="pageHeader"
      :logo="true"
    />
    <div class="channel">
      <div
        class="channel__description"
        v-html="channel.description"
      >
      </div>
      <a
        :href="channel.site"
        target="_blank"
        class="channel__site"
      >
        <i data-v-7d622f5c="" class="icon icon-link"></i> {{ channel.site }}
      </a>
    </div>
    <VideoContent
      :owner="routeID"
    />
  </main-layout>
</template>

<script>
import VideoService from '@/services/VideoService'

import MainLayout from '@/layouts/MainLayout'

import PageHeader from '@/components/PageHeader'
import QuickAccessLinks from '@/components/QuickAccessLinks'
import VideoContent from '@/components/VideoContent'

export default {
  name: 'Videos',
  data: function () {
    return {
      channel: {},
      pageHeader: 'Видео'
    }
  },
  computed: {
    routeID: function () {
      return this.$route.params.id
    }
  },
  components: {
    MainLayout,
    PageHeader,
    QuickAccessLinks,
    VideoContent
  },
  created: async function () {
    this.channel = (await VideoService.getVideoOwnerInfo(this.routeID)).data[0]
    this.pageHeader = `Видео ${this.channel.video_owner_name}`
  }
}
</script>

<style lang="scss" scoped>
.channel {
  margin-top: 1rem;

  &__site {
    color: $primary;
    display: inline-block;
    margin-top: 1rem;

    &:hover {
      color: $primary_dark;
    }
  }
}
</style>
