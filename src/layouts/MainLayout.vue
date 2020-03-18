<template>
  <fragment>
    <main>
      <div class="container">
        <slot />
      </div>
    </main>
    <Sidebar />
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
