<template>
  <div class="sidebar" :class="[!getUserAuth ? 'sidebar_guest' : '']">
    <fragment v-if="getUserAuth">
      <UserPanel />
      <Navigation />
    </fragment>
    <GuestPanel v-else />
    <a
      class="sidebar__site-link"
      href="https://vokkc34.ru/"
      target="_blank"
    >
      <i class="icon icon-link"></i>Оф. сайт ГБУЗ &laquo;ВОККЦ&raquo;
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import UserPanel from '@/components/UserPanel'
import GuestPanel from '@/components/GuestPanel'
import Navigation from '@/components/Navigation'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['getUserAuth'])
  },
  components: {
    UserPanel,
    GuestPanel,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
  position: sticky;
  top: 0;
  flex: 1 0 auto;
  min-width: 23rem;

  &_guest {
    justify-content: space-between;
  }

  &__site-link {
    @include def-border-radius;
    @include def-box-shadow;
    @include transition((background-color, color));
    box-sizing: border-box;
    color: $primary;
    margin-top: 1.5rem;
    padding: 1rem;
    text-align: center;
    width: 100%;

    &:hover {
      background-color: $gray_light;
      color: $dark;
    }

    i.icon {
      margin-right: .5rem;
    }
  }
}
</style>
