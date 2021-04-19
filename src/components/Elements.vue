<template>
  <div
    class="elements"
    :class="[ showEffect ? `elements_effect_${showEffect}` : 'elements_effect_default' ]"
  >
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
    },
    showEffect: {
      type: String,
      default: ''
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
    @include def-border-radius;
    @include def-box-shadow;
    overflow: hidden;
  }

  &__group {

    &_active {
      background-color: $gray;
      pointer-events: none;
    }
  }

  &__elements {
    display: flex;
  }

  &__item {

    &_active {
      background-color: $gray;
      pointer-events: none;
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

  &_effect {

    &_default {

      .elements {

        &__elements {
          margin-left: 4rem;
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
      }
    }

    &_slider {
      overflow: hidden;

      .elements {

        &__groups {
          @include def-border-color($gray_dark);
          background-color: $white;
          position: relative;
          z-index: 10;
        }

        &__elements {
          position: relative;
          z-index: 0;
        }

        &__items {
          display: none;
          transform: translateX(-100%);

          &_show {
            display: block;
            animation: showBlockLikeSlider .5s ease-out;
            animation-fill-mode: forwards;
          }
        }

        &__item {
          padding-left: 2rem;
        }
      }
    }
  }
}
</style>
