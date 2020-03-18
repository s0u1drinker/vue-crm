<template>
  <div class="userpanel">
    <div class="userpanel__username">
      <i class="icon icon-user"></i>{{ getUsername }}
    </div>
    <div class="userpanel__list-info">
      <ul>
        <li>Сообщения: 0</li>
        <li>Задачи: 0</li>
      </ul>
    </div>
    <div class="userpanel__buttons">
      <button class="button-icon button_gray" @click="settings"><i class="icon icon-settings"></i>Настройки</button>
      <button class="button-icon button_primary" @click="exit"><i class="icon icon-logout"></i>Выход</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Userpanel',
  computed: {
    ...mapGetters(['getUsername'])
  },
  methods: {
    exit: (event) => {
      alert('Stop it!')
    },
    settings: () => {
      alert('No!')
    }
  }
}
</script>

<style lang="scss" scoped>
.userpanel {
  display: flex;
  flex-direction: column;

  &__username {
    .icon {
      font-size: 1.25rem;
    }
  }

  &__list-info {}

  &__buttons {}
}
</style>
