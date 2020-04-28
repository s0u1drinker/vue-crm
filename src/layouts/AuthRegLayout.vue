<template>
  <main class="bg" :class="['bg_' + bgType]">
    <div class="form-wrapper">
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  name: 'AuthRegLayout',
  props: {
    bgType: String
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    background-color: rgba($black, .25);
    bottom: 0;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }

  &_auth {
    background-image: url('../assets/img/bg/bg_auth.jpg');

    .form-wrapper {
      left: 50%;
      top: 42%;
      transform: translate(-50%, -50%);
      width: 27rem;
    }
  }

  &_reg {
    background-image: url('../assets/img/bg/bg_reg.jpg');

    .form-wrapper {
      left: 12.5%;
      top: 50%;
      transform: translateY(-50%);
      width: 30rem;
    }
  }

  .form-wrapper {
    position: relative;
    z-index: 2;
  }
}
</style>
