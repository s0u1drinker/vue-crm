<template>
  <fragment>
    <main>
      <div class="container container_video">
        <slot />
      </div>
    </main>
    <Sidebar />
  </fragment>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'VideoPlayerLayout',
  components: {
    Sidebar
  }
}
</script>
