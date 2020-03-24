<template>
  <nav class="navigation" :class="[ getUserConfig.pinNavigation ? 'navigation_fixed' : '' ]">
    <ul class="navigation__list">
      <li class="navigation__item" v-for="navItem in getNavLinks" :key="navItem.id">
        <router-link class="navigation__link" :to="{name: navItem.moduleName}">
          <i class="icon" :class="[ (navItem.icon ? 'icon-' + navItem.icon : '') ]"></i>
          <span>{{ navItem.title }}</span>
        </router-link>
      </li>
    </ul>
    <button class="navigation__pin" @click="togglePinNavigation()"><i class="icon icon-pin"></i></button>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters(['getNavLinks', 'getUserConfig'])
  },
  methods: {
    ...mapMutations(['togglePinNavigation'])
  }
}
</script>

<style lang='scss' scoped>
.navigation {
  @include def-box-shadow;
  @include def-border-radius;
  @include transition(width);
  background-color: $white;
  border: 1px solid $gray_light;
  box-sizing: border-box;
  margin-top: 1.5rem;
  position: relative;
  width: 3.75rem;

  &:hover,
  &_fixed {
    width: 100%;

    .navigation__link {

      span {
        opacity: 1;
      }
    }
  }

  &_fixed {

    .navigation__pin {
      color: $cardio;

      &:hover {
        color: $cardio;
      }
    }
  }

  &__item {
    overflow: hidden;
  }

  &__link {
    @include transition(background-color);
    align-items: center;
    color: inherit;
    display: flex;
    padding: .75rem 1rem;
    white-space: nowrap;

    &:hover {
      background-color: $gray_light;
    }

    .icon {
      font-size: 1.75rem;
    }

    span {
      @include transition(opacity);
      margin-left: .5rem;
      opacity: 0;
    }
  }

  &__pin {
    @include def-box-shadow;
    background-color: $white;
    border-radius: 50%;
    color: $gray;
    padding: .5rem;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(25%, -50%);

    &:hover {
      color: inherit;
    }
  }
}
</style>
