<template>
  <main>
    <slot />
  </main>
</template>

<script>
export default {
  name: 'AuthRegLayout'
}
</script>

<style lang="scss" scoped>
main{
  background-color: $dark;
}
</style>
