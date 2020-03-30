<template>
  <div class="adverts">
    <Advert v-for="advert in getAdverts" :key="advert.id" :content="advert" />
  </div>
</template>

<script>
import Advert from '@/components/Advert'
import { mapGetters } from 'vuex'

export default {
  name: 'Adverts',
  components: {
    Advert
  },
  computed: {
    ...mapGetters(['getEvents', 'getAdverts'])
  }
}
</script>

<style lang="scss" scoped>
.adverts {
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
}
</style>
