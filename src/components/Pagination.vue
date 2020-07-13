<template>
  <ul class="pagination" v-show="countPages > 1">
    <li
      class="pagination__item"
      v-if="page !== 1"
    >
      <a
        class="pagination__link"
        href="/"
        @click.prevent="$emit('getPage', page - 1)"
      >
        <i class="icon icon-chevron"></i>
      </a>
    </li>
    <li
      class="pagination__item"
      v-for="i in countPages"
      :key="i"
    >
      <a
        :class="['pagination__link', (i === page) ? 'pagination__link_selected' : '']"
        href="/"
        @click.prevent="$emit('getPage', i)"
      >{{ i }}</a>
    </li>
    <li
      class="pagination__item"
      v-show="page !== countPages"
    >
      <a
        class="pagination__link"
        href="/"
        @click.prevent="$emit('getPage', page + 1)"
      >
        <i class="icon icon-chevron icon-chevron_right"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['limit', 'total', 'page'],
  computed: {
    countPages: function () {
      return Math.ceil(this.total / this.limit)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  margin-top: 4rem;

  &__item {

    & + & {
      margin-left: 1rem;
    }
  }

  &__link {
    @include def-border-radius();
    @include transition(border-color);
    align-items: center;
    border: 1px solid transparent;
    color: $black;
    display: flex;
    height: 2rem;
    justify-content: center;
    width: 2rem;

    &:hover {
      border-color: $primary;
    }

    &_selected {
      border-color: $cardio;
      pointer-events: none;
    }
  }
}
</style>
