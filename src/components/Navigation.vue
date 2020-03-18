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
.navigation {}
</style>
