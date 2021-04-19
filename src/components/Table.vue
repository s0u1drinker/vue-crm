<template>
  <div class="table">
    <table class="table__table">
      <thead>
        <tr>
          <th
            v-for="(item, index) in header"
            :key="index"
            :style="{ width: sizes[index] + '%' }"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="showNoData">
          <tr>
            <td
              class="italic color_gray_dark"
              :colspan="header.length"
            >Нет данных для отображения</td>
          </tr>
        </template>
        <template v-else>
          <tr
            v-for="(tr, trIndex) in body"
            :key="trIndex"
          >
            <td
              v-for="(th, thIndex) in header"
              :key="thIndex"
            >
              {{ tr[th.id] }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    header: {
      type: Array,
      required: true
    },
    body: {
      type: Array,
      required: true
    },
    showNoData: {
      type: Boolean,
      required: false
    },
    sizes: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table {

  &__table {
    @include def-border-gray;
    @include def-border-radius;
    @include def-box-shadow;
    margin-top: 4rem;
    width: 100%;

    thead {
      background-color: $gray;
    }

    tbody {
      text-align: center;

      tr {
        @include transition(background-color);
        cursor: default;

        &:nth-child(even) {
          background-color: $gray_light;
        }

        &:hover {
          background-color: $primary_light;
        }
      }
    }

    th,
    td {
      padding: .5rem;
    }
  }
}
</style>
