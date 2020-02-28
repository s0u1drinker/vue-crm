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
</style>
