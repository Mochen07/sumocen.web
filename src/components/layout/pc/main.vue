<template>
  <div id="app-main" class="main-pc">
    <header-view />
    <background />
    <main>
      <!--left nav-->
      <transition name="module">
        <nav-view />
      </transition>

      <!--main-->
      <div
        id="main-content"
        class="main-content"
      >
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>

      <!--right nav-->
      <transition name="aside">
        <aside-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Background from '@/components/widget/background'
import HeaderView from './header'
import NavView from './nav'
import AsideView from './aside/main'
export default {
  name: 'MainPc',
  components: {
    HeaderView, NavView, AsideView, // layout
    Background
  }
}
</script>

<style scoped lang="scss" ref="stylesheet/scss">
  #app-main{
    main{
      position: relative;
    }

    &.full-view {
      width: 100%;
    }

    .main-content {
      float: left;
      width: 42.5em;
      margin: 0 0 0 12.5em;
      position: relative;
      overflow: hidden;
      @include css3-prefix(transition, width .35s);

      &:-moz-full-screen {
        overflow-y: auto;
      }

      &:-webkit-full-screen {
        overflow-y: auto;
      }

      &:fullscreen {
        overflow-y: auto;
      }

      &.full-column {
        width: 62.5em;
        @include css3-prefix(transition, width .35s);
      }

      &.error-column {
        width: 100%;
        margin: 0;
        @include css3-prefix(transition, width .35s);
      }

      &.full-view {
        width: 100%;
        margin: -1em 0;
      }
    }
  }
</style>
