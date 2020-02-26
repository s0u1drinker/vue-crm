<template>
  <div class="sidebar">
    <div class="sidebar-box menu">
      <div class="userpanel">
        <img :src="user.img" alt="" class="userpanel__img">
        <span class="userpanel__username">{{ user.name }}</span>
      </div>
      <input type="checkbox" class="menu__toggle">
      <div class="menu__button">
        <span></span>
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'Sidebar',
  data () {
    return {
      user: {
        name: 'Иван Иванов',
        img: 'img/user.jpg'
      }
    }
  },
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  bottom: 0;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 15rem;
}
</style>
