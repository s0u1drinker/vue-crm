<template>
  <div class="video-content">
    <div class="video-grid">
      <VideoBox
        v-for="(video, index) in videos"
        :key="index"
        :video="video.video"
        :owner="video.owner"
        :showOwner="owner.length === 0"
      />
    </div>
    <button
      class="button button_outline button_outline_cardio video-content__more"
      v-if="!endFlag"
      @click="updateVideos"
    >Загрузить еще</button>
  </div>
</template>

<script>
import VideoService from '@/services/VideoService'

import VideoBox from '@/components/VideoBox'

export default {
  name: 'VideoContent',
  data: () => {
    return {
      videos: [],
      endFlag: false,
      skip: 0
    }
  },
  props: {
    owner: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateVideos: async function () {
      const newVideos = (await VideoService.getLastVideos(this.owner, this.skip)).data

      this.videos = [...this.videos, ...newVideos.videos]
      this.endFlag = newVideos.endFlag
      this.skip++
    }
  },
  components: {
    VideoBox
  },
  mounted: function () {
    this.updateVideos()
  }
}
</script>

<style lang="scss" scoped>
.video-content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;

  &__more {
    margin: 4rem auto 0;
  }
}

.video-grid {
  display: grid;
  grid-column-gap: 4%;
  grid-row-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}
</style>
