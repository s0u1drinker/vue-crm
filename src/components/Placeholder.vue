<template>
  <div
    class="placeholder"
    :class="{ 'placeholder_button' : typeButton }"
  >
    <template v-if="!typeButton">
      <i class="icon icon-update"></i>
      <span>{{ text }}</span>
    </template>
    <template v-else>
      <span>{{ text }}</span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Placeholder',
  props: {
    text: String,
    typeButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.placeholder {
  align-items: center;
  color: $gray;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .icon {
    font-size: 3rem;
    animation: loop 1.5s infinite ease;
  }

  span {
    font-style: italic;
    margin-top: 2rem;
  }

  &_button {
    flex-direction: row;
    padding: .5rem 1.25rem;

    span {
      margin: 0;

      &:first-child {
        margin-right: .5rem;
      }

      &.dot {
        $size: 1rem;
        @include flex-content-center;
        @include transition(font-size);
        height: $size;
        width: $size;

        &::before {
          content: "\2022";
          font-size: 2rem;
        }

        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          animation: blink 1s infinite ease;
        }

        &:nth-child(3) {
          animation-delay: .25s;
        }

        &:nth-child(4) {
          animation-delay: .5s;
        }
      }
    }
  }
}
</style>
