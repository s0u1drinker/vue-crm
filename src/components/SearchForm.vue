<template>
  <div class="searchform">
    <img src="@/assets/logo.svg" alt="" class="logo">
    <form @submit.prevent>
      <input type="text" class="input" id="searchtext" placeholder="Введите номер документа/дату/отправителя" v-model="searchText">
      <button class="button"><i class="icon icon-search" @click="prepareSearch"></i></button>
    </form>
  </div>
</template>

<script>
// TODO:
// 1. Отправка по Enter;
// 2. Не вся кнопка нажимается.
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'SearchForm',
  data () {
    return {
      searchText: ''
    }
  },
  computed: {
    ...mapGetters(['getSearchText']),
    currentRoute: function () {
      return this.$route.name
    },
    currentRouteSearch: function () {
      return this.currentRoute === 'Search'
    }
  },
  methods: {
    ...mapMutations(['setSearchText']),
    // Поиск данных
    prepareSearch: function () {
      this.setSearchText(this.searchText)

      if (!this.currentRouteSearch) {
        this.$router.push('/search')
      } else {
        this.$emit('search', '')
      }
    }
  },
  mounted: function () {
    this.searchText = (this.currentRouteSearch) ? this.getSearchText : ''
  }
}
</script>

<style lang="scss" scoped>
.searchform {
  align-items: center;
  display: flex;

  .logo {
    margin-right: 2rem;
    width: 6rem;
  }

  form {
    @include def-border-radius;
    @include def-box-shadow-no-color;
    @include transition(color);
    border: 1px solid $gray;
    color: $gray_shadow;
    display: flex;
    overflow: hidden;
    width: 40rem;

    &:hover {
      color: $gray_dark;
    }

    input[type="text"] {
      padding: .75rem 1.25rem;
      width: 100%;
    }

    button {
      @include transition(background-color);
      padding: 0 .75rem;
      border-left: 1px solid $gray;
      border-radius: 0;

      &:hover {
        background-color: $gray_light;
        cursor: pointer;
      }

      i.icon {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
