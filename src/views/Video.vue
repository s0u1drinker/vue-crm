<template>
  <video-player-layout>
    <QuickAccessLinks :logo="true" />
    <div class="video">
      <Player
        :links="videoLinks"
      />
      <div class="video__info">
        <div class="video__header-wrapper">
          <h2 class="video__title">{{ video.videos.title }}</h2>
          <div class="video__description">{{ video.videos.description }}</div>
        </div>
        <ul class="video__info-list">
          <li class="video__info-item">Организатор: <router-link class="video__owner" :to="{name: 'Channel', params: {id: video.owner.folder}}">{{ video.owner.name }}</router-link></li>
          <li class="video__info-item">Дата проведения: <span class="color_gray_dark">{{ `${prettyDate.date} в ${prettyDate.time}` }}</span></li>
          <li class="video__info-item">Профиль: <span class="color_gray_dark">{{ video.videos.profile }}</span></li>
          <li class="video__info-item">Мероприятие: <span class="color_gray_dark">{{ video.videos.type }}</span></li>
        </ul>
      </div>
    </div>
  </video-player-layout>
</template>

<script>
import { mapGetters } from 'vuex'

import VideoService from '@/services/VideoService'

import VideoPlayerLayout from '@/layouts/VideoPlayerLayout'

import QuickAccessLinks from '@/components/QuickAccessLinks'
import Player from '@/components/Player'

export default {
  name: 'Videos',
  data: function () {
    return {
      video: {},
      videoLinks: {},
      prettyDate: {}
    }
  },
  computed: {
    ...mapGetters(['getFileServerIP'])
  },
  components: {
    VideoPlayerLayout,
    QuickAccessLinks,
    Player
  },
  mounted: async function () {
    this.video = (await VideoService.getVideoInfo(this.$route.params.id)).data[0]
    this.videoLinks = VideoService.getVideoLinks(this.getFileServerIP, this.video.owner, this.video.videos)
    this.prettyDate = VideoService.getPrettyVideoDate(this.video.videos.date)
  }
}
</script>

<style lang="scss" scoped>
.video {
  margin-top: 2rem;

  &__owner {
    color: $gray_dark;

    &:hover {
      color: $cardio;
    }
  }

  &__header-wrapper {
    margin-top: 2rem;
    padding-bottom: 2rem;
    position: relative;

    &::after {
      content: "";
      background: linear-gradient(to right, $cardio, transparent 80%);
      bottom: 0;
      display: block;
      height: 1px;
      position: absolute;
      width: 50%;
    }
  }

  &__description {
    margin-top: .5rem;
  }

  &__info {
    &-list {
      margin-top: 2rem;
    }

    &-item {
      & + & {
        margin-top: .5rem;
      }
    }
  }
}
</style>
