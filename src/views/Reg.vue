<template>
  <auth-reg-layout bg-type="reg">
    <RegForm />
  </auth-reg-layout>
</template>

<script>
import AuthRegLayout from '@/layouts/AuthRegLayout'
import RegForm from '@/components/RegForm'

export default {
  name: 'Registration',
  components: {
    AuthRegLayout,
    RegForm
  }
}
</script>

<style lang="scss" scoped>

</style>
