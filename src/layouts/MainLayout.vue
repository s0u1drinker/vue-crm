<template>
  <main>
    <slot />
  </main>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style lang="scss" scoped>
main{
  background-color: $gray;
}
</style>
