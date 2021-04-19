<template>
  <div class="video-box">
    <router-link
      class="video-box__video"
      :to="`../video/${video._id}`"
    >
      <img class="video-box__poster" :src="imageLink" alt="">
      <button class="video-box__play"><i class="icon icon-play"></i></button>
      <span class="video-box__duration">{{ video.duration }}</span>
    </router-link>
    <div class="video-box__info">
      <router-link
        :to="{name: 'Video', params: {id: video._id}}"
        class="video-box__title"
      >
        {{ video.title }}
      </router-link>
      <router-link
        class="video-box__owner"
        :to="{name: 'Channel', params: {id: owner.folder}}"
        v-show="showOwner"
      >
        {{ owner.name }}
      </router-link>
      <div class="video-box__date-wrapper">
        <span>{{ prettyDate.date }}</span>
        <span>{{ prettyDate.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import VideoService from '@/services/VideoService'

export default {
  name: 'VideoBox',
  data: function () {
    return {
      prettyDate: {}
    }
  },
  props: {
    video: {
      type: Object
    },
    owner: {
      type: Object
    },
    showOwner: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters(['getFileServerIP']),
    imageLink: function () {
      const links = VideoService.getVideoLinks(this.getFileServerIP, this.owner, this.video)

      return links.image
    }
  },
  mounted: function () {
    this.prettyDate = VideoService.getPrettyVideoDate(this.video.date)
  }
}
</script>

<style lang="scss" scoped>
.video-box {
  width: 22.5rem;

  &__video {
    background-color: rgba($black, .25);
    display: flex;
    height: 12.5rem;
    overflow: hidden;
    position: relative;

    &:hover {
      cursor: pointer;

      .video-box__play {
        background-color: $cardio;
      }
    }
  }

  &__poster {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  &__play {
    @include flex-content-center;
    @include transition(background-color);
    background-color: rgba($black, .5);
    border-radius: 50%;
    color: $white;
    font-size: 2.5rem;
    height: 4rem;
    margin: auto;
    position: relative;
    width: 4rem;

    i {
      margin-right: -.35rem;
    }
  }

  &__duration {
    background-color: rgba($black, .75);
    bottom: 1rem;
    color: $white;
    font-size: 1rem;
    padding: .25rem .5rem;
    position: absolute;
    right: 1rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding: .5rem;
  }

  &__title {
    color: $black;
    font-weight: bold;

    &:hover {
      color: $cardio;
    }
  }

  &__owner {
    color: $gray_dark;
    margin-top: .5rem;

    &:hover {
      color: $dark;
    }
  }

  &__date-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
  }
}
</style>
