<template>
  <div class="player">
    <video
      class="player__player"
      :poster="links.image"
      controls
    >
      <source :src="links.mp4" type="video/mp4">
      <source :src="links.webm" type="video/webm">
      <source :src="links.ogv" type="video/ogg">
    </video>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    links: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  background-color: $black;
  display: flex;
  position: relative;

  &__player {
    height: 720px;
    width: 1280px;
  }
}
</style>
