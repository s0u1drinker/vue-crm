<template>
  <div class="authpanel">
    <a href="#">Подать заявку</a>
    <a href="#" class="button button_lightgray">Войти</a>
  </div>
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
  align-items: center;
  border: 1px solid $gray_light;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;

  a {

    &:not(.button) {
      color: $gray_dark;

      &:hover {
        color: $cardio;
      }
    }

    & + a {
      margin-top: 1rem;
    }
  }
}
</style>
