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
        <router-link class="navigation__link" :to="navItem.link">{{ navItem.title }}</router-link>
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
          link: '/',
          title: 'Главная'
        },
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
  position: relative;

  &__toggle {
    display: none;

    &:checked {

      & ~ .navigation__button {

        span {
          background-color: $white;
        }

        span:nth-child(1) {
          left: .25rem;
          transform: rotate(45deg);
          width: 1.65rem;
        }

        span:nth-child(2) {
          background-color: transparent;
        }

        span:nth-child(3) {
          left: .25rem;
          transform: rotate(-45deg);
          width: 1.65rem;
        }
      }

      & ~ .navigation__list {
        box-shadow: 0 0 .5rem $black;
        left: -1rem;
      }
    }
  }

  &__button {
    display: flex;
    flex-direction: column;
    height: 1.5rem;
    justify-content: space-between;
    position: relative;
    width: 1.75rem;
    z-index: 2;

    &:hover {
      cursor: pointer;
    }

    span {
      @include transition((background-color, transform));

      background-color: $dark;
      height: .25rem;
      position: relative;
      width: 100%;

      &:nth-child(1) {
        transform-origin: bottom left;
      }

      &:nth-child(3) {
        transform-origin: top left;
      }
    }
  }

  &__list {
    @include transition(left);
    $width: 20rem;
    background-color: $dark;
    box-sizing: border-box;
    height: 100vh;
    left: -$width - 1rem;
    padding: 7.5rem 1rem 1rem;
    position: absolute;
    top: -1rem;
    width: $width;
    z-index: 1;

    a {
      color: $white;
    }
  }

  &__item {

    & + & {
      margin-top: 1rem;
    }
  }

  &__link {
    @include transition(background-color);
    display: flex;
    padding: 1rem .5rem;

    &:hover {
      background-color: rgba($white, .15);
    }

    &_active {
      background-color: rgba($cardio, .75);
      pointer-events: none;
    }
  }
}
</style>
