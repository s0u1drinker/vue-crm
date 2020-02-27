<template>
  <div class="sidebar">
    <Userpanel />
    <Navigation />
  </div>
</template>

<script>
import Userpanel from '@/components/Userpanel'
import Navigation from '@/components/Navigation'

export default {
  name: 'Sidebar',
  components: {
    Userpanel,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  bottom: 0;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 15rem;
}
</style>
