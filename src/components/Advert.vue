<template>
  <div class="advert" :class="[ advertClass ]">
    <h2 class="advert__header">{{ content.header }}</h2>
    <p class="advert__text">{{ content.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Advert',
  props: ['content'],
  computed: {
    advertClass () {
      return this.content.type ? 'advert_' + this.content.type : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.advert{
  border: 1px solid transparent;
  border-radius: .25rem;
  padding: 1rem;

  & + & {
    margin-top: 2rem;
  }

  &_attention {
    border-color: $cardio;
  }

  &_info {
    border-color: $primary;
  }
}
</style>
