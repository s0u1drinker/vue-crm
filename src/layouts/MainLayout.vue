<template>
  <fragment>
    <Header />
    <main>
      <div class="container">
        <slot />
      </div>
    </main>
  </fragment>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'MainLayout',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>

</style>
