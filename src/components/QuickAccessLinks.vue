<template>
  <div class="qa-links" :class="classOffset">
    <ul class="qa-links__list">
      <li
        class="qa-links__item"
        v-for="link in quickAccessLinks"
        :key="link.id"
      >
        <router-link
          class="qa-links__link"
          :to="{name: link.module_name}"
        >{{ link.title }}</router-link>
      </li>
  </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'QuickAccessLinks',
  props: ['offset'],
  computed: {
    ...mapGetters(['getQuickAccessLinks']),
    quickAccessLinks: function () {
      const route = this.$route.name

      return this.getQuickAccessLinks.filter((link) => ((link.module_name !== route) && (+link.quick_access)))
    },
    classOffset: function () {
      return this.offset ? `qa-links_offset_${this.offset}` : false
    }
  }
}
</script>

<style lang="scss" scoped>
.qa-links {

  &_offset {

    &_5 {
      margin-left: 5rem;
    }

    &_8 {
      margin-left: 8rem;
    }
  }

  &__list {
    display: flex;
  }

  &__item {

    & + & {
      margin-left: 1.25rem;
    }
  }

  &__link {
    @include transition(color);
    color: $primary;

    &:hover {
      color: $cardio;
    }
  }
}
</style>
