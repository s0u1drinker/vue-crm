<template>
  <div class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item" v-for="navItem in getNavLinks" :key="navItem.id">
        <router-link class="navigation__link" :to="{name: navItem.moduleName}">{{ navItem.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters(['getNavLinks'])
  }
}
</script>

<style lang='scss' scoped>
.navigation {
  @include def-box-shadow;
  @include def-border-radius;
  background-color: $white;
  border: 1px solid $gray_light;
  margin-top: 1rem;

  &__item {
    padding: .5rem;
  }

  &__link {
    color: inherit;
  }
}
</style>
