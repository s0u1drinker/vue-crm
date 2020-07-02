<template>
  <div class="search-data">
    Будем искать {{ getSearchText }}
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'SearchData',
  computed: {
    ...mapGetters(['getSearchText'])
  },
  methods: {
    ...mapMutations(['setSearchText'])
  }
}
</script>

<style lang="scss" scoped>

</style>
