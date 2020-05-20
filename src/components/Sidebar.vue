<template>
  <div class="sidebar">
    <fragment v-if="getUserAuth">
      <UserPanel />
      <Navigation />
    </fragment>
    <GuestPanel v-else />
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
  align-items: flex-end;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
  position: sticky;
  top: 0;
  flex: 1 0 auto;
  min-width: 23rem;
}
</style>
