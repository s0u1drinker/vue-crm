<template>
  <auth-reg-layout bg-type="reg">
    <Form form-title="Регистрация в системе">
      Form registration
    </Form>
  </auth-reg-layout>
</template>

<script>
import AuthRegLayout from '@/layouts/AuthRegLayout'
import Form from '@/components/Form'

export default {
  name: 'Registration',
  components: {
    AuthRegLayout,
    Form
  }
}
</script>

<style lang="scss" scoped>

</style>
