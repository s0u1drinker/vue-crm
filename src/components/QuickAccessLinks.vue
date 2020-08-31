<template>
  <div class="qa-links" :class="classOffset">
    <img v-if="logo" src="@/assets/logo.svg" alt="" class="logo">
    <ul class="qa-links__list">
      <li
        class="qa-links__item"
        v-for="link in quickAccessLinks"
        :key="link.id"
      >
        <router-link
          class="qa-links__link"
          :to="{name: link.module_name}"
        >{{ link.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import { bus } from '../main'

export default {
  name: 'QuickAccessLinks',
  props: {
    offset: {
      type: String,
      default: ''
    },
    logo: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      quickAccessLinks: []
    }
  },
  computed: {
    ...mapGetters(['getQuickAccessLinks']),
    classOffset: function () {
      return this.offset ? `qa-links_offset_${this.offset}` : false
    }
  },
  methods: {
    ...mapMutations(['updateNavLinks', 'resetNavLinks']),
    // Убираем из списка ссылок быстрого доступа текущую страницу и записываем в переменную
    setQuickAccessLinks: function () {
      const route = this.$route.name

      this.quickAccessLinks = this.getQuickAccessLinks.filter((link) => {
        return link.module_name !== route
      })
    }
  },
  mounted: function () {
    // Слушаем глобальную шину данных
    bus.$on('forceUpdateQuickAccessLinks', () => {
      this.resetNavLinks()
      this.setQuickAccessLinks()
    })

    // Если ссылок нет (первое обращение к странице) - обновляемся
    if (!this.getQuickAccessLinks.length) {
      this.updateNavLinks()
    }

    this.setQuickAccessLinks()
  }
}
</script>

<style lang="scss" scoped>
.qa-links {
  align-items: center;
  display: flex;

  &_offset {

    &_5 {
      margin-left: 5rem;
    }

    &_8 {
      margin-left: 8rem;
    }
  }

  &__list {
    display: flex;
  }

  &__item {

    & + & {
      margin-left: 1.25rem;
    }
  }

  &__link {
    @include transition(color);
    color: $primary;

    &:hover {
      color: $cardio;
    }
  }

  .logo {
    margin-right: 1.25rem;
    width: 2rem;
  }
}
</style>
