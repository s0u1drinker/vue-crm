<template>
  <auth-reg-layout bg-type="auth">
    <AuthForm />
  </auth-reg-layout>
</template>

<script>
import AuthRegLayout from '@/layouts/AuthRegLayout'
import AuthForm from '@/components/AuthForm'

export default {
  name: 'Auth',
  components: {
    AuthRegLayout,
    AuthForm
  }
}
</script>

<style lang="scss" scoped>

</style>
