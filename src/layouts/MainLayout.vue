<template>
  <fragment>
    <Sidebar />
    <main>
      <div class="container">
        <slot />
      </div>
    </main>
  </fragment>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'MainLayout',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss" scoped>

</style>
