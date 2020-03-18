<template>
  <div class="advert" :class="[ advertClass ]">
    <h2 class="advert__header"><i class="icon" :class="[ iconClass ]"></i> {{ content.header }}</h2>
    <p class="advert__text" v-html="content.text"></p>
  </div>
</template>

<script>
export default {
  name: 'Advert',
  props: ['content'],
  computed: {
    advertClass () {
      return this.content.type ? 'advert_' + this.content.type : ''
    },
    iconClass () {
      return this.content.type ? 'icon-' + this.content.type : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.advert{
  @include def-border-radius;
  box-shadow: 0 .25rem .25rem $gray;
  box-sizing: border-box;
  border: 2px solid transparent;
  padding: 1rem;

  &_attention {
    border-color: $cardio;

    .icon {
      color: $cardio;
    }
  }

  &_warning {
    border-color: $warning;

    .icon {
      color: $warning;
    }
  }

  &_info {
    border-color: $primary;

    .icon {
      color: $primary;
    }
  }

  &_success {
    border-color: $success;

    .icon {
      color: $success;
    }
  }

  .icon {
    font-size: 1.375rem;
  }

  &__header {}

  &__text {
    margin-top: 1rem;
  }
}
</style>
