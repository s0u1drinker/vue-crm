<template>
  <div class="userpanel">
    <i class="icon icon-user"></i>
    <span class="userpanel__username">{{ user.name }}</span>
    <a class="userpanel__exit" href="#" @click="exit"><i class="icon icon-exit"></i></a>
  </div>
</template>

<script>
export default {
  name: 'Userpanel',
  data () {
    return {
      user: {
        name: 'Иван Иванов'
      }
    }
  },
  methods: {
    exit: (event) => {
      alert('Stop it!')
    }
  }
}
</script>

<style lang="scss" scoped>
.userpanel {
  align-items: center;
  display: flex;

  .icon {
    font-size: 1.25rem;
  }

  &__username {
    margin: 0 2rem 0 .5rem;
  }

  &__exit {
    color: inherit;
    display: flex;

    &:hover {
      color: $cardio;
    }
  }
}
</style>
