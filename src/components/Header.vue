<template>
  <header>
    <Navigation />
    <Userpanel />
  </header>
</template>

<script>
import Userpanel from '@/components/Userpanel'
import Navigation from '@/components/Navigation'

export default {
  name: 'Header',
  components: {
    Userpanel,
    Navigation
  }
}
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
</style>
