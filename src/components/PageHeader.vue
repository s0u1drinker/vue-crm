<template>
  <div class="header" :class="[logo ? 'header_logo' : '']">
    <img v-if="logo" src="@/assets/logo.svg" alt="" class="logo">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['title', 'logo']
}
</script>

<style lang="scss" scoped>
.header {

  * + & {
    margin-top: 1rem;
  }

  &_logo {
    align-items: center;
    display: flex;

    img {
      margin-right: 1rem;
      width: 4rem;
    }
  }
}
</style>
