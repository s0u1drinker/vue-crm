<template>
  <div class="navigation">
    <input type="checkbox" class="navigation__toggle"  id="navigation__toggle">
    <label class="navigation__button" for="navigation__toggle">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <ul class="navigation__list">
      <li class="navigation__item" v-for="(navItem, key) in navList" :key="key">
        <router-link :to="navItem.link">{{ navItem.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      navList: [
        {
          link: '/phonebook',
          title: 'Телефонный справочник'
        },
        {
          link: '/events',
          title: 'Список мероприятий'
        },
        {
          link: '/settings',
          title: 'Настройки'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.navigation {

  &__button {
    display: flex;
    flex-direction: column;
    height: 1.25rem;
    justify-content: space-between;
    width: 1.75rem;

    span {
      background-color: $dark;
      height: .25rem;
      width: 100%;
    }
  }
}
</style>
