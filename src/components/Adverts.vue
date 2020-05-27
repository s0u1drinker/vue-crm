<template>
  <div class="adverts">
    <Advert v-for="advert in getAdverts" :key="advert.id" :content="advert" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import AdvertService from '@/services/AdvertService'

import Advert from '@/components/Advert'

export default {
  name: 'Adverts',
  components: {
    Advert
  },
  computed: {
    ...mapGetters(['getAdverts'])
  },
  methods: {
    ...mapMutations(['setAdverts'])
  },
  created: async function () {
    this.setAdverts((await AdvertService.getAdverts()).data)
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
