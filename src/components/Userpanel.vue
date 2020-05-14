<template>
  <div class="userpanel">
    <div class="userpanel__username">
      <i class="icon icon-user"></i>
      {{ getUsername }}
    </div>
    <div class="userpanel__list-info">
      <ul>
        <li><i class="icon icon-mail"></i>Сообщения: 0</li>
        <li><i class="icon icon-tasks"></i>Задачи: 0</li>
      </ul>
    </div>
    <div class="userpanel__buttons">
      <button class="button-icon button_gray" @click="settings"><i class="icon icon-settings"></i>Настройки</button>
      <button class="button-icon button_primary" @click="logOut"><i class="icon icon-logout"></i>Выход</button>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'UserPanel',
  computed: {
    ...mapGetters(['getUsername'])
  },
  methods: {
    ...mapMutations(['userLogOut']),
    logOut: async function () {
      const response = await AuthService.logout()

      if (response.data.err) {
        alert('Возникла непредвиденная ошибка!')
      } else {
        this.userLogOut()
      }
    },
    settings: () => {
      alert('Nothing to config =(')
    }
  }
}
</script>

<style lang="scss" scoped>
.userpanel {
  @include def-border-radius;
  @include def-box-shadow;
  border: 1px solid $gray_light;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;

  &__username {
    align-items: center;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;

    .icon {
      font-size: 1.75rem;
      margin-right: .5rem;
    }
  }

  &__list-info {
    margin-top: 1rem;

    .icon {
      font-size: 1rem;
      margin-left: .375rem;
      margin-right: .875rem;
    }

    li + li {
      margin-top: .25rem;
    }
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
}
</style>
