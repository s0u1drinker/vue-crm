<template>
  <div class="qa-links">
    <ul class="qa-links__list">
      <li class="qa-links__item" v-for="link in getQuickAccessLinks" :key="link.id">
        <router-link class="qa-links__link" :to="{name: link.moduleName}">{{ link.title }}</router-link>
      </li>
  </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'QuickAccessLinks',
  computed: {
    ...mapGetters(['getQuickAccessLinks'])
  }
}
</script>

<style lang="scss" scoped>
.qa-links {
  margin-left: 8rem;

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
