<template>
  <div class="select" :id="id">
    <input type="text" class="select__input">
    <label :for="id">{{ label }}</label>
    <ul class="select__list">
      <li
        class="select__item"
        v-for="item in list"
        :data-values="item.id"
        :key="item.id"
        @click="setValue(item)"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: ['id', 'label', 'list'],
  methods: {
    setValue: (el) => {
      alert(el)
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;

  &::before {
    $triangle: .4rem;
    border-left: $triangle solid transparent;
    border-right: $triangle solid transparent;
    border-top: .5rem solid $black;
    content: "";
    height: 0;
    position: absolute;
    right: .75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
  }

  & &__input {
    z-index: 3;
  }

  &__input {
    cursor: default;

    &:focus {
      border-radius: .25rem .25rem 0 0;
    }
  }

  & &__input:focus {

    & ~ .select__list {
      display: block;
      z-index: 5;
    }

    & ~ label {
      z-index: 3;
    }
  }

  &__list {
    background-color: $white;
    border: 1px solid $primary;
    border-radius: 0 0 .25rem .25rem;
    display: none;
    height: 9.625rem;
    left: 0;
    margin-top: -1px;
    overflow: auto;
    position: absolute;
    right: 0;
    top: 100%;
  }

  &__item {
    padding: .5em 1.25em;

    &:hover {
      background-color: $primary;
      color: $white;
      cursor: default;
    }
  }
}
</style>
