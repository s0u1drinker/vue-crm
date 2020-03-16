<template>
  <div class="searchform">
    <img src="@/assets/logo.svg" alt="" class="logo">
    <form action="/" class="form form_searchform">
      <input type="text" class="input" id="searchtext" placeholder="Введите номер документа/дату/отправителя">
      <button class="button"><i class="icon icon-search"></i></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchForm'
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
  border: 1px solid $gray;
  border-radius: .25rem;
  box-shadow: 0 .125rem .25rem $gray_shadow;
  display: flex;
  overflow: hidden;
  width: 40rem;

  input[type="text"] {
    padding: .75rem 1.25rem;
    width: 100%;
  }

  button {
    @include transition(background-color);
    padding: 0 .75rem;
    border-left: 1px solid $gray;

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
