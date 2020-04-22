<template>
  <div class="searchform">
    <img src="@/assets/logo.svg" alt="" class="logo">
    <form action="/" class="form form_searchform" v-on:submit.prevent>
      <input type="text" class="input" id="searchtext" placeholder="Введите номер документа/дату/отправителя" v-model="searchText">
      <button class="button"><i class="icon icon-search" @click="search"></i></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    search: function () {
      alert('I will not look for this: ' + this.searchText)
    }
  }
}
</script>

<style lang="scss" scoped>
.searchform {
  align-items: center;
  display: flex;

  .logo {
    margin-right: 2rem;
    width: 6rem;
  }
}

.form_searchform {
  @include def-border-radius;
  @include def-box-shadow-no-color;
  @include transition(color);
  border: 1px solid $gray;
  color: $gray_shadow;
  display: flex;
  overflow: hidden;
  width: 40rem;

  &:hover {
    color: $gray_dark;
  }

  input[type="text"] {
    padding: .75rem 1.25rem;
    width: 100%;
  }

  button {
    @include transition(background-color);
    padding: 0 .75rem;
    border-left: 1px solid $gray;
    border-radius: 0;

    &:hover {
      background-color: $gray_light;
      cursor: pointer;
    }

    i.icon {
      font-size: 1.5rem;
    }
  }
}
</style>
