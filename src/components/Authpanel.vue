<template>
  <ul class="authpanel">
    <li class="authpanel__item">
      <a href="/registration">Заявка на регистрацию</a>
    </li>
    <li class="authpanel__item">
      <a href="/auth" class="button button_lightgray">Войти</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Authpanel'
}
</script>

<style lang="scss" scoped>
.authpanel {
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
