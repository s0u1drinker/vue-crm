<template>
  <div class="elements">
    <ul class="elements__groups">
      <li
        class="elements__group"
        :class="{ 'elements__group_active' : showGroupIndex === item._id }"
        v-for="(item, index) in list"
        :key="index"
        @click="showGroupDepartments(item._id)"
      >
        {{ item.group_name }}
      </li>
    </ul>
    <div class="elements__elements">
      <ul
        class="elements__items"
        :class="{ 'elements__items_show' : showGroupIndex === group._id }"
        v-for="(group, index) in list"
        :key="index"
      >
        <li
          class="elements__item"
          :class="{ 'elements__item_active' : showItemID === item.id }"
          v-for="item in group.values"
          :key="item.id"
          @click="setDepartment(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Elements',
  data: function () {
    return {
      showGroupIndex: false,
      showItemID: false
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    showGroupDepartments: function (index) {
      this.showGroupIndex = index
    },
    setDepartment: function (id) {
      this.showItemID = id
      this.$emit('valueSelected', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.elements {
  align-items: flex-start;
  display: flex;
  margin-top: 4rem;

  &__groups,
  &__items {
    @include def-border-gray;
    @include def-box-shadow;
  }

  &__items {
    display: none;
    opacity: 0;

    &_show {
      display: block;
      animation: showBlock .5s ease-out;
      animation-fill-mode: forwards;
    }
  }

  &__item {

    &_active {
      background-color: $gray;
      pointer-events: none;
    }
  }

  &__elements {
    display: flex;
    margin-left: 4rem;
  }

  &__group {
    position: relative;

    &_active {
      background-color: $gray;
      pointer-events: none;

      &::after {
        $triangle_size: 1.25rem;
        content: '';
        border-top: $triangle_size solid transparent;
        border-bottom: $triangle_size solid transparent;
        border-left: $triangle_size solid $cardio;
        display: block;
        position: absolute;
        right: -($triangle_size + 1.5rem);
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  ul {
    min-width: 13rem;

    li {
      padding: .5rem 1rem;

      &:hover {
        background-color: $gray_light;
        cursor: pointer;
      }
    }
  }
}
</style>
