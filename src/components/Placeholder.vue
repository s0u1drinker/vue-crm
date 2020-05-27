<template>
  <div class="placeholder">
    <i class="icon icon-update"></i>
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'Placeholder',
  props: ['text']
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
}
</style>
