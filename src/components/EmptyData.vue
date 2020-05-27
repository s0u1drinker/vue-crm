<template>
  <div class="empty-data">
    <i class="icon icon-empty_box"></i>
    <span>Ничего не найдено.</span>
  </div>
</template>

<script>
export default {
  name: 'EmptyData'
}
</script>

<style lang="scss" scoped>
.empty-data {
  align-items: center;
  color: $gray;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .icon {
    font-size: 5rem;
  }

  span {
    font-style: italic;
    margin-top: 2rem;
  }
}
</style>
