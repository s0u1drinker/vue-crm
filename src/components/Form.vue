<template>
  <form class="form" @submit.prevent>
    <div class="form__header">
      <a href="/">
        <img src="@/assets/logo.svg" alt="" class="logo">
      </a>
      <h2 v-if="formTitle">{{ formTitle }}</h2>
    </div>
    <div class="form__content">
      <slot name="content" />
    </div>
    <div class="form__buttons">
      <slot name="buttons" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    formTitle: String
  }
}
</script>

<style lang="scss" scoped>
.form {
  @include def-border-radius;
  box-shadow: 0 .5rem .75rem $black;
  background-color: $white;
  padding: 1.5rem;

  a {
    color: $gray_dark;

    &:hover {
      color: $cardio;
    }
  }

  &__header {
    align-items: center;
    display: flex;

    a {
      margin-right: 1rem;
    }

    .logo {
      width: 4rem;
    }
  }

  &__content {
    margin-top: 1.5rem;
  }

  &__buttons {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  &__element {
    position: relative;

    & + & {
      margin-top: .75rem;
    }

    input {
      @include def-border-radius;
      @include transition(border-color);
      border: 1px solid $gray;
      position: relative;
      z-index: 1;
      width: 100%;
    }

    input:focus,
    &_filled > input {
      border-color: $primary;
    }

    label {
      @include transition((color, top, font-size));
      color: $gray_dark;
      display: inline-block;
      left: 1rem;
      padding: 0 .25rem;
      position: absolute;
      top: .5rem;
      z-index: 0;
    }

    input:focus ~ label,
    &_filled > label {
      background-color: $white;
      color: $primary;
      font-size: .875rem;
      top: -.55rem;
      z-index: 2;
    }
  }
}
</style>
