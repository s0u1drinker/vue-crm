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
  box-sizing: border-box;
  padding: 1rem;
  flex: 1 0 auto;
  min-width: 23rem;
}
</style>
