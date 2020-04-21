<template>
  <div class="sidebar">
    <fragment v-if="getUserAuth">
      <Userpanel />
      <Navigation />
    </fragment>
    <Authpanel v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Userpanel from '@/components/Userpanel'
import Authpanel from '@/components/Authpanel'
import Navigation from '@/components/Navigation'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['getUserAuth'])
  },
  components: {
    Userpanel,
    Authpanel,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1 0 auto;
  min-width: 23rem;
}
</style>
