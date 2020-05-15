<template>
  <ul class="guestpanel">
    <li class="guestpanel__item">
      <router-link to="/registration">Заявка на регистрацию</router-link>
    </li>
    <li class="guestpanel__item">
      <router-link class="button button_lightgray" to="/auth">Войти</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GuestPanel'
}
</script>

<style lang="scss" scoped>
.guestpanel {
  @include def-border-radius;
  @include def-box-shadow;
  border: 1px solid $gray_light;
  box-sizing: border-box;
  padding: 0 1rem;
  width: 100%;

  &__item {
    padding: 1rem 0;
    position: relative;
    text-align: center;

    & + & {

      &::before {
        background-color: $gray_light;
        content: "";
        height: 1px;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
  }

  a {

    &:not(.button) {
      color: $black;

      &:hover {
        color: $cardio;
      }
    }
  }
}
</style>
