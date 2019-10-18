<template>
  <div id="app-main" class="main-pc">
    <header-view />
    <background />
    <main>
      <transition name="module">
        <nav-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Background from '@/components/widget/background'
import HeaderView from './header'
import NavView from './nav'
export default {
  name: 'MainPc',
  components: {
    HeaderView, NavView,
    Background
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  #app-main{
    main{
      position: relative;
    }
  }
</style>
